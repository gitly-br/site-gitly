import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

//assets
import logo from "../../assets/gitly.svg"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo Gitly" />
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/link1">Home</Link>
        <Link href="/link2">Our purpose</Link>
        <Link href="/link3">Partners</Link>
        <Link href="/link4">Media</Link>
        <Link href="/link5">Contact us</Link>
      </div>
      <div className={styles.button}>
        <div className={styles.action}>
          <button>Start your project</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;