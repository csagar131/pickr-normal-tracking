import styled from "styled-components";
import { Button } from "antd";
export const Footer = styled.img`
  width: 100% !important;
  bottom: 0;
`;

export const MainContainer = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  padding: 75px 70px;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    letter-spacing: 0.01em;
    color: #38446d;
  }
  .subtitle {
    margin-top: 39px;
  }
  .support-text {
    font-weight: 400;
    font-size: 14px;
    color: #38446d;
    margin-bottom: 15px;
  }
  .input-button-container {
    display: flex;
  }
  .powered {
    text-align: center;
    margin-top: 85px;
    text-decoration-line: underline;
    color: #38446d;
  }

  @media screen and (max-width: 640px) {
    padding: 15px 10px;
    .input-button-container {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 20px;
    }

    .subtitle {
      font-size: 18px;
    }

  }
`;


export const LandingSearchPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
export const CustomButton = styled(Button)`
  width: 216px !important;
  /* width: 100%; */
  height: 49px !important;
  background: linear-gradient(
    105.06deg,
    #ff4c4a -5.19%,
    #ff756c 32.99%,
    #f16242 57.37%,
    #da4040 97.18%,
    #ce2500 116.5%,
    #9a0200 150.8%
  ) !important;
  border-radius: 10px !important;
  @media screen and (max-width: 648px) {
    margin-top: 10px;
    width: 100% !important;
    .ant-btn-primary {
      width: 100%;
    }
  }
`;
