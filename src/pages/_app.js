import '@/styles/globals.css'
import RootLayout from '@/components/rootLayout'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
