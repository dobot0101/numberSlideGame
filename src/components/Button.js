import React from "react";
import styled from "styled-components";

const StyledButton = styled.span`
  border: 1px solid #c1c1c1;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  color: #606060;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
  margin-right: 10px;
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
