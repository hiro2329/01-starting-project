import { useState } from 'react';
import { EXAMPLES } from '../data';
import TapButton from './TapButton.jsx';
import Section from './Section.jsx'
import Tabs from './Tabs.jsx';



export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    //useState는 React의 Hook 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해줌.
    //useState는 배열을 반환하는데, 첫 번째 요소는 현재 상태의 값이고, 두 번째 요소는 상태를 업데이트하는 함수.

    function handleSelect(selectedButton) {
        //sellectedButton => 'components','jsx','props','state'
        setSelectedTopic(selectedButton);  // setSelectedTopic은 상태를 업데이트하는 함수
    }

    let tabContent = <p>Please select a topic.</p>; //selectedTopic이 undefined일 때는 "Please select a topic."을 보여줌
    //selectedTopic이 undefined가 아닐 때는 EXAMPLES[selectedTopic]을 보여줌
    if (selectedTopic) {
        tabContent = (
            < div id="tab-content" >
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div >
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                // ButtonsContainer="menu" // 버튼을 감싸는 컨테이너의 클래스 이름 ,
                // 동적 생성 이 부분은 다른곳에서 menu가 아닌 다른 이름으로 사용할 수 있음 ex) <Tabs ButtonsContainer="nav" > 또는 <Tabs ButtonsContainer=Section >
                buttons={
                    <>
                        <TapButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TapButton>
                        <TapButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TapButton>
                        <TapButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TapButton>
                        <TapButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TapButton>
                    </>
                }>
            </Tabs>
            {tabContent}

        </Section>
    )
}





