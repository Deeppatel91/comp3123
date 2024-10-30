function SayHello({ fname, lname }) {
    const myStyle = {
        color: 'cyan',
    }

    return (
        <h2 style={myStyle}> {fname} {lname}</h2>
    )
}

export default SayHello;