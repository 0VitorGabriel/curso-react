import './App.css';

function App() {
  const name = "Vitor Gabriel"

  const newName = name.toUpperCase()

  let soma = (a, b) => {return a + b}

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
        <h1>
          Alterando o JSX!
        </h1>
        <p>
          Olá, {newName}
        </p>
        <p>
          soma: {soma(1, 5)}
        </p>
        <img src={url} alt="imagem" />
    </div>
  );
}

export default App;
