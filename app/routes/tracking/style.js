import styled from "styled-components";
export const Container = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  .search-container {
    display: flex;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MainContainer = styled.div`
  background: #edf0f9;
  border-radius: 10px;
  width: 100%;
  padding: 30px 25px;
  .input-button-containe {
    display: flex;
  }
  .order-info-container {
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 15px;
    .search-container {
      flex-direction: column;
    }
  }
`;
