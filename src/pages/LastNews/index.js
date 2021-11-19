import {useEffect, useState} from 'react';
import { Loader, Category, PublicationDate, Description, Header, Img, Item, News, TitleMaterial, Pagination, List, ContentItem, Imagem, Main, ContainerPagination, LinkPagination } from "./styled";
import calender from './images/Vector.png';
import {Link} from 'react-router-dom';


export function LastNews(){
    // Integração da API
    const [slug, setSlug] = useState(" ");
    const [news, setNews] = useState([]);
    const [numPg, setNumPg] = useState(1);
    const [loading, setLoading] = useState(false);
  
    const showCategory = async () => {
      const response = await fetch(
        `https://newsiseci.digital-gov.com/api/cms/temas/`,
        {
          headers: {
            authorization: " Api-Key 1IRIc4Uu.gf1KcjI2OkzqC71aD9IODDAEQUIF2pbp",
          },
        }
      );
      const response2 = await fetch(
        `https://newsiseci.digital-gov.com/api/cms/temas/?page=2`,
        {
          headers: {
            authorization: " Api-Key 1IRIc4Uu.gf1KcjI2OkzqC71aD9IODDAEQUIF2pbp",
          },
        }
      );
      const { results } = await response.json();
      const { results: results2 } = await response2.json();
      const total = results.concat(results2);
      setSlug(total);
    };
    const showNews = async () => {
      try {
        setLoading(true);
        if (slug) {
          const response = await fetch(
            `https://newnoticias.digital-gov.com/api/cms/noticias/?categoria_slug=${slug}`,
            {
              headers: {
                authorization:
                  "Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL",
              },
            }
          );
          const { results } = await response.json();
          setNews(results);
        } else {
          const response = await fetch(
            `https://newnoticias.digital-gov.com/api/cms/noticias/?page=${numPg}`,
            {
              headers: {
                authorization:
                  "Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL",
              },
            }
          );
          const { results } = await response.json();
          setNews(results);
        }
      }catch (e) {
        alert("REFRESH PAGE or RETURN TO LAST PAGE");
      }finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      showNews();
      showCategory();
    },[]);
    useEffect(() => {
      showNews();
    },[numPg, slug]);
    return (
    <Main>
     {/* TOPO DA PÁGINA */}
        <Header> 
            <h1><strong>Últimas Noticias</strong></h1> 
            <div> <strong>18</strong> Resultados</div>
        </Header> 
        {/* NOTICIAS */}
        <List>
        {loading ? (
        <Loader>
          <h2>Loading...</h2>
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
                <Pagination>
                    <LinkPagination onClick={() => setNumPg(numPg - 1)} > 	&lsaquo; </LinkPagination>
                    <LinkPagination onClick={() => setNumPg(1)}> 1 </LinkPagination>
                    <LinkPagination onClick={() => setNumPg(2)}> 2 </LinkPagination>
                    <LinkPagination onClick={() => setNumPg(numPg + 1)}> &rsaquo; </LinkPagination>
                </Pagination>
            </ContainerPagination> 
    </Main>
    
    )
}