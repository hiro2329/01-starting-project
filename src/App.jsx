import { useState } from 'react';

import componemntsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from './components/TapButton/TapButton.jsx';
import { EXAMPLES } from './data.js';



function App() {

  const [selectedTopic, setSelectedTopic] = useState();
  //useState는 React의 Hook 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해줌.
  //useState는 배열을 반환하는데, 첫 번째 요소는 현재 상태의 값이고, 두 번째 요소는 상태를 업데이트하는 함수.

  function handleSelect(selectedButton) {
    //sellectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);  // setSelectedTopic은 상태를 업데이트하는 함수
  }

  let tabContent = <p>Please select a topic.</p>;

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
    <>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((concept) => (
                <CoreConcept key={concept.title} {...concept} />
              ))}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TapButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TapButton>
              <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TapButton>
              <TapButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TapButton>
              <TapButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TapButton>
            </menu>

            {tabContent}

          </section>
        </main>
      </div>
    </>
  );
}

export default App;
