function Evento({ numero }) {

    function MeuEvento() {
        console.log(`fui ativado ${numero}`)
    }

    return (
      <>
        <p>Clique para disparar um evento: </p>
        <button onClick={MeuEvento}>clique aqui</button>
      </>  
    )
}

export default Evento