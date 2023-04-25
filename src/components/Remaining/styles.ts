import styled from "styled-components";

interface Style {
  isOverBudget: boolean;
}

const StyledRemain = styled.div<Style>`
  display: grid;
  width: 100%;
  height: 100px;
  background: ${({ isOverBudget }) => (isOverBudget ? " #FF0000" : "#ccd5ff")};
  border-radius: 10px;
  padding-left: 20px;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const StyledInfo = styled.p<Style>`
  font-weight: ${({ isOverBudget }) => (isOverBudget ? "700" : "500")};
  font-size: 20px;
  line-height: 24px;
  color: ${({ isOverBudget }) => (isOverBudget ? "rgb(255 255 255)" : "rgb(0 0 0)")};
`;

export { StyledRemain, StyledInfo };
