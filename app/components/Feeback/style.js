import { Button } from "antd";
import styled from "styled-components";
import { FlexColContainer, FlexContainer } from "../UIElements";

export const FeedbackContainer = styled.div`
  padding: 20px 34px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  .heading {
    font-weight: 700;
    font-size: 24px;
    color: #38446d;
  }

  @media screen and (max-width: 768px) {
    .heading {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

export const Container = styled.div`
  background: #0051bf;
  border-radius: 10px;
  margin: auto 0;
  .button {
    border: none;
    width: 221px;
    height: 40px;
    color: #38446d;
    background: #ffffff;
    border-radius: 10px;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #ffffff;
`;

export const IconContainer = styled(FlexColContainer)`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  .icon {
    font-size: 30px;
    color: #002659;
  }
`;

export const RateContainer = styled(FlexContainer)`
  justify-content: flex-start;
  color: #38446d;
  font-weight: 700;
  .heading {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .heading {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;
