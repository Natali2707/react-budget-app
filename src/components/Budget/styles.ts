import styled from "styled-components";

const StyledBudgeWrapper = styled.div`
  display: grid;
`;
const StyledBudget = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: #7cc6fe;
  padding-left: 20px;
  border-radius: 10px;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  justify-content: space-between;
`;

const Edit = styled.button`
  width: 85px;
  padding: 10px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
`;

const StyledInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  background: #7cc6fe;
  border: none;
  &::-webkit-inner-spin-button {
    display: none;
  }
  &::placeholder {
    background: #7cc6fe;
    color: rgba(255, 255, 255, 0.6);
    border: none;
  }
`;
const BudgetButtonSave = styled.button`
  max-width: 85px;
  width: 100%;
  padding: 10px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;
export { StyledBudgeWrapper, StyledBudget, Edit, StyledInput, BudgetButtonSave };
