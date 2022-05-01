import orkut from "./imagens/orkut-2.webp"
import facebook from "./imagens/facebook.png"
import twitter from "./imagens/twitter.png"
import whatsapp from "./imagens/whatsapp.png"
import telegram from "./imagens/telegram.png"
import linkedin from "./imagens/linkedin.png"
import Carrossel from './Carrossel';

function Conteudo() {
    return(
        <>
        <div className="conteudo">
        <div>
          <div className="conteudo_topo">
            <p className="conteudo_titulo">A volta do Orkut? Fundador reativa site e diz que está construindo algo novo: 'Vejo vocês em breve'</p>
            <p className="conteudo_subtitulo">Rede social foi sucesso nos anos 2000 e conquistou 300 milhões de usuários ao redor do mundo. Anúncio foi feito dois dias após compra do Twitter por Elon Musk.</p>
            <br/>
            <p className="assinatura">Por Paola Patriarca, g1
            <br/>
            28/04/2022 - 08h44m</p>

            <div className="redes_sociais">
              <a href="#"><img src={facebook}/></a>
              <a href="#"><img src={twitter}/></a>
              <a href="#"><img src={whatsapp}/></a>
              <a href="#"><img src={telegram}/></a>
              <a href="#"><img src={linkedin}/></a>
            </div>

            <hr className="linha"/>
          </div>

          <div>
            <img className="orkut" src={orkut}/>

            <p className="texto_foto">Fundador do Orkut reativa site oficial — Foto: Divulgação</p>

            <p className="conteudo_texto">O site oficial do Orkut foi reativado nesta quarta-feira (27) com uma mensagem do seu fundador, o engenheiro Orkut Buyukkokten. No anúncio, ele afirma que está construindo algo novo, o que deixa a entender sobre uma possível reativação da extinta rede social do Google, que foi criada em 2004 e durou 10 anos.<br/> <br/>
            "Eu sou um otimista. Acredito no poder da conexão para mudar o mundo. Acredito que o mundo é um lugar melhor quando nos conhecemos um pouco mais. É por isso que criei a primeira rede social do mundo quando era estudante de pós-graduação em Stanford. É por isso que eu trouxe o orkut.com para tantos de vocês ao redor do mundo. E é por isso que estou construindo algo novo. Vejo você em breve!".<br/> <br/>
            O anúncio, em inglês e português, foi feito dois dias depois que Elon Musk fechou um acordo para comprar o Twitter por US$ 44 bilhões. A compra dividiu a opinião dos usuários e muito deles passaram a pedir a volta do Orkut. Após a reativação do site, o possível retorno da rede social se tornou um dos assuntos mais comentados. "Se o Orkut voltar serei a pessoa mais feliz", escreveu um perfil no Twitter. Os usuários não poderão recuperar suas fotos antigas no Orkut. Essa opção era oferecida pelo Google, antigo proprietário da rede social, mas foi desativada há alguns anos.</p>

            <iframe className="video" src="https://www.youtube.com/embed/I_nVg_THeFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="noticias">
            <p className="noticias_titulo">Mais notícias</p>
            <Carrossel/>
          </div>
        </div>
      </div>
        </>
    );
}

export default Conteudo;