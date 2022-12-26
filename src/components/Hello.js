
function Hello(props){
    return(
        <div>
            <h1>Hello Component</h1>
            <div>{props.name}</div>
            <h3>{props.str}</h3>
        </div>
    )
}

export default Hello;