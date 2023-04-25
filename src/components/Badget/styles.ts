import styled from "styled-components";

const StyledBadgeWrapper = styled.div`
  display: grid;
`;
const StyledBadget = styled.div`
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
  height: 36px;
  margin-right: 20px;
  font-size: 20px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
`;
export { StyledBadgeWrapper, StyledBadget, Edit };
