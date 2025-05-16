import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



function App() {

  return (
    // Fragment : 여러 개의 요소를 그룹화할 때 사용
    // 여러 부모 요소를 반환할 수 없기 때문에 Fragment로 감싸줌
    // JS 에서 return문은 하나의 요소만 반환할 수 있음
    // 그렇기 때문에 Fragment로 감싸줘서 하나의 요소로 만들어줌
    <>
      <Header />
      <div>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
