import { Button, Steps, Row, Col } from "antd";
import React, { useState } from "react";
import {
  Container,
  // Icon,
  // OrderInfoContainer,
  OrderItem,
  MainContainer,
  ViewButton,
  StatusContainer,
  Heading,
  Stepper,
  ViewMore,
} from "./style";
import { CheckOrderStatus, Color, icons } from "./utils";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import Feedback from "../Feeback";
import { FlexContainer, SpaceBetweenContainer } from "../UIElements";
import TimelineComp from "../TimelineComp";
import { useMediaQuery } from "react-responsive";

const OrderItems = ({ title, content, css }) => {
  return (
    <OrderItem style={css}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </OrderItem>
  );
};

const OrderInfocontainer = ({
  status,
  expectedDelivery,
  isMultiOrder,
  courier,
  orderDate,
  orderId,
  lastUpdate,
  itemList,
  trackArr,
  data,
  resData,
  id,
}) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const [isViewMore, setIsViewMore] = useState(false);
  const [showMoreItems, setShowMoreItems] = useState(false);

  const handleshowMoreItems = () => {
    setShowMoreItems(!showMoreItems);
  };

  if (resData.err) {
    return (
      <MainContainer style={{ color: "#FF0006" }}>
        {`Tracking Id ${resData.tracking_id} Not Found`}
      </MainContainer>
    );
  }

  var localTime = moment().format("YYYY-MM-DD"); // store localTime
  var proposedDate = localTime + "T00:00:00.000Z";

  return (
    <div>
      <MainContainer>
        <Container>
          <div className="order-placed">
            <img src={icons[status]} className="icon" />
            <div className="content">
              <div style={{ color: Color(status) }}>
                {CheckOrderStatus(status)}
              </div>

              <div className="subcontent">
                Last updated on{" "}
                {moment(lastUpdate).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
          </div>
          <div className="supportContainer">
            {status !== "DL" && (
              <div className="expectedContainer">
                <div className="expected">Expected Delivery </div>
                <div className="delivery-info">
                  {status === "NDR" || status === "OC"
                    ? "-"
                    : `Arriving on ${moment(expectedDelivery).format(
                        "MMMM Do YYYY"
                      )}`}
                </div>
              </div>
            )}
            <a href="mailto:support@pickrr.com?">
              <div
                className={
                  expectedDelivery !== proposedDate && !isMobileDevice
                    ? "support support_mobile"
                    : "support"
                }
                mail
              >
                support@pickrr.com
              </div>
            </a>
          </div>
        </Container>
        {!isMobileDevice ? (
          <Row style={{ marginTop: "12px" }} gutter="16px" justify="end">
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems
                title="Order Date"
                content={moment(orderDate).format("MMMM Do YYYY")}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems title="Order ID " content={orderId} />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems title="Courier" content={courier} />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems
                title="Payment Mode"
                content={!data?.is_cod ? "Prepaid" : "COD"}
              />
            </Col>
          </Row>
        ) : (
          <>
            <SpaceBetweenContainer style={{ marginTop: "12px" }}>
              <OrderItems
                title="Order Date"
                content={moment(new Date(orderDate))?.format("MMMM Do YYYY")}
              />
              <OrderItems title="Order ID " content={orderId} />
            </SpaceBetweenContainer>
            <SpaceBetweenContainer style={{ marginTop: "12px" }}>
              <OrderItems title="Courier" content={courier} />
              <OrderItems
                title="Payment Mode"
                content={!data?.is_cod ? "Prepaid" : "COD"}
              />
            </SpaceBetweenContainer>
          </>
        )}
      </MainContainer>
      {isMultiOrder && (
         <div
         style={{ textAlign: "center", marginTop: "-15px" }}
       >
         <ViewButton type="primary" size="large" onClick={(e) =>{
           setIsViewMore(!isViewMore)
           e.target.scrollIntoView({behavior: "smooth",  inline: "nearest"})
         }}>
           {isViewMore ? "Hide" : "View"} Details{" "}
           {isViewMore ? <UpOutlined /> : <DownOutlined />}
         </ViewButton>
       </div>
      )}
      <div>{status == "DL" && <Feedback data={data} />}</div>
      {(isViewMore || (!isMultiOrder && !isViewMore)) && (
        <StatusContainer id={id}>
          <div className="stepper-container">
            <TimelineComp trackArr={trackArr && trackArr} />
          </div>

          <div className="brand-details-container">
            <div className="brand-name">Brand Name</div>
            <div className="mode-of-payment">
              <div>Mode of payment :</div>
              <div className="prepaid">{data?.is_cod ? "COD" : "Prepaid"}</div>
            </div>
            <div>
              <Heading>Product Details :</Heading>
              <div className="product-name">
                {itemList &&
                  itemList?.map((item, index) => {
                    if (index < 2) {
                      return (
                        <div className="product-item" key={index}>
                          <FlexContainer style={{ alignItems: "flex-start" }}>
                            <div style={{ marginRight: 10 }}>{index + 1}</div>
                            <div>
                              <div>{item?.item_name}</div>
                              <div>Qty : {item?.quantity}</div>
                            </div>
                          </FlexContainer>
                          <div className="prepaid">₹{item?.price}</div>
                        </div>
                      );
                    } else {
                      if (showMoreItems) {
                        return (
                          <div className="product-item" key={index}>
                            <FlexContainer>
                              <div
                                style={{
                                  marginRight: "10px",
                                }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <div>{item?.item_name}</div>
                                <div
                                  style={{
                                    marginRight: "10px",
                                    marginTop: "-20px",
                                  }}
                                >
                                  Qty : {item?.quantity}
                                </div>
                              </div>
                            </FlexContainer>
                            <div className="prepaid">₹{item?.price}</div>
                          </div>
                        );
                      }
                    }
                  })}
                {itemList?.length > 2 && !showMoreItems && (
                  <ViewMore onClick={handleshowMoreItems}>
                    {"+"}
                    {itemList.length - 2} more
                  </ViewMore>
                )}
              </div>
            </div>
            <div className="mode-of-payment">
              <div>Total</div>
              <div className="prepaid">₹{data?.info?.invoice_value}</div>
            </div>
          </div>
        </StatusContainer>
      )}
    </div>
  );
};

export default OrderInfocontainer;
