import React from "react";
import Td from "./Td";
import styled from "styled-components";

const StyledTr = styled.tr`
  border: 1px solid;
  padding: 20px;
`;

const Tr = ({ rowNum, value, isStart, onClick }) => {
  const renderTd = arr => {
    return arr.map((value, index) => (
      <Td
        key={index}
        onClick={onClick}
        rowNum={rowNum}
        cellNum={index}
        value={value}
        isStart={isStart}
      ></Td>
    ));
  };

  return <StyledTr>{renderTd(value)}</StyledTr>;
};

export default Tr;
