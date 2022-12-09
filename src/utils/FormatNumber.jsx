const FormatNumber = ({ number }) => {
    return <span>{new Intl.NumberFormat('ARS', { currency: 'ARS' }).format(number)} </span>

}

export default FormatNumber