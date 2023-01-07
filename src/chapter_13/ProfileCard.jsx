import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Inje Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 소플입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
    // p태그 두줄이 {props.children} 부분이고, 컴포넌트 합성(Composition)의 Containment 방법이다.
    // <Card title="Inje Lee" backgroundColor="#4ea04e"> 이부분이 컴포넌트 합성(Composition)의 Specialization 방법이다.
}

export default ProfileCard;