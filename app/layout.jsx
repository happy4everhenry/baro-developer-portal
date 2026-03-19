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
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #10B981, #0D9488)',
      borderRadius: '9px',
      color: 'white',
      fontWeight: 900,
      fontSize: '15px',
      letterSpacing: '-0.5px',
      boxShadow: '0 1px 3px rgba(16, 185, 129, 0.3)',
    }}>
      B
    </span>
    <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>
      BARO
    </span>
    <span
      style={{
        fontSize: '10px',
        fontWeight: 600,
        padding: '3px 9px',
        background: 'rgba(16, 185, 129, 0.08)',
        color: '#10B981',
        borderRadius: '6px',
        letterSpacing: '0.8px',
        border: '1px solid rgba(16, 185, 129, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      DEV PORTAL
    </span>
  </span>
)

const navbar = <Navbar logo={logo} />

const footer = (
  <Footer>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      <span style={{ fontSize: '13px', opacity: 0.7 }}>
        © {new Date().getFullYear()} BARO — Korea's AI Robo-Advisor
      </span>
      <span style={{ fontSize: '11px', opacity: 0.4 }}>
        Built for developers, by BARO engineering
      </span>
    </div>
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
          docsRepositoryBase="https://github.com/baro-ai/developer-portal"
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
