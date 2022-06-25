
export const Book = (props) => {
    return (
        <div className="description">
            <h1> Это книга под названием {props.name}</h1>
            <p>Год издания {props.year}</p>
            <p>Кол-во страниц {props.pages}</p>
        </div>
    )
}