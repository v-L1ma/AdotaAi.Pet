import React, { useState, useContext} from "react";
import styles from "./LoginPopUp.module.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import StoreContext from "./Store/Context";

import { useNavigate } from "react-router";

function initialState() {
  return { user: '', password: '' };
}

function login({user, password}){
  if (user === 'admin' && password ==='admin'){
    return { token: '1234'}
  }
  return {error:'Usuario invalido'}
}

function LoginPopUp({ onClick }) {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext)
  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
      event.preventDefault()

      const {token} = login(values)

      if(token){
          setToken(token)
          useNavigate('/adotar')
      }

      setValues(initialState)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <h1>Conecte-se na sua conta</h1>
        <h2>Seja bem vindo de volta!</h2>
        <div className={styles.social}>
          <button disabled>
            <FaGoogle />
            google
          </button>
          <button disabled>Facebook</button>
        </div>
        <p>ou continue com o seu email</p>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Email"
          onChange={onChange}
          value={values.user}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          onChange={onChange}
          value={values.password}
        />
        <br />
        <div className={styles.esqueceu}>
          <p>
            <input type="checkbox" name="" id="" />
            Lembrar de mim
          </p>
          <p>
            <a href="">Esqueceu sua senha?</a>
          </p>
        </div>
        <button disabled type="submit">
          Log in
        </button>
        <p>
          Não possui uma conta? <a href="">Crie uma conta</a>
        </p>
      </form>
      <div className={styles.banner}>
        <button className={styles.closeBtn} onClick={onClick}>
          <div>X</div>
        </button>
        <img
          src="https://www.doglife.com.br/blog/assets/post/convivencia-entre-cachorros-e-gatos-eles-podem-morar-juntos-61fd55bf76950e477610eca4/convivencia-capa.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPopUp;
