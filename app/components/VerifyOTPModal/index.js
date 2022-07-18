import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { ModalX, VerifyButton, ResendButton } from "./style";
import {
  Title,
  SmallerText,
  CustomInput,
  SpaceBetweenContainer,
} from "../UIElements/index";

const VerifyOTPModal = ({
  isModalVisible,
  setIsModalVisible,
  finalSubmit,
  sendOTP,
  phoneNumber,
  modalLoading,
}) => {
  const [otp, setOtp] = useState(null);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleVerify = () => {
    finalSubmit(otp);
  };

  useEffect(() => {
    setOtp(null);
  }, [isModalVisible]);

  return (
    <>
      <ModalX
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        closeIcon={
          <img
            src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719781/Pickrr/modalClose_mzqtim.svg"
            alt="close"
            style={{ marginRight: "10px", marginTop: "5px" }}
          />
        }
        footer={null}
      >
        <Row gutter={[16, 16]}>
          <Col span={16} offset={4}>
            <Title size={3} style={{ textAlign: "center" }}>
              Verify OTP
            </Title>

            <SmallerText size={2} style={{ textAlign: "center" }}>
              We have sent an OTP on this number xxxxxx{phoneNumber} to verify
              you as a buyer
            </SmallerText>
          </Col>
          <Col span={18} offset={3} className="mb-10">
            <CustomInput
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Col>
          <Col span={18} offset={3} style={{ marginTop: "20px" }}>
            <SpaceBetweenContainer>
              <ResendButton onClick={sendOTP}>Resend OTP</ResendButton>
              <VerifyButton onClick={handleVerify} loading={modalLoading}>
                Verify OTP
              </VerifyButton>
            </SpaceBetweenContainer>
          </Col>
        </Row>
      </ModalX>
    </>
  );
};

export default VerifyOTPModal;
