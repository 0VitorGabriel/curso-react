function Form() {

    function CadastrarUsuario(event) {
        event.preventDefault()

        let user = document.querySelector('input#nome')

        console.log(`Usuário ${user.value} cadastrado`)
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={CadastrarUsuario}>
                <input type="text" placeholder="digite o seu nome" id="nome"/>

                <input type="submit" value="cadastrar" />
            </form>
        </div>
    )
}

export default Form