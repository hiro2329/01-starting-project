import "./Header.module.css"; // CSS module import
import reactImg from '../../assets/react-core-concepts.png';



const reactDescriptions = ['Fundamental','Crucial', 'Core'];

function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

//export default : 한 파일에 하나의 컴포넌트만 export 할 때 사용
//import Header from './components/Header.jsx';

//export : 여러개의 컴포넌트를 export 할 때 사용 //import할 때 중괄호와 정확한 이름이 필요합니다.
//impot {Header} from './components/Header.jsx';
export default function Header() {
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(2)]} concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}