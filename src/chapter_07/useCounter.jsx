import React, { useState } from "react";

function useCounter(initialValue) {  // 'use'Counter 은 Custom Hook 이다.
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));  // Math.max()는 파라미터로 입력받은 숫자들 중 최대값을 반환함.

    return [count, increaseCount, decreaseCount];
}

export default useCounter;