import {useEffect, useState} from 'react';
import { Loader, Category, PublicationDate, Description, Header, Img, Item, News, TitleMaterial, List, ContentItem, Imagem, Main, ContainerPagination} from "./styled";
import calender from './images/Vector.png';
import {Link} from 'react-router-dom';
import Pagination from '@material-ui/core/Pagination';

      export function LastNews() {
    // Integração da API
    const [news, setNews] = useState([]);
    const [numPg, setNumPg] = useState(1);
    const [loading, setLoading] = useState(false);
    const showNews =  async  () => {
      try {
        setLoading(true);
        const response = await fetch(
            `https://newnoticias.digital-gov.com/api/cms/noticias/?page=${numPg}`,
            {
              headers: {
                authorization:
                  "Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL",
              },
            });
          const { results } = await response.json();
          setNews(results);
        } catch (e) {
        alert("RECARREGUE A PAGINA");
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      showNews();
    },[]);
    useEffect(() => {
      showNews();
    },[numPg]);
    return (
      <Main>
          <Header> 
              <h1><strong>Últimas Noticias</strong></h1> 
              <div> <strong>18</strong> Resultados</div>
          </Header> 
              <List>
          {loading ? (
          <Loader>
            <h2>Carregando...</h2>
          </Loader>
              ) : (
              news.map((item) => {
                      return (
                      <Item >
                          <ContentItem>   
                              <Imagem> <Img  src={item.imagem_destaque_url} alt={item.descricao_imagem}/></Imagem>
                              <News> 
                                  <Category><strong>{item.categoria_titulo}</strong></Category>
                                  <TitleMaterial>
                                      <Link to={`news/${item.slug}`} alt="link"> {item.titulo} </Link>
                                  </TitleMaterial>
                                  <Description>
                                      <p>{item.resumo}</p>
                                  </Description>
                                  <PublicationDate>
                                      <img src={calender} alt="calender" />
                                      <span>  Publicado: {new Date (item.created_at).toLocaleString()} -  Atualizado: {new Date (item.updated_at).toLocaleString()} </span>
                                  </PublicationDate>
                              </News>
                          </ContentItem>
                    </Item>
                      )
                  }   )
              ) } 
          </List>
              <ContainerPagination>  
                    <Pagination 
                    count = {2} 
                    color="primary" 
                    defaultPage={numPg}
                    onChange={(event, value) => setNumPg(value)} /> 
              </ContainerPagination>  
      </Main>
    )
}

