import { Card, CardContent } from '@mui/material';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from './index.module.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <article className={styles.article}>
        <Card sx={{
          width: '100%',
          height: '100%',
          borderRadius: 'unset',
          padding: '0rem',
          margin: '0rem',
        }}
        >
          <CardContent sx={{
            padding: '0rem',
            margin: '0rem',
            height: '100%',
          }}
          >
            {children}
          </CardContent>
        </Card>
      </article>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
