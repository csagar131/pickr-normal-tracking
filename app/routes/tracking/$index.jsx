import { useLoaderData } from "remix";
import { Title, CustomInput, CustomButton } from "~/components/UIElements";
import { MainContainer, Container, PoweredContainer } from "./style";
import OrderInfocontainer from "~/components/OrderInfoContainer";
import { useState, useEffect, useRef } from "react";
import { getTrackingDetails } from "~/utils/server.query";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [trackingId, setTrackingId] = useState(loaderData.trackingId);
  const [isError, setIsError] = useState({
    errorStatus: false,
    message: "",
  });
  const isMultiOrder = data?.response_list ? true : false;

  useEffect(() => {
    setIsLoading(true);
    setData(loaderData.data)
    setIsLoading(false)
  }, [loaderData])
  

  const handleClick = async () => {
    if (!trackingId) {
      notification.error({ message: "Please enter Tracking ID" });
      return;
    } else {
      setIsLoading(true);
      navigate(`/tracking/${trackingId}`);
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
    if(!trackingId && (e.keyCode === 13 || e.which === 13)){
      notification.error({ message: "Please enter Tracking ID" });
      return;
    }
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      navigate(`/tracking/${trackingId}`);
    }
  };
  return (
    <div style={{ backgroundImage : `url('https://d10srchmli830n.cloudfront.net/1659003938502_d35a17de-8594-4f56-bdda-4bc0900ee55a_grouptrackingbgimg.svg')`,backgroundRepeat:'no-repeat',backgroundPosition : 'bottom'}}>
      <Container>
        <Title>Order Tracking Details</Title>
        <div className="search-container">
          <CustomInput
            placeholder="Enter Tracking ID (Comma separated if multiple)"
            style={{ marginRight: 10 }}
            onChange={(e) => {
              console.log("onchange");
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
