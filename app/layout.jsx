import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'BARO Developer Portal',
    template: '%s — BARO Dev Portal',
  },
  description: 'BARO — Korea\'s AI Robo-Advisor — Developer Documentation Portal',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <span style={{
      fontSize: '22px',
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #22C55E, #16A34A)',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 900,
      fontSize: '14px',
      letterSpacing: '-0.5px',
    }}>
      B
    </span>
    <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>
      BARO
    </span>
    <span
      style={{
        fontSize: '10px',
        fontWeight: 700,
        padding: '2px 8px',
        background: 'rgba(34, 197, 94, 0.12)',
        color: '#22C55E',
        borderRadius: '10px',
        letterSpacing: '0.5px',
      }}
    >
      DEV PORTAL
    </span>
  </span>
)

const navbar = <Navbar logo={logo} />

const footer = (
  <Footer>
    <span style={{ fontSize: '13px', opacity: 0.7 }}>
      {new Date().getFullYear()} © BARO — Korea's AI Robo-Advisor
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          toc={{ float: true }}
          editLink=""
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
