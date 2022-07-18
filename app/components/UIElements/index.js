import styled from "styled-components";
import { Button, Input } from "antd";
import media from "./media";
const { Search } = Input;

const { TextArea } = Input;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => {
    switch (props.direction) {
      case 1:
        return "column";

      default:
        return "row";
    }
  }};
`;
export const SpaceAroundContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${(props) => {
    switch (props.direction) {
      case 1:
        return "column";

      default:
        return "row";
    }
  }};
`;

export const SpaceEvenlyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "initial")};
  justify-content: ${(props) => (props.center ? "center" : "initial")};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.mobile`
  flex-direction:column;
  `}
`;

export const FlexBox = styled.div`
  display: flex;
`;
export const SpaceBetweenContainerDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  ${media.mobile`
  flex-direction:column;
  `}
`;

export const CommonText = styled.p`
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.size) {
      case 1:
        return "24px";
      case 2:
        return "20px";

      default:
        return "24px";
    }
  }};

  letter-spacing: -0.01em;
  color: ${(props) => (props.color === "white" ? "#ffff" : "black")};
  margin-bottom: 0px;
  ${media.mobile`
  font-size: 20px;
  `}
  ${media.tablet`
  font-size: 14px;
  `}
  ${media.ipadPro`
  font-size: 14px;
  `}
`;
export const SmallerText = styled.p`
  font-weight: 400;
  color: #38446d;
  font-size: ${(props) => {
    switch (props.size) {
      case 1:
        return "16px";
      case 2:
        return "14px";

      default:
        return "16px";
    }
  }};
  line-height: 140%;
  /* color: ${(props) => (props.color === "white" ? "#ffff" : "black")}; */
`;
export const CommonSubText = styled.p`
  font-size: 12px;
  line-height: 140%;
  color: ${(props) => (props.color === "white" ? "#ffff" : "black")};
  font-weight: ${(props) => (props.weight === "bold" ? "bold" : "normal")};
  opacity: ${(props) => {
    switch (props.opacity) {
      case 1:
        return "1";
      case 2:
        return "0.6";

      default:
        return "1";
    }
  }};
  ${media.mobile`
  line-height: 140%;
letter-spacing: -0.01em;
margin-left:0;
`};
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
export const FacebookBrandButton = styled(Button)`
  background: #fff;
  /* border-radius: 8px; */
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #4267b2 !important;
  border: 1px solid #4267b2;
`;
export const InstagramBrandButton = styled(Button)`
  background: #fff;
  /* border-radius: 8px; */
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #bc2a8d !important;
  border: 1px solid #bc2a8d;
`;
export const TwitterBrandButton = styled(Button)`
  background: #fff;
  /* border-radius: 8px; */
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #1da1f2 !important;
  border: 1px solid #1da1f2;
`;
export const LinkedinBrandButton = styled(Button)`
  background: #fff;
  /* border-radius: 8px; */
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #0077b5 !important;
  border: 1px solid #0077b5;
`;
export const PintrestBrandButton = styled(Button)`
  background: #fff;
  /* border-radius: 8px; */
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #e60023 !important;
  border: 1px solid #e60023;
`;
export const YoutubeBrandButton = styled(Button)`
  background: #fff;
  border: 0;
  color: white;
  font-weight: bold;
  background: white !important;
  color: #ff0000 !important;
  border: 1px solid #ff0000;
`;

export const CustomTextArea = styled(TextArea)`
  border: 2px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const CustomInput = styled(Input)`
  height: 49px !important;
  background: #ffffff !important;
  border: 1px solid #ccd3de !important;
  border-radius: 10px !important;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #38446d;
  ${media.mobile`
  font-size: 28px;

`};
`;
