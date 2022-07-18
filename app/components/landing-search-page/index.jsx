import React, { useState } from "react";
import { Link } from "@remix-run/react";

import {
  Footer,
  MainContainer,
  LandingSearchPageContainer,
  CustomButton,
} from "./style";
// import { useHistory } from "react-router-dom";
import { CustomInput, Title } from "~/components/UIElements";
function LandingSearchPage() {
  const [trackingId, setTrackingId] = useState("");

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      window.location.href = `/tracking/${trackingId}`;
    }
  };

  return (
    <LandingSearchPageContainer>
      <MainContainer>
        <div className="title">Welcome to Pickrr Tracking !</div>
        <Title className="subtitle"> Track Your Order</Title>
        <div className="support-text">
          You can find tracking ID in the email and SMS alerts you received from
          us upon order confirmation.
        </div>
        <div className="input-button-container">
          <CustomInput
            style={{ marginRight: 10 }}
            placeholder="Enter Tracking ID (Comma separated if multiple)"
            onChange={(e) => {
              setTrackingId(e.target.value);
            }}
            size="large"
            value={trackingId}
            allowClear
            onPressEnter={handleEnterKey}
          />
          <Link to={`/tracking/${trackingId}`}>
            <CustomButton type="primary">Track Order</CustomButton>
          </Link>{" "}
        </div>
        <div className="powered">Powered by Pickrr </div>
      </MainContainer>
    </LandingSearchPageContainer>
  );
}

export default LandingSearchPage;
