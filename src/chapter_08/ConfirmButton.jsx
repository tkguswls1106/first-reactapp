import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {  // 함수 컴포넌트로 '함수 안에 함수로 정의' 방법
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);  // prevState 같은 용도이지 않을까 싶다
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;