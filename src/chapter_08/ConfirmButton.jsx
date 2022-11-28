import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({  // setState 함수 사용 시 이전 state 값을 사용하고 싶으면 prevState를 이용하면 된다.
            isConfirmed: !prevState.isConfirmed,  // 이벤트 핸들러로 handleConfirm()가 실행되면, 이전의 state를 불러와 !로 반전시키고 그걸 state로 덮어씌우는것이다.
        }));
    }  // prevState는 마치 c언어에서 num = 1 만 반복 선언하다가, num = num + 1 로 바꿔 선언한 느낌이랄까?

    render() {
        return (
            <button
                onClick = {this.handleConfirm}
                disabled = {this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;