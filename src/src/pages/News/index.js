import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, PublicationDate, TitleNews, Share, Main, Content, Text, Section, Container, AdditionalInformation, Category } from './styled'
import  facebook from './images/facebook.png'
import  whatsapp from './images/whatsapp.png'
import  twitter from './images/twitter.png'
import  linkImage from './images/link.png'
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
      useLayoutEffect(() => {
            showNews();
        },[])
        const {
            titulo: title, 
            resumo: resume, 
            created_at, 
            updated_at, 
            imagem_destaque_url: image, 
            descricao_imagem: description_image,
            categoria_titulo: category,
            } = news; 
  return(
    <Main>
    <Section>
        <Container>
            <Header>
                <TitleNews>
                        <h1>{title}</h1>
                        <p>{resume}</p>
                    <AdditionalInformation>
                        <PublicationDate>
                            <img src={calender} alt="calendariy" loading="lazy"/>
                            <span>  Publicado: {new Date (created_at).toLocaleString()} -  Atualizado: {new Date (updated_at).toLocaleString()} </span>
                        </PublicationDate>
                        <Share>
                            <span> Compartilhe: </span>
                            <ul> 
                                <li>
                                    <a href="https://facebook.com"> <figure> <img src={facebook} alt="" loading="lazy" /> </figure> </a> 
                                </li>
                                <li>
                                    <a href="https://twitter.com"> <figure> <img src={twitter} alt="" loading="lazy"/> </figure> </a>
                                </li>
                                <li>
                                    <a href="https://whatsapp.com"> <figure> <img src={whatsapp} alt=""  loading="lazy"/> </figure> </a>
                                </li>
                                <li>
                                    <a href="https://google.com"> <figure> <img src={linkImage} alt="" loading="lazy"/> </figure> </a>
                                </li>
                            </ul>
                        </Share>
                    </AdditionalInformation>   
                </TitleNews>
            </Header>
            </Container>
    </Section>
         <Content>
            <Container>
                <figure><img src={image} alt={description_image} loading="lazy" /></figure>
                <small><strong>Foto: {description_image}</strong></small>             
                <Text dangerouslySetInnerHTML={{__html:`${news.conteudo}`}} /> 
                <Category>
                <p><strong>CATEGORIA:</strong> <a href= "#" >{category}</a></p>
                </Category>
            </Container>
        </Content>
    </Main>
  )
  
}