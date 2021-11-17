import {useEffect, useState} from 'react';
import { Filter, Category, PublicationDate, Description, Header, Img, Item, News, TitleMaterial, Pagination, FilterText, FilterImg, List, ContentItem, Imagem, Main, ContainerPagination } from "./styled";
import calender from './images/Vector.png';
import filter from './images/filter-list.png';
import {Link} from 'react-router-dom';


export function LastNews(){
    // Integração da API
    const [news, setNews] = useState([])
    const getNews = async () => { 
        const response = await fetch('https://newnoticias.digital-gov.com/api/cms/noticias/', {   
            method: 'GET', 
            headers: { 
                Authorization: 'Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL',
            }
          }) 
        const {results} = await response.json();
        setNews(results);
        console.log(results);
    }
    useEffect(() => {
         getNews();
     },[])
    return (
    <Main>
     {/* TOPO DA PÁGINA */}
        <Header> 
            <h1><strong>Últimas Noticias</strong></h1> 
            <div> <strong>18</strong> Resultados</div>
        </Header>
        <Filter>
             <FilterImg src={filter} alt="button" />
             <FilterText><strong>Filtrar</strong></FilterText>  
        </Filter>
        {/* NOTICIAS */}
        <List>

            {news.map((item) => {
                return (
                <Item >
                    <ContentItem>   
                        <Imagem> <Img  src={item.imagem_destaque_url} alt={item.descricao_imagem}/> </Imagem>
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
            }
        </List>
        <ContainerPagination>
        {/* PAGINAÇÃO */}
        <Pagination>
            <ContainerPagination href="/"> &laquo; </ContainerPagination>
            <ContainerPagination href="/"> 1 </ContainerPagination>
            <ContainerPagination href="/"> 2 </ContainerPagination>
            <ContainerPagination href="/"> 3 </ContainerPagination>
            <ContainerPagination href="/"> &raquo;</ContainerPagination> 
        </Pagination>
        </ContainerPagination> 
    </Main>
    
    )
}