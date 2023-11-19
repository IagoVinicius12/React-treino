import logo from './logo.svg';
import './App.css';
import Adicionar from './Components/Adicionar'
import Menu from './Components/Menu'

function App() {
  return (
    <div className="App" style={{width:"100vw", height:"100vh"}}>
      <Menu/>
      <Adicionar/>
    </div>
  );
}

export default App;
