import Head from 'next/head'; //Exclusivo para trabalhar o com componente cabeçalho

const HeadNext = (props) => {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Site usando Next e React"/>
            <meta name="author" content="Eula"/>
        </Head>
    )
}

export default HeadNext;