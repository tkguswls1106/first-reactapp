import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContextshj";
// 이러면 나중에 크롬 검사 개발자도구에서 리액트의 Components 를 들어가보면, ThemeContextshj.Provider 로 명시되어 출력해 보여준다.

export default ThemeContext;