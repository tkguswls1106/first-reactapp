import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);  // Custom Hook 호출함.

    useEffect(() => {  // 위에꺼 useEffect() 훅
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });  // 의존성 배열이 없는 useEffect()  // 출생(mount)과, 함수 컴포넌트 렌더링시 인생(update)때 실행됨.
    // count값을 10까지 늘리고 나면, 위아래 useEffect() 훅을 전부 isFull=false값 기준으로 둘다 모두 출력후,
    // 밑에꺼 useEffect()의 setIsFull(count >= MAX_CAPACITY);로 인하여, isFull=false 에서 true로 바뀌었기에, 리렌더링의 조건중 하나인 '컴포넌트의 state가 변했을 때'를 만족하여
    // count=10값은 유지한채로 컴포넌트가 렌더링되고, 그렇기 때문에
    // count값은 변하지않아 밑에꺼 useEffect() 는 실행되지 않고, 이 useEffect() 훅만 한번더 isFull=true값 기준으로 실행된다.
    // count값을 10에서 9로 줄일때에도 마찬가지의 이유로, 위아래 useEffect() 훅을 전부 isFull=true값 기준으로 둘다 모두 출력후, 밑에꺼 useEffect() 말고 이 useEffect() 훅만 한번더 isFull=false값 기준으로 실행된다.

    useEffect(() => {  // 밑에꺼 useEffect() 훅
        setIsFull(count >= MAX_CAPACITY);  // isFull = boolean(조건 count >= MAX_CAPACITY) 이라는 의미이다.
        console.log(`Current count value: ${count}`);
    }, [count]);  // 의존성 배열이 있는 useEffect()  // 출생(mount)과, 의존성 배열 업데이트인 인생(update)때 실행됨.
    // count값을 10까지 늘리고 나면, 위아래 useEffect() 훅을 전부 isFull=false값 기준으로 둘다 모두 출력후, 더이상 의존성 배열의 count값이 변화되지 않기에, 이 useEffect() 훅 말고, 저 위의 useEffect() 훅만 한번더 isFull=true값 기준으로 실행된다.
    // count값을 10에서 9로 줄일때에도 마찬가지의 이유로, 위아래 useEffect() 훅을 전부 isFull=true값 기준으로 둘다 모두 출력후, 이 useEffect() 말고, 저 위의 useEffect() 훅만 한번더 isFull=false값 기준으로 실행된다.

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;