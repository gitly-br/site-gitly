import Image from 'next/image'
import styles from "./styles.module.scss"
//assets
import background from "../../assets/background-1.png"
import computer from "../../assets/computer.png"
import ButtonGreenGet from '../button/buttonGreenGet'

function MeuComponente() {
    return (
        <div className={styles.component}>
            <Image className={styles.background} src={background} alt='Background' />
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Talk  to one of our specialists and start your project today.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                <div className="justify-start mr-20">
                    <ButtonGreenGet />
                </div>
                </div>
                <div className={styles.image}>
                    <Image src={computer} alt="Computer"/>
                </div>
            </div>
        </div>
    )
}

export default MeuComponente
