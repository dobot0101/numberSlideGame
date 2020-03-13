import React, { useState, useRef } from 'react';
import './App.css'
import Tr from './Tr'

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
}

//배열의 숫자 중복 확인
const isExist = (number, arr) => {
  return arr.filter(value => value === number).length > 0 ? true : false;
}

//랜덤 숫자 배열로 3*3 배열 생성
const init = () => {
  const randomNumArr = getRandomNumArr();
  const newArr = new Array(3).fill(null).map(() => {
    return [randomNumArr.pop(), randomNumArr.pop(), randomNumArr.pop()];
  });

  return newArr;
}

let timer;

const App = () => {
  const [array, setArray] = useState(new Array(3).fill(null).map(() => [0, 0, 0]));
  const [isStart, setIsStart] = useState(false);
  const timerRef = useRef();

  //up, right, down, left 순으로 확인
  const onClick = (e, row, col) => {
    const currentNum = e.nativeEvent.target.innerText;
    const maxRow = 2;
    const maxCol = 2;
    const newArr = array.slice();
    let isChanged = false;

    if (currentNum === 0) {
      return;
    }

    //위
    if (!isChanged && row - 1 >= 0 && newArr[row - 1][col] === 0) {
      newArr[row][col] = 0;
      newArr[row - 1][col] = currentNum;
      setArray(newArr);
    }

    //오른쪽
    if (!isChanged && col + 1 <= maxCol && newArr[row][col + 1] === 0) {
      newArr[row][col] = 0;
      newArr[row][col + 1] = currentNum;
      setArray(newArr);
    }

    //아래
    if (!isChanged && row + 1 <= maxRow && newArr[row + 1][col] === 0) {
      newArr[row][col] = 0;
      newArr[row + 1][col] = currentNum;
      setArray(newArr);
    }

    //왼쪽
    if (!isChanged && col - 1 >= 0 && newArr[row][col - 1] === 0) {
      newArr[row][col] = 0;
      newArr[row][col - 1] = currentNum;
      setArray(newArr);
    }

    //정답 확인
    if (array.join() === '1,2,3,4,5,6,7,8,0') {
      clearInterval(timer);
      setIsStart(false);
      alert('Game Clear!!!');
    }
  }

  //<tr> 렌더링
  const renderTr = () => {
    return array.map((value, index) => <Tr key={index} rowNum={index} value={value} onClick={onClick}></Tr >);
  }

  //게임 시작
  const start = () => {
    if (end) {
      setArray(init());
      setIsStart(true);

      const getTime = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const addZero = (num) => {
          return num < 10 ? "0" + num : num;
        }

        timerRef.current.innerText = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
      }

      getTime();
      timer = setInterval(getTime, 1000);
    }
  }

  //게임 종료
  const end = () => {
    clearInterval(timer);
    setIsStart(false);
    timerRef.current.innerText = '00:00:00';
    setArray([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  }

  return <div>
    <table className="slide_table">
      <tbody>
        {renderTr()}
      </tbody>
    </table>
    <h2 ref={timerRef}>00:00:00</h2>
    {!isStart ? <button onClick={start}>게임 시작</button> : <button onClick={end}>게임 종료</button>}
  </div>;
}

export default App;
