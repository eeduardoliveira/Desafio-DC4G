import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  camp from './images/plantation.png'
import { Header, Data, TitleNews, Camp, Principal } from './styled'
import  facebook from './images/facebook.png'
import  wpp from './images/whatsapp.png'
import  twitter from './images/twitter.png'
import  ref from './images/link.png'
import calender from './images/Vector.png'

export function News(){
      const [news, setNews ]= useState({})
      const {slug} = useParams();
      const showNews = async () => {
            const response = await fetch(`https://newnoticias.digital-gov.com/api/cms/noticias/?slug=${slug}`, {   
                  method: 'GET', 
                  headers: { 
                      Authorization: 'Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL',
                  }
                  })
      const {results} = await response.json();
      setNews(results[0]);
      }
      useEffect(() => {
            showNews();
        },[])
        console.log(news);
  return(
    <Principal>
        <Header>
            <TitleNews>
                    <h1>{news.titulo}</h1>
                    <span>{news.subtopico_titulo}</span>
                <Data>
                    <img src={calender} alt="calendario" />
                    <span>Publicado: {news.created_at} -  Atualizado: {news.updated_at}</span>
                </Data>
            </TitleNews>
         </Header>
      
    <div dangerouslySetInnerHTML={{__html:`${news.conteudo}`}} />
      
    </Principal>
  )
  
}