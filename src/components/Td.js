import React, { useRef } from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  border: 1px solid;
  padding: 40px;
  font-size: 30px;
  cursor: pointer;
`;

const Td = ({ rowNum, cellNum, value, onClick }) => {
  const tdRef = useRef();

  const onMouseEnter = () => {
    tdRef.current.style.backgroundColor = "#e0e0e0";
  };

  const onMouseLeave = () => {
    tdRef.current.style.backgroundColor = "white";
  };

  const clickHandler = () => {
    onClick(value, rowNum, cellNum);
  };

  return (
    <StyledTd
      className="slide_td"
      ref={tdRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={clickHandler}
    >
      {value}
    </StyledTd>
  );
};

export default Td;
