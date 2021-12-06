import styled from "styled-components";

export const SteledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled components -</STitle>
      <SButton>FIGHT！！</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: 2px solid #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
