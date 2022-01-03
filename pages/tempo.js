function Tempo(props) {
    console.log('>Passando pelo frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático - com delay)</div>
        </div>
    )

}

export async function getStaticProps() {
    console.log('>Passando pelo getStaticProps();');
    console.log('>Adicionando delay de 5 segundos');
    await DelayNode(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }

}
export default Tempo;