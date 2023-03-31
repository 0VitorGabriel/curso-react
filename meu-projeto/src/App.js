import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Reis"

  return (
    <div className="App">
        <SayMyName name="Vitor"/>
        <SayMyName name="Gabriel"/>
        <SayMyName name="Holanda"/>
        <SayMyName name={nome}/>

        <Pessoa foto="https://via.placeholder.com/150" nome="Vitor" idade="12" profissao="desempregado"/>
    </div>
  );
}

export default App;
