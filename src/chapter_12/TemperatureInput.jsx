const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}  // scaleNames는 중괄호이므로 객체라서, scaleNames.scale 이렇게 써도 되지만, 아마 props. 라는 단어때문에 scaleNames[props.scale] 모양으로 호출한듯 하다.
// 그러므로 props. 단어때문에 이러한 경우에는 객체를 호출할때 scaleNames.props.scale 이건 불가능하고 scaleNames[props.scale] 이렇게만 호출 방법이 가능하다.

export default TemperatureInput;