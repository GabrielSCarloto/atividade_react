import g1 from "./imagens/g1.png"
import buscar from "./imagens/busca.png"

function Fixo() {
  return (
    <>
        <div className="fixo">
        <div className="topo">
          <a href="#" className="globocom">globo.com</a>
          <a href="#" className="g1">g1</a>
          <a href="#" className="ge">ge</a>
          <a href="#" className="gshow">gshow</a>
          <a href="#" className="globoplay">globoplay</a>
          <img className="g1_logo" src={g1}/>
          <button className="login">
            <p>Login</p>
          </button>
        </div>
        <div className="cabecalho">
          <header>
            <p className="tech">Tecnologia</p>
            <nav>
              <a href="#">Home</a>
              <a href="#">Regiões</a>
              <a href="#">Blogs e Colunas</a>
              <a href="#">Podcasts</a>
              <a href="#">Serviços</a>
              <a href="#">Newsletter</a>
            </nav>
            
            <input className="busca" type="text" placeholder="Buscar"/>
            <button className="lupa">
              <img src={buscar}/>
            </button>
          </header>
        </div>
      </div>
    </>
  )
}

export default Fixo;