import styled, { css } from "styled-components";
import { CheckCircleFilled } from "@ant-design/icons";
import { Button, Steps } from "antd";
const { Step } = Steps;
export const MainContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 23px 20px;
`;
export const Container = styled.div`
  border-bottom: 1px solid #edf0f9;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-style: normal;
  color: #38446d;
  .supportContainer {
    display: flex;
    flex: 0.6;
    justify-content: space-between;
    .expected {
      font-size: 16px;
    }
    .delivery-info {
      color: #158a2a;
      font-weight: 700;
      font-size: 14px;
    }
  }
  .order-placed {
    display: flex;
    flex: 0.4;
    .icon {
      height: 29px;
      width: 29px;
    }
  }
  .content {
    margin-left: 13px;
    font-size: 18px;
    .subcontent {
      font-weight: 400;
      font-size: 14px;
    }
  }

  .support {
    font-size: 14px;
    color: #1c439f;
    font-weight: 400;
  }
  .support_mobile {
    position: absolute;
    right: 240px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .supportContainer {
      display : flex !important;
      justify-content :end !important;
      width: 100%;
      margin-top: 30px;
      .expected {
        font-size: 12px;
      }
    }
    .content {
      margin-left: 13px;
      font-size: 14px;
      .subcontent {
        font-weight: 400;
        font-size: 12px;
      }
    }
    .icon {
      height: 24px;
      width: 24px;
    }
    .support {
      font-size: 12px;
      
      /* right: 90px; */
    }
  }
`;

export const Icon = styled(CheckCircleFilled)`
  font-size: 29px;
`;

export const OrderItem = styled.div`
  font-size: 16px;
  color: #38446d;
  border-right: 1px solid #c6c8e3;
  padding: 0px 12px;

  .title {
    font-weight: 400;
  }
  .content {
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    border: none;
    padding: 0px;
    font-size: 14px;
    
  }
`;

export const ViewButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 154.96px;
  height: 40px;
  border-radius: 10px !important;
  background-color: #0051bf !important;
  text-align: center !important;
`;

export const StatusContainer = styled.div`
  margin-top: 24px;
  display: flex;
  .stepper-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    padding: 25px;
    overflow-x: hidden;
    height: 487px;
    .steps {
      cursor: pointer;
    }
    .ant-steps-vertical.ant-steps-dot
      .ant-steps-item
      > .ant-steps-item-container
      > .ant-steps-item-tail {
      top: 13px;
      left: -9px;
      margin: 0;
      padding: 0px;
    }
  }
  .brand-details-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    margin-left: 24px;
    font-size: 16px;
    .brand-name {
      padding: 33px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      font-weight: 700;
      color: #000b34;
    }
    .mode-of-payment {
      padding: 10px;
      border-bottom: 1px solid #c5cde3;
      margin: 15px;
      display: flex;
      justify-content: space-between;
      .prepaid {
        font-weight: 700;
        color: #0c3784;
      }
      .payment {
        font-weight: 600;
        color: #38446d;
      }
    }
    .product-name {
      padding: 0px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      overflow-x: hidden;
      height: 200px;

      .product-item {
        font-size: 16px;
        color: #38446d;
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
        margin: 15px;
        align-items: flex-start;
      }
    }
    @media screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Stepper = styled(Steps)`
  .ant-steps-vertical {
    position: absolute;
    margin-left: -24px;
  }
`;

export const Heading = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #38446d;
  padding: 0px 25px 22px;
`;

export const InnerSteps = styled(Steps)`
  .ant-steps .ant-steps-vertical .ant-steps-dot {
    margin-left: 1px;
    z-index: 50000;
  }
  .ant-steps-item-content {
    position: absolute;
    z-index: 10000;
  }
`;

export const ViewMore = styled.div`
  cursor: pointer;
  font-size: small;
  font-weight: bolder;
`;
