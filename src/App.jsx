import { useState } from 'react';

import componemntsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from './components/TapButton/TapButton.jsx';



function App() {

  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  //useState는 React의 Hook 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해줌.
  //useState는 배열을 반환하는데, 첫 번째 요소는 현재 상태의 값이고, 두 번째 요소는 상태를 업데이트하는 함수.

  function handleSelect(selectedButton) {
    //sellectedButton => 'Components','JSX','Props','State'
    setSelectedTopic(selectedButton);  // setSelectedTopic은 상태를 업데이트하는 함수
  }

  return (
    <>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TapButton onSelect={() => handleSelect('Components')}>Components</TapButton>
              <TapButton onSelect={() => handleSelect('JSX')}>JSX</TapButton>
              <TapButton onSelect={() => handleSelect('Props')}>Props</TapButton>
              <TapButton onSelect={() => handleSelect('State')}>State</TapButton>
            </menu>
            <p>{selectedTopic}</p> {/* 선택된 버튼에 따라 내용이 바뀜 // 기본값: Please click a button */}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
