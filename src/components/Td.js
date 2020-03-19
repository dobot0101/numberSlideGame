import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  background-color: ${props =>
    props.mouseEnter && props.isStart ? "#e0e0e0" : "white"};
  border: 1px solid;
  font-size: 30px;
  padding: 40px;
  ${props => props.isStart && `cursor: pointer;`}
`;
const Td = ({ rowNum, cellNum, value, onClick, isStart }) => {
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
        isStart={isStart}
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
