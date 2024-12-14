import styles from './Doar.module.css'
import { FaCamera } from "react-icons/fa";

function Doar(){
    return(
        <main>
             <div className={styles.disponiveis}>
        <h1>Primeiro passo para o novo lar</h1>

    <div className={styles.conteudo}>
        <div className={styles.cadastro}>

         
            <div className={styles.nome}> 
                <p>Nome</p>
                <input type="text" name="nomePet" id="nomePet"/>
            </div>

            <div className={styles.inserir_foto}>
                <FaCamera className={styles.icone}/>
                <label for="foto">Escolha uma foto</label>
            </div>
            
            <div className={styles.raca}>
                <p>Raça</p>
                <select id="raças" name="raças">
                    <option value="" selected>-- Escolha uma raça --</option>
                    <option value="">Vira-lata (indefinida)</option>
                    <option value="affenpinscher">Affenpinscher</option>
                    <option value="akita-inu">Akita Inu</option>
                    <option value="akita-americano">Akita Americano</option>
                    <option value="basenji">Basenji</option>
                    <option value="beagle">Beagle</option>
                    <option value="basset-hound">Basset Hound</option>
                    <option value="border-collie">Border Collie</option>
                    <option value="buldogue-frances">Buldogue Francês</option>
                    <option value="buldogue-ingles">Buldogue Inglês</option>
                    <option value="borzoi">Borzoi</option>
                    <option value="boxer">Boxer</option>
                    <option value="bull-terrier">Bull Terrier</option>
                    <option value="cane-corso">Cane Corso</option>
                    <option value="cavalier-king-charles-spaniel">Cavalier King Charles Spaniel</option>
                    <option value="chihuahua">Chihuahua</option>
                    <option value="chow-chow">Chow Chow</option>
                    <option value="cocker-spaniel-ingles">Cocker Spaniel Inglês</option>
                    <option value="cocker-spaniel-americano">Cocker Spaniel Americano</option>
                    <option value="dachshund">Dachshund</option>
                    <option value="dalmata">Dálmata</option>
                    <option value="doberman">Doberman</option>
                    <option value="dogo-argentino">Dogo Argentino</option>
                    <option value="golden-retriever">Golden Retriever</option>
                    <option value="husky-siberiano">Husky Siberiano</option>
                    <option value="jack-russell-terrier">Jack Russell Terrier</option>
                    <option value="labrador-retriever">Labrador Retriever</option>
                    <option value="lhasa-apso">Lhasa Apso</option>
                    <option value="malamute-do-alasca">Malamute do Alasca</option>
                    <option value="mastiff-ingles">Mastiff Inglês</option>
                    <option value="mastim-napolitano">Mastim Napolitano</option>
                    <option value="pastor-alemao">Pastor Alemão</option>
                    <option value="pastor-australiano">Pastor Australiano</option>
                    <option value="poodle">Poodle</option>
                    <option value="pug">Pug</option>
                    <option value="rottweiler">Rottweiler</option>
                    <option value="samoieda">Samoieda</option>
                    <option value="sao-bernardo">São Bernardo</option>
                    <option value="shar-pei">Shar Pei</option>
                    <option value="shih-tzu">Shih Tzu</option>
                    <option value="spitz-alemao">Spitz Alemão (Lulu da Pomerânia)</option>
                    <option value="staffordshire-bull-terrier">Staffordshire Bull Terrier</option>
                    <option value="weimaraner">Weimaraner</option>
                    <option value="yorkshire-terrier">Yorkshire Terrier</option>
                </select>
            </div>
            
            <div className={styles.nasc}>
                <p>Data de nascimento</p>
                <input type="date" name="nasc" id="nasc"/>
            </div>    
            
            <div className={styles.sexo}>
                <p>Sexo:</p>
                <input type="radio" name="sexo" id="macho" class="radio"/>
                <label for="macho">Macho</label>
                <input type="radio" name="sexo" id="femea" class="radio"/>
                <label for="femea">Femêa</label>
            </div>
            
            <div className={styles.perguntas}>
                <div>                
                    <label for="vacinado">Vacinado?</label>
                    <select name="" id="">
                        <option value="">Sim</option>
                        <option value="">Não</option>
                    </select>
                </div>            
            
                <div>
                    <label for="castrado">Castrado?</label>
                    <select name="" id="">
                        <option value="">Sim</option>
                        <option value="">Não</option>
                    </select>
                </div>
            
                <div>
                    <label for="vermifugado">vermifugado?</label>
                    <select name="" id="">
                        <option value="">Sim</option>
                        <option value="">Não</option>
                    </select>
                </div>
            </div>
            
            <div className={styles.descricao}>    
                <label for="descricao">Breve descrição</label>
                <br/>
                <textarea name="descricao" id="descricao" required maxlength="150"></textarea>
            </div>

            <button className={styles.save}>Salvar & Continuar</button>
        
        
    </div>
   </div> 

   </div>
        </main>
    )
}

export default Doar