import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// import해둔 ThemeContext.jsx 파일에 const ThemeContext = React.createContext(); 코드가 이미 들어있으므로 또다시 명시X

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);  // DarkOrLight.jsx 파일에서 Provider을 사용하였고, 여기서 Consumer을 사용하는데 대신 useContext 훅으로 대체함.
    // Provider로 준게 <ThemeContext.Provider value={{ theme, toggleTheme }}> 처럼 두가지 이상 이면, const { theme, toggleTheme } = useContext(ThemeContext); 이런식으로 적어줘서 똑같이 사용해주면 된다.
    // 예시로 만약 Provider로 준게 <ThemeContext.Provider value={themes.dark}> 처럼 한가지 이상 이면, const theme = useContext(ThemeContext); 이런식으로 적어줘서 똑같이 사용해주면 된다.

    return (
        <div
            style={
                {
                    width: "100vw",
                    height: "100vh",
                    padding: "1.5rem",
                    backgroundColor: theme == "light" ? "white" : "black",
                    color: theme == "light" ? "black" : "white",
                }
            }
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;