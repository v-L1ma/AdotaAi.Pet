import styles from './Adotar.module.css'

function Adotar(){
    return(
        <main>
             <div className={styles.disponiveis} >
        <h1>Encontre seu novo amigo</h1>

    <div className={styles.filtros}>

        <div className={styles.filtrosdiv}>

            <select name="" id="">
                <option value="">Todas as espécies</option>
                <option value="">Cachorro</option>
                <option value="">Gato</option>
            </select>
            <select name="" id="">
                <option value="">Todos os Sexos</option>
                <option value="">Macho</option>
                <option value="">Fêmea</option>
            </select>
            <select name="" id="">
                <option value="">Todos os portes</option>
                <option value="">Porte pequeno</option>
                <option value="">Porte Médio</option>
                <option value="">Porte Grande</option>
            </select>
            <select name="" id="">
                <option value="">Todos os estados</option>
            </select>
            <select name="" id="">
                <option value="">Todas as cidades</option>
            </select>
            <input type="text" name="" id="" placeholder="Nome do pet"/>

            <button type="submit">Buscar</button>
        </div>

    </div>

    <div className={styles.gallery}>

            <div  className={styles.photos}>
                <img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <div className={styles.infos}>
                    <h1 className={styles.nome}><a href="">Bob</a> <img src="imagens/macho (1).png" alt=""/></h1> 
                    
                    <p>Santos, São Paulo</p>
                </div>
            </div>

            <div  className={styles.photos}>
                <img src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                
                <div className={styles.infos}>
                    <h1 className={styles.nome}><a href="">Mel</a></h1> 
                    <p>Santos, São Paulo</p>
                </div>
            </div>

            <div  className={styles.photos}>
                <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <div className={styles.infos}>
                    <h1 className={styles.nome}><a href="">Feijão</a></h1> 
                    <p>Santos, São Paulo</p>
                </div>
            </div>

            <div  className={styles.photos}>
                <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <div className={styles.infos}>
                    <h1 className={styles.nome}><a href="">Joaquim</a></h1> 
                    <p>Santos, São Paulo</p>
                </div>
            </div>

            <div  className={styles.photos}>
                <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg" alt=""/>
                <div className={styles.infos}>
                    <h1 className={styles.nome}><a href="">Felpudo</a></h1> 
                    <p>Santos, São Paulo</p>
                </div>
            </div>
    
           
    </div>
    </div>
        </main>
    )
}

export default Adotar