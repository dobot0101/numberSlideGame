import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  border: 1px solid;
  padding: 40px;
  font-size: 30px;
  cursor: pointer;
  background-color: ${props => (props.mouseEnter ? "#e0e0e0" : "white")};
`;

const Td = ({ rowNum, cellNum, value, onClick }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  //20200316, LDH, useRef -> styled-components 방식으로 변경
  // const tdRef = useRef();
  const onMouseEnter = () => {
    // tdRef.current.style.backgroundColor = "#e0e0e0";
    setMouseEnter(true);
  };

  const onMouseLeave = () => {
    // tdRef.current.style.backgroundColor = "white";
    setMouseEnter(false);
  };

  const clickHandler = () => {
    onClick(value, rowNum, cellNum);
  };

  return (
    <>
      <StyledTd
        // ref={tdRef}
        mouseEnter={mouseEnter}
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseLeave}
        onClick={clickHandler}
      >
        {value}
      </StyledTd>
    </>
  );
};

export default Td;
