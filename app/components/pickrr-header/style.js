import styled from "styled-components";
export const HeaderContainer = styled.div`
  max-width: 1050px;
  width: 100% !important;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  margin: auto;
  padding: 25px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  .social-icon-container {
    display: flex;
    justify-content: space-between;
    max-width: 168px;
    width: 100%;
    @media screen and (max-width: 768px) {
      max-width: 120px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px 16px;
  }
`;
