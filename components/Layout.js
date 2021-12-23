import Head from "next/head"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title +' - Pilar Teknologi Bangsa'}</title>
            </Head>
            {props.children}
        </div>
    )
}
