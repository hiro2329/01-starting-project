import componemntsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from './components/TapButton/TapButton.jsx';



function App() {

  let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    //sellectedButton => 'Components','JSX','Props','State'
    tabContent = selectedButton;
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
            <p>{tabContent}</p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
