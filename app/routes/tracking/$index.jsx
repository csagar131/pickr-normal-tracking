import { useLoaderData } from "remix";
import { Title, CustomInput, CustomButton } from "~/components/UIElements";
import { MainContainer, Container, PoweredContainer } from "./style";
import OrderInfocontainer from "~/components/OrderInfoContainer";
import { useState, useEffect } from "react";
import { getTrackingDetails } from "~/utils/server.query";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const loader = async ({ params }) => {
  const trackingId = params.index;
  try {
    const data = await getTrackingDetails(trackingId);
    return { data, trackingId };
  } catch (error) {
    return error;
  }
};

function TrackingDetails() {
  const loaderData = useLoaderData();
  const [data, setData] = useState({
    ...loaderData.data,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [trackingId, setTrackingId] = useState(loaderData.trackingId);
  const [isError, setIsError] = useState({
    errorStatus: false,
    message: "",
  });
  const isMultiOrder = data?.response_list ? true : false;

  const handleClick = async () => {
    if (!trackingId) {
      notification.error({ message: "Please enter Tracking ID" });
      return;
    } else {
      setIsLoading(true);
      window.location.href = `/tracking/${trackingId}`;
      setData({ ...data });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (data?.err) {
      setIsError({ errorStatus: true, message: data.err });
    } else {
      setIsError({ errorStatus: false, message: "" });
    }
  }, [data]);
  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      window.location.href = `/tracking/${trackingId}`;
    }
  };

  return (
    <div>
      <Container>
        <Title>Order Tracking Details</Title>
        <div className="search-container">
          <CustomInput
            placeholder="Enter Tracking ID (Comma separated if multiple)"
            style={{ marginRight: 10 }}
            onChange={(e) => {
              setTrackingId(e.target.value);
            }}
            value={trackingId}
            allowClear
            onKeyDown={handleEnterKey}
          />
          <CustomButton type="danger" onClick={handleClick} block>
            Track Order
          </CustomButton>
        </div>

        {isError.errorStatus && (
          <div style={{ color: "#FF0006", marginTop: "8px", height: "250px" }}>
            {isError.message}
          </div>
        )}
        {isLoading ? (
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        ) : (
          !data?.err && (
            <div className="order-info-container">
              {isMultiOrder ? (
                data?.response_list?.map((trackingData, index) => {
                  const {
                    courier_used,
                    status,
                    order_created_at,
                    client_order_id,
                    edd_stamp,
                    last_update_from_order_ms,
                    item_list,
                    track_arr,
                    tracking_id
                  } = trackingData && trackingData;

                  return (
                    <MainContainer style={{ marginBottom: "30px" }} key={index}>
                      <OrderInfocontainer
                        courier={courier_used}
                        status={status?.current_status_type}
                        orderDate={order_created_at}
                        orderId={client_order_id}
                        expectedDelivery={edd_stamp}
                        lastUpdate={trackingData?.status?.current_status_time}
                        isMultiOrder={isMultiOrder}
                        itemList={item_list}
                        trackArr={track_arr}
                        data={data}
                        resData={trackingData}
                        id={`brand${trackingData?.tracking_id}`}
                        trackingId={tracking_id}
                      />
                    </MainContainer>
                  );
                })
              ) : (
                <MainContainer style={{ marginBottom: "30px" }}>
                  <OrderInfocontainer
                    courier={data.courier_used}
                    status={data?.status?.current_status_type}
                    orderDate={data?.order_created_at}
                    orderId={data?.client_order_id}
                    expectedDelivery={data?.edd_stamp}
                    lastUpdate={data?.status?.current_status_time}
                    isMultiOrder={isMultiOrder}
                    itemList={data?.item_list}
                    trackArr={data?.track_arr}
                    data={data}
                    resData={data}
                    id={`brand${data?.tracking_id}`}
                    trackingId={data?.tracking_id}
                  />
                </MainContainer>
              )}
            </div>
          )
        )}
        <PoweredContainer>Powered by Pickrr</PoweredContainer>
      </Container>
    </div>
  );
}

export default TrackingDetails;
