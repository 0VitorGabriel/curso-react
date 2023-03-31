import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Reis"

  return (
    <div className="App">
        <h1>Testando CSS</h1>

        <Frase />
        <Frase />
        <Frase />

        <SayMyName name="Vitor"/>
        <SayMyName name="Gabriel"/>
        <SayMyName name="Holanda"/>
        <SayMyName name={nome}/>

        <Pessoa foto="https://via.placeholder.com/150" nome="Vitor" idade="12" profissao="desempregado"/>
    </div>
  );
}

export default App;
