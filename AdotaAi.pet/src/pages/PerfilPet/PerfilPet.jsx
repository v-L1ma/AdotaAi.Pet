import styles from './PerfilPet.module.css'
import { FaLocationDot } from "react-icons/fa6";

function PerfilPet(){
    return(
        <main>
            <div className={styles.container}>
                <img src="" alt="" />
                <div className={styles.sobre}>
                    <h1>Nome do pet</h1>  
                    <p className={styles.loc}><FaLocationDot/>Santos, SP</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga hic impedit! Adipisci, omnis a maiores officiis beatae, veritatis nemo dolores iusto provident vitae earum ratione. Officia amet excepturi porro.</p>
                    <h2>Informações do pet</h2>
                    <div className={styles.infos}>
                        <p>Raca:</p>
                        <p>Idade:</p>
                        <p>Sexo:</p>
                        <p>Vacinado:</p>
                        <p>Castrado:</p>
                        <p>Vermifugado:</p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PerfilPet
