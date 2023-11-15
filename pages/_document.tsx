import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Alexis Uziel Pavón (@alexispavon010) - FullStack Developer</title>
        <meta name="description" content="Portafolio de @alexispavon010 (Alexis Uziel Pavón)" />
        <link rel="icon" href="/favicon.ico" />
        {/* Fragmento de código de Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-T2FBWSDSV4`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T2FBWSDSV4');
              `,
          }}
        />
        {/* Fin del fragmento de código de Google Analytics */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}