import { useState } from "react"
import {Link}from "react-router-dom";



function Tela () {



        const [email, setEmail] = useState("");
        const [password, setPasswod] = useState("");

    

    return (
<div className="cointainer">
<div className="container-usuario">
<div className="wrap-usuario"></div>
<div className="usuario-form"></div>
<span className="usuario-form-title">Bem Vindo</span>

<span className="usuario-form-title">

<img src="brawl-stars-logo.png" alt="Brawl Stars"/>
</span>
<div className="wrap-input">
<input className={email !== "" ? "has-val input " : "input"} type="email" value={email}
onChange={(e) => setEmail(e.target.value)}/>

<span className="focus-input" data-placeholder="Email"></span>
</div>

<div className="wrap-input">
<input className={password !== "" ? "has-val input " : "input"} type="password" value={password}
onChange={(e) => setPasswod(e.target.value)}/>

<span className="focus-input" data-placeholder="Senha"></span>
</div>


<div className="container-usuario-form-btn">
    <button className="usuario-form-btn">Cadastrar</button>
    </div>

<div className="text-center">
    <span className="txt1">Não possui Cadastrado</span>

<Link className="txt2" href="#">Criar Conta</Link>

</div>
</div>
</div>
    );
}
    export default Tela