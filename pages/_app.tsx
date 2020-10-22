<<<<<<< HEAD
import '@assets/global.css'
import '@assets/tailwind.css'
import '@assets/utils.css'
import 'keen-slider/keen-slider.min.css'
=======
import '@assets/main.css'
>>>>>>> master

// To be removed
import 'animate.css'

import { FC } from 'react'
import type { AppProps } from 'next/app'

import { ManagedUIContext } from '@components/ui/context'
import { Head } from '@components/core'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
