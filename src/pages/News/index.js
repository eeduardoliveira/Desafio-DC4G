import { Header, Data, TitleNews, Camp } from './styled'
import  camp from './images/plantation.png'
import  facebook from './images/facebook.png'
import  wpp from './images/whatsapp.png'
import  twitter from './images/twitter.png'
import  ref from './images/link.png'
export function News(){
  return(
      <>
      
    <Header>
      <TitleNews>
        <h1>Produção de grãos da safra 2020/21 deve alcançar 268,3 milhões de toneladas</h1>
        <p> Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros... </p>
      <Data>
             <img src="#" alt="calender" />
            <span>  Públicado: Jun 14, 2021  -  Atualizado: Jun 25, 2021</span>
      </Data>
      <div>
            <img src={facebook} alt= "facebook" /> 
            <img src={twitter} alt= "Twitter" />
            <img src={wpp} alt= "Whatsapp" />
            <img src={ref} alt= "link" />
            <span> Compartilhe: </span>
      </div>
      </TitleNews>
    </Header>
      
    <Camp src={camp} alt="campo" />
    <p>Foto: Operação Acolhida</p>

      <div>
            <p>
                  A Safra de Grãos 2020/21 deve ter um crescimento de 4,4% em relação ao ciclo anterior, podendo alcançar 268,3 milhões de toneladas, 11,4 milhões de toneladas a mais  que o obtido em 2019/20. O levantamento foi apresentado, nesta quinta-feira (11), pela Companhia Nacional de Abastecimento (Conab).Já o crescimento da área total plantada é estimado em 2,7% em relação à safra anterior.
            </p>

            <p>
                  “Nós estamos crescendo a produção de grãos no Brasil, mas principalmente, crescendo a produtividade. E quando crescemos a produtividade, estamos aumentando a eficiência dos fatores de produção, incluindo terra, incluindo os fatores químicos, fertilizantes. Quer dizer, a agricultura brasileira está crescendo com sustentabilidade”, explicou o diretor de Política Agrícola  e Informações da Conab, Sergio De Zen.
            </p>

            <p>
                  O diretor do Departamento de Comercialização e Abastecimento, do Ministério da Agricultura, Pecuária e Abastecimento (Mapa), Silvio Farnese, ressaltou que a produtividade é a “tônica” da agricultura brasileira. E comentou que o crédito rural oferecido pelo Governo para investimento mostra isso. “Os grandes investimentos já se esgotaram por conta da demanda dos produtores que cada vez mais entenderam e estão visivelmente interessados em melhorar a produtividade no aspecto de mecanização, de utilização de irrigação, adubação”, afirmou.
            </p>

            <p>
                  A pesquisa foi feita na última semana de janeiro, e mostra que neste momento está em andamento a colheita das lavouras de primeira safra.
            </p>

            <h3>Resultado de algumas culturas</h3>

            <p>
                  <strong>Milho</strong> – produção esperada na primeira safra de 23,6 milhões com uma redução de 0,8% da área cultivada. Com a segunda e terceira safra, o esperado é a colheita de 105,5 milhões de toneladas, 2,9% a mais que a safra anterior. 
            </p>

            <p>
                  <strong>Soja</strong> – a estimativa para esta safra é de uma produção de 133,8 milhões de toneladas, em uma área de 38,3 milhões de hectares, 3,6% maior do que a passada.  
            </p>

            <p>
                  <strong>Feijao</strong> – produção na primeira safra estimada em 1 milhão de toneladas. Com as três safras, pode chegar a 3,2 milhões de toneladas. Arroz – produção de 10,9 milhões de toneladas, com uma redução na área cultivada de 2,3%.
            </p>    

      </div>
      </>
  )
}