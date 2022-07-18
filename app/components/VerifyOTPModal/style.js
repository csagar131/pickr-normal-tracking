import styled from "styled-components";
import { Modal, Button } from "antd";
export const ModalX = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`;
export const VerifyButton = styled(Button)`
  &.ant-btn {
    background-color: #0051bf;
    border-radius: 10px;
    color: #fff;
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    height: 44px;
    margin-left: 7px;
    border: 0;
    &:hover {
      background: #fa6157;
      color: white;
    }
  }
`;

export const ResendButton = styled(Button)`
  &.ant-btn {
    background: #ffffff;
    border-radius: 10px;
    width: 100%;
    color: #303b91;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    height: 44px;
    margin-right: 7px;
    border: 1px solid #ccd3de;
    &:hover {
      background: #d5e8f3;
      color: #303b91;
      border: 1px solid #ccd3de;
    }
  }
`;
