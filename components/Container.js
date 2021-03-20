import Head from 'next/head'
import Navigation from './navigation'

const Container=(props)=>(
    <>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css"></link>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </>
)

export default Container;