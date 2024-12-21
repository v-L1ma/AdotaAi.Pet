import styles from './CardPet.module.css'
import { Link } from "react-router";

function CardPet({animais}){

    
    return(
        <div  className={styles.card} key={animais.id}>
                    <div className={styles.imagem}>
                        <img src={animais.foto} alt=""/>
                    </div>
                        <div className={styles.infos}>
                            <h1 className={styles.nome}><Link to="/adotar/animal">{animais.nome}</Link></h1> 

                        </div>
                    </div>
    )
}

export default CardPet