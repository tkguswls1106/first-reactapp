import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        message: "점심식사 시간입니다.",
    },
    {
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {  // 내생각엔 클래스 컴포넌트는 원래 React.Component를 상속받는것 같다.
    constructor(props) {  // constructor는 클래스 컴포넌트의 생성자 메소드이다.
        super(props);

        this.state = {  // 이처럼 클래스 컴포넌트의 state는 생성자 메소드 안에 적혀진다.
            notifications: [],
        };
    }

    componentDidMount()  // 리액트 클래스 컴포넌트의 라이프싸이클 생명주기에서, '출생,인생,사망' 중에서 출생부분임.
    {
        const { notifications } = this.state;  // const notifications = this.state.notifications; 와 같은 말임. 여기서 좌항의 notifications은 새로운 이름의 변수이고, 우항의 notifications은 state의 notifications을 뜻한다.
        // 위와 비슷한 예로, const { name, nickname } = state; 는, const name = state.name; const nickname = state.nickname; 이랑 같은 말이다. object 안에 존재하는 값을 바로 변수 할당 시켜주는것이다.
        timer = setInterval(  // setInterval 함수는, 어떠한 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용한다. 함수의 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위로 받는다.
            () => {  // 화살표 함수 생성 방법중 매개변수가 없는 함수를 만드는법은, () => { statements }  // setInterval 함수의 첫번째 매개변수 인자 부분이다.
            if (notifications.length < reservedNotifications.length)  // 이 코드줄의 notifications는, state의 notifications가 아닌, 새롭게 선언된 변수인 notifications 이다.
            {
                const index = notifications.length;  // 이 코드줄의 notifications는, state의 notifications가 아닌, 새롭게 선언된 변수인 notifications 이다.
                notifications.push(reservedNotifications[index]);  // 이 코드줄의 notifications는, state의 notifications가 아닌, 새롭게 선언된 변수인 notifications 이다.

                this.setState({  // 클래스 컴포넌트에서 state를 업데이트하기위해서는 반드시 setState 함수를 사용해야만한다. 참고로 이건 = 이 아니라, .setState로 메소드를 실행한것이다. 헷갈리지 말자.
                    notifications: notifications,  // = state의 notifications: 새롭게 선언된 변수인 notifications
                });

            }
            else
            {
                clearInterval(timer);
            }
        }, 1000);  // 1000이 setInterval 함수의 두번째 매개변수 인자 부분이다.
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {  // 이 코드줄의 notifications는 state의 notifications 이고, notification은 map메소드의 사용을 위해 매개변수로 지정한 새로운 변수명이다.
                    return (
                        <Notification
                            message={notification.message}  // 이 코드줄의 notification은, state의 notifications 에서 추출한 map메소드의 매개변수이다.
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;