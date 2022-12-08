const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-ARS', {currency:'ARS'}).format(number)} </span>

}

export default FormatNumber