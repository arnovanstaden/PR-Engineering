/* eslint-disable camelcase */
import { Open_Sans, Titillium_Web } from 'next/font/google'
import classNames from 'classnames';
import '@styles/global.scss';
import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';
import localFont from 'next/font/local';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['500', '600', '700'],
})

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium-web',
  weight: ['300', '400', '600', '700'],
})

const materialSymbols = localFont({
  src: [{
    path: '../styles/fonts/MaterialSymbols.woff2',
    style: 'normal',
    weight: '600',
  }],
  preload: true,
  variable: '--font-family-material-symbols', // Variable name (to reference after in CSS/styles)
  display: 'block',
});


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const fontClasses = classNames(
    openSans.variable,
    titilliumWeb.variable,
    materialSymbols.variable
  )
  return (
    <html lang="en" className={fontClasses}>
      <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
