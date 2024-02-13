// Components
import Layout from '../components/Layout/Layout'

// Styles & Icons
import '../styles/global.scss';
import '../assets/icons/style.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
