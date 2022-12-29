import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>  // <button onClick={props.onClickLogout}>로그아웃</button> 이거로도 가능하다.
            ) : (
                <button onClick={onClickLogin}>로그인</button>  // <button onClick={props.onClickLogin}>로그인</button> 이거로도 가능하다.
            )}
        </div>
    );
}

export default Toolbar;