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
import { CheckOrderStatus, Color } from "./utils";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import Feedback from "../Feeback";
import { FlexContainer } from "../UIElements";
import TimelineComp from "../TimelineComp";

const OrderItems = ({ title, content, css }) => {
  return (
    <OrderItem style={css}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </OrderItem>
  );
};

const icons = {
  NDR: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  DL: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  RTO: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  RTD: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  OC: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  OT: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OO: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
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
}) => {
  const [isViewMore, setIsViewMore] = useState(false);
  const [showMoreItems, setShowMoreItems] = useState(false);

  const handleshowMoreItems = () => {
    setShowMoreItems(!showMoreItems);
  };

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
            {status !== "delivered" && (
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
              <div className="support" mail>
                support@pickrr.com
              </div>
            </a>
          </div>
        </Container>
        <Row style={{ marginTop: "12px" }} gutter="16px" justify="end">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <OrderItems
              title="Order Date"
              content={moment(orderDate).format("MMMM Do YYYY")}
              css={{ float: "center" }}
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <OrderItems
              title="Order ID "
              content={orderId}
              css={{ borderRight: 0, float: "center" }}
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <OrderItems
              title="Courier"
              content={courier}
              css={{ float: "center" }}
            />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <OrderItems
              title="Payment Mode"
              content="Prepaid"
              css={{ borderRight: 0, float: "center" }}
            />
          </Col>
        </Row>
      </MainContainer>
      {isMultiOrder && (
        <div
          style={{ textAlign: "center", marginTop: "-15px" }}
          onClick={() => setIsViewMore(!isViewMore)}
        >
          <ViewButton type="primary" size="large">
            {isViewMore ? "Hide" : "View"} Details{" "}
            {isViewMore ? <UpOutlined /> : <DownOutlined />}
          </ViewButton>
        </div>
      )}
      <div>{status == "DL" && <Feedback data={data} />}</div>
      {(isViewMore || (!isMultiOrder && !isViewMore)) && (
        <StatusContainer>
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
                          <FlexContainer>
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
                                  marginTop: "-20px",
                                }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <div>{item?.item_name}</div>
                                <div>Qty : {item?.quantity}</div>
                              </div>
                            </FlexContainer>
                            <div className="prepaid">₹{item?.price}</div>
                          </div>
                        );
                      }
                    }
                  })}
                {itemList.length > 2 && !showMoreItems && (
                  <ViewMore onClick={handleshowMoreItems}>
                    +{itemList.length - 2} more
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
