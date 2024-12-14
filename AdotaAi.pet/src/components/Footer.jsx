import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className={styles.footer}>
            <h1>Adota Ai . pet</h1>

            <div>
                <h2> Desenvolvido por Vinicius Lima</h2>
                <div>
                    <a href="https://www.linkedin.com/in/vinilimadev/" target='_blank'>
                        <FaLinkedin  className={styles.social}/>
                    </a>
                    <a href="https://github.com/v-L1ma" target='_blank'>
                        <FaGithub className={styles.social}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer