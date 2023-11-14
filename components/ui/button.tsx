
type ButtonText = {
    text: string
}

export  const Button1 = ({text}:ButtonText ) => {
    
    return (
        <button className="button1">
            {text}
        </button>
    )
}