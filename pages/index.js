import Head from 'next/head'

import GlobalStyles from '../components/global-styles'
import LandingLayout from '../components/landing-layout'
import Mail from '../components/mail'

const now = _ => new Date().getFullYear()

export default _ =>
  <LandingLayout>
    <Head>
      <title>Code Ur Own React+Redux | Jake Trent</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/img/favicon.png"
      />

      <meta
        name="author"
        content="https://plus.google.com/115032056022257436849"
      />
      <meta
        name="description"
        content="Experience writing React and Redux from scratch, finding increased understanding of internal concepts, making you a more adept React+Redux developer."
      />
      <meta
        name="keywords"
        content="react, redux, react course, redux course, vdom, diffing, hyperscript, make your own react, make your own redux"
      />
      <meta name="copyright" content={`${now()} Jake Trent`} />

      <meta property="og:title" content="Code Ur Own React+Redux" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://codeurown.com" />
      <meta
        property="og:description"
        content="Experience writing React and Redux from scratch, finding increased understanding of internal concepts, making you a more adept React+Redux developer."
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Code Ur Own React+Redux" />
      <meta name="twitter:description" content="Code ur own React+Redux" />
      <meta name="twitter:site" content="@jaketrent" />
      <meta name="twitter:creator" content="@jaketrent" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100,300"
        rel="stylesheet"
      />
    </Head>

    <GlobalStyles />

    <Mail />
  </LandingLayout>
