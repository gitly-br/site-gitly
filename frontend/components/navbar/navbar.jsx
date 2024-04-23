import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/link1"><a>Home</a></Link>
        <Link href="/link2"><a>Our purpose</a></Link>
        <Link href="/link3"><a>Partners</a></Link>
        <Link href="/link4"><a>Media</a></Link>
        <Link href="/link5"><a>Contact us</a></Link>
      </div>
      <div className={styles.button}>
        <button>Start your project</button>
      </div>
    </div>
  );
};

export default Navbar;