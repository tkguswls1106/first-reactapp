import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"사현진"} comment={"제가 만든 첫 컴포넌트입니다. 참고로 댓글입니다."} />
            <Comment name={"유재석"} comment={"다른 사람 이름의 다른 댓글 적어보았습니다."} />
        </div>
    );
}

export default CommentList;