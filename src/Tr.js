import React from 'react';
import Td from './Td'

const Tr = ({ rowNum, value, onClick }) => {

    const renderTd = (arr) => {
        return <tr className="slide_tr">{arr.map((value, index) => <Td key={index}
            onClick={onClick}
            rowNum={rowNum}
            cellNum={index}
            value={value} ></Td>)}</tr>;
    }

    return renderTd(value);
}

export default Tr;