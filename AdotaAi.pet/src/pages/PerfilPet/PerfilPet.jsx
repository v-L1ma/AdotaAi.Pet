import styles from './PerfilPet.module.css'
import { FaLocationDot } from "react-icons/fa6";

function PerfilPet(){
    return(
        <main>
            <div className={styles.container}>
                <img src="" alt="" />
                <div className={StyleSheet.info}>
                    <h1>Nome do pet</h1>  
                    <p><FaLocationDot/>Santos, SP</p>
                    <h2>Informações do pet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga hic impedit! Adipisci, omnis a maiores officiis beatae, veritatis nemo dolores iusto provident vitae earum ratione. Officia amet excepturi porro.</p>
                    <p>Raca:</p>
                    <p>Idade:</p>
                    
                </div>
            </div>
        </main>
    )
}

export default PerfilPet

/*
  nome  String
  raca  String
  foto  String
  datanasc String
  sexo String
  vacinado String
  castrado String
  vermifugado String
  descricao String
*/