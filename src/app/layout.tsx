/* eslint-disable camelcase */
import { Open_Sans, Titillium_Web } from 'next/font/google'
import classNames from 'classnames';
import '@styles/global.scss';
import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium-web',
  weight: ['300', '400', '600'],
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={classNames(openSans.variable, titilliumWeb.variable)}>
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
