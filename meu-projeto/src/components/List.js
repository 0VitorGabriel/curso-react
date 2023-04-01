import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="2010" lancamento={2010}/>
                <Item marca="Fiat" lancamento={1999}/>
                <Item />
            </ul>
        </>
    )
}

export default List