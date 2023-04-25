import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 30px;
`;
const StyledInput = styled.input`
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: none;
  padding: 15px 20px;
  ::placeholder {
    color: #999999;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  padding: 15px 148px;
  border: none;
  border-radius: 10px;
  background-color: #23c9ff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export { StyledForm, StyledInput, StyledButton };
