import styles from './Home.module.css'


function Home(){
    return(
        <main>
            
            <div className={styles.banner}>
                <img src="https://corredorsolidario.baluxpet.com.br/wp-content/uploads/2018/02/banner-site.jpg" alt="" />
            </div>

            <div>
                <h1>Algumas de nossas fofuras</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt minus, neque quasi delectus soluta aperiam modi eaque ipsum asperiores vitae fugiat, porro maxime! Fugiat, nemo. Vero minus harum maiores.</p>
                </div>
            </div>

            <div className={styles.sobre}>
                <h1>Sobre o nosso projeto:</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellat voluptatum consequatur labore, officiis debitis ullam libero nisi ex aliquid laudantium magnam architecto tempora eos, veritatis dolor veniam perspiciatis facilis?</p>
            </div>

        </main>
    )
}

export default Home