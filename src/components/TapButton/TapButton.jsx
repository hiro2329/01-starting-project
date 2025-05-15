// export default function TapButton({children}){
//     return <li><button>{children}</button></li>;
// }
export default function TapButton({ children, onSelect }) {

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
    // onClick={handleClick}로 작성해야 함
    // 이유:
    // onClick={handleClick()}로 작성하면 컴포넌트가 렌더링될 때 함수가 "바로 실행"되어 버림
    // → 버튼을 클릭하지 않아도 콘솔에 로그가 찍힘
    // onClick={handleClick}로 작성하면 "클릭할 때만" 함수가 실행됨
    // 즉, 함수 이름만 전달해야 React가 클릭 이벤트가 발생할 때 그 함수를 실행함
}

// props.children : props로 전달된 자식 요소를 나타냅니다.
// props.children을 사용하면 컴포넌트의 자식 요소를 동적으로 렌더링할 수 있습니다.
// 예를 들어, <TapButton>Components</TapButton>에서 "Components"라는 문자열이 props.children으로 전달됩니다.
