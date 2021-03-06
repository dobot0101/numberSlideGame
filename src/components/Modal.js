import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalBackground = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (!props.open ? `none` : "flex")};
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ModalContents = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
`;

const Modal = ({ open, closeModal }) => {
  return (
    <>
      <ModalBackground open={open}>
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
            <Button onClick={closeModal}>닫기</Button>
          </div>
        </ModalContents>
      </ModalBackground>
    </>
  );
};

export default Modal;
