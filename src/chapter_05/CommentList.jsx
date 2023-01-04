import React from "react";
import Comment from "./Comment";

const alljsobjects = [
    {
        name: "사현진",
        comment: "제가 만든 첫 컴포넌트입니다. 참고로 댓글입니다.",
    },
    {
        name: "유재석",
        comment: "다른 사람 이름의 다른 댓글 적어보았습니다.",
    },
    {
        name: "홍길동",
        comment: "저도 리액트 배워보고 싶어요!",
    },
];

function CommentList(props) {
    return (
        <div>
            {  // 왼쪽의 이 중괄호는, 자바스크립트 문법 사용을 위하여, 자바스크립트 코드를 작성한 코드 부분 범위를 묶기위해 사용한것이다.
                alljsobjects.map(  // alljsobjects에 map 함수(메소드)를 실행(호출)할것이다.
                    (onejsobject) =>  // map 메소드를 실행할 매개변수는 onejsobject 이고, 이는 alljsobjects에서 소속된 객체를 하나씩 빼서 onejsobject라는 매개변수에 넣어줄 것이다.
                    {
                        return (
                            <Comment name={onejsobject.name} comment={onejsobject.comment} />
                        );
                    }  // 이 map 함수의 구조를 결론적으로 말하자면, map 함수의 매개변수는 onejsobject 이고, map 함수의 반환결과는 => 다음의 { } 중괄호 안의 부분이다.
                )  // map 함수의 범위가 여기까지이므로 닫아줌.
            }
        </div>
    );
}

/*
// 아래 코드가 원래 강의 내용의 변수명인데, 변수명이 다 비슷비슷해서 개념정리하는데 헷갈릴까봐 내가 위의 코드의 변수명으로 바꾸어 적어둠.
// 그리고 또한 위 코드에서는 map 함수의 구조가 잘 이해되지않을까봐 코드를 좀 넓게 분해해보았음.

const comments = [
    {
        name: "사현진",
        comment: "제가 만든 첫 컴포넌트입니다. 참고로 댓글입니다.",
    },
    {
        name: "유재석",
        comment: "다른 사람 이름의 다른 댓글 적어보았습니다.",
    },
    {
        name: "홍길동",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

*/

export default CommentList;
