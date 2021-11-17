import {useEffect, useState} from 'react';
import { Filter, Category, Data, Description, Header, Img, Item, News, TitleMaterial, Pagination, FilterText, FilterImg, List, ContentItem, Imagem, Principal, ContainerPagination } from "./styled";
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
    <Principal>
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
                            <Data>
                                <img src={calender} alt="calender" />
                                <span>  Publicado: {new Date (item.created_at).toLocaleString()} -  Atualizado: {new Date (item.updated_at).toLocaleString()} </span>
                            </Data>
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
            <a href="/"> &laquo; </a>
            <a href="/"> 1 </a>
            <a href="/"> 2 </a>
            <a href="/"> 3 </a>
            <a href="/"> &raquo;</a> 
        </Pagination>
        </ContainerPagination> 
    </Principal>
    
    )
}