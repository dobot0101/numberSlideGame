import React, { useRef } from 'react';

const Td = ({ rowNum, cellNum, value, onClick }) => {

    const tdRef = useRef();

    const onMouseEnter = () => {
        tdRef.current.style.backgroundColor = '#e0e0e0';
    }

    const onMouseLeave = () => {
        tdRef.current.style.backgroundColor = 'white';
    }

    return <td className="slide_td"
        ref={tdRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(event) => { onClick(event, rowNum, cellNum) }}> {value}
    </td >
}

export default Td;