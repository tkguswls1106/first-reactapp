import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {  // 내생각엔 클래스 컴포넌트는 원래 React.Component를 상속받는것 같다.
    constructor(props) {  // constructor는 클래스 컴포넌트의 생성자 메소드이다.
        super(props);

        this.state = {};  // 이처럼 클래스 컴포넌트의 state는 생성자 메소드 안에 적혀진다.
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;