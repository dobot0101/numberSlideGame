import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => (!props.show ? `none` : "flex")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ModalContents = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Modal = ({ show, closeModal }) => {
  const clickHandler = () => {
    closeModal();
  };

  return (
    <>
      <ModalBackground show={show}>
        <ModalContents>
          <h4>0 상하좌우 숫자를 누르면 위치가 바뀝니다.</h4>
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <h4>모양을 만들면 Game Clear!</h4>
          <div style={{ textAlign: "right" }}>
            <button onClick={clickHandler}>닫기</button>
          </div>
        </ModalContents>
      </ModalBackground>
    </>
  );
};

export default Modal;
