//eslint-disable
import './App.css';
import MyComponents from './components/MyComponents';
import Hello from './components/Hello';

function App() {
  const str = 'React!!';
  const name = '함수형 컴포넌트';

  return (
    <div className="App">
      <h1>hello world</h1>
      <Hello name={name} str={str}/>
      <MyComponents name={name} str={str}/>
    </div>
  );
}

export default App;
