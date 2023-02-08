// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Header from '@/components/navigation/header';
import Sidebar from '@/components/navigation/sidebar';



export default function App({ Component, pageProps, ...appProps }: AppProps) {

    if ([`/`].includes(appProps.router.pathname))
        return (
            <>
                <h1>VUZF Students CSD</h1>
                <Component {...pageProps} />
            </>
        )

    return (
        <div>
            <Header />
            <Sidebar />
            <Component {...pageProps} />
        </div>
    )
}
