import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Tr from "./components/Tr";
import Modal from "./components/Modal";
import styled from "styled-components";
import Button from "./components/Button";

//20200315, ldh, styled-components 사용 css 변경
const StyledTable = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

let timer;
const App = () => {
  const [array, setArray] = useState(
    new Array(3).fill(null).map(() => [0, 0, 0])
  );
  const [isStart, setIsStart] = useState(false);
  const [open, setOpen] = useState(true);
  const timerRef = useRef();

  //모달 열기
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  //상하좌우에 0 있는지 확인하고 위치 변경
  const onClick = (num, row, col) => {
    const maxRow = 2,
      maxCol = 2,
      newArr = array.slice();

    if (num === 0) {
      return;
    }

    //위
    if (row - 1 >= 0 && newArr[row - 1][col] === 0) {
      newArr[row][col] = 0;
      newArr[row - 1][col] = num;
      setArray(newArr);
    }

    //오른쪽
    if (col + 1 <= maxCol && newArr[row][col + 1] === 0) {
      newArr[row][col] = 0;
      newArr[row][col + 1] = num;
      setArray(newArr);
    }

    //아래
    if (row + 1 <= maxRow && newArr[row + 1][col] === 0) {
      newArr[row][col] = 0;
      newArr[row + 1][col] = num;
      setArray(newArr);
    }

    //왼쪽
    if (col - 1 >= 0 && newArr[row][col - 1] === 0) {
      newArr[row][col] = 0;
      newArr[row][col - 1] = num;
      setArray(newArr);
    }

    isClear();
  };

  //정답 확인
  const isClear = () => {
    if (array.join() === "1,2,3,4,5,6,7,8,0") {
      clearInterval(timer);
      setIsStart(false);
      alert("Game Clear!!!");
    }
  };

  //<tr> 렌더링
  const renderTr = () => {
    return array.map((value, index) => (
      <Tr key={index} rowNum={index} value={value} onClick={onClick}></Tr>
    ));
  };

  //게임 시작
  const start = () => {
    if (end) {
      setArray(init());
      setIsStart(true);

      //시작 시간
      const startTime = new Date().getTime();

      const getElapsedTime = () => {
        //현재 시간
        const nowTime = new Date().getTime();
        const newTime = new Date(nowTime - startTime);

        const minute = newTime.getMinutes();
        const second = newTime.getSeconds();

        //1자리면 앞에 0 추가
        const addZero = num => {
          return num < 10 ? "0" + num : num;
        };

        timerRef.current.innerText = addZero(minute) + ":" + addZero(second);
      };

      //setInterval만 쓰면 1초 후에 처음 시작되기 때문에, 함수 한번 실행하고 setInterval
      getElapsedTime();
      timer = setInterval(getElapsedTime, 1000);
    }
  };

  //게임 종료
  const end = () => {
    clearInterval(timer);
    setIsStart(false);
    timerRef.current.innerText = "00:00";
    setArray([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  };

  return (
    <>
      <Modal open={open} closeModal={closeModal} />
      <StyledDiv>
        <StyledTable>
          <tbody>{renderTr()}</tbody>
        </StyledTable>
        <h2 ref={timerRef}>00:00</h2>
        <div>
          <Button onClick={openModal}>게임방법</Button>
          {!isStart ? (
            <Button onClick={start}>게임시작</Button>
          ) : (
            <Button onClick={end}>게임종료</Button>
          )}
        </div>
      </StyledDiv>
    </>
  );
};

//랜덤 숫자 배열로 3*3 배열 생성
const init = () => {
  const randomNumArr = getRandomNumArr();
  const newArr = new Array(3).fill(null).map(() => {
    return randomNumArr.splice(0, 3);
  });

  return newArr;
};

//0~8 랜덤 숫자 배열 구하기
const getRandomNumArr = () => {
  const randomNumArr = [];
  let i = 0;
  while (i < 9) {
    const randomNum = Math.floor(Math.random() * 9);
    if (!isExist(randomNum, randomNumArr)) {
      randomNumArr.push(randomNum);
      i++;
    }
  }
  return randomNumArr;
};

//배열의 숫자 중복 확인
const isExist = (number, arr) => {
  return arr.filter(value => value === number).length > 0 ? true : false;
};

export default App;
