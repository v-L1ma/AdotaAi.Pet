import { useEffect, useState } from "react";
import CardPet from "../components/CardPet";
import styles from "./Adotar.module.css";
import api from "../sevices/api";

function Adotar() {
  const [animais, setAnimais] = useState([])

  async function listaAnimais(){
    const animaisFromApi = await api.get('/animais')
    setAnimais(animaisFromApi.data)
  }

  useEffect(() => {

    listaAnimais()

  }, [])

  return (
    <main>
      <div className={styles.disponiveis}>
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
            <input type="text" name="" id="" placeholder="Nome do pet" />

            <button type="submit">Buscar</button>
          </div>
        </div>

        <div className={styles.gallery}>
          {animais.map((animais) => (
            <CardPet animais={animais} key={animais.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Adotar;
