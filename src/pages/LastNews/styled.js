import styled from 'styled-components'

export const Main = styled.div`
        max-width: 1040px;
        margin: auto;
        padding: 2.4rem;
@media screen and (min-width: 1024px) {
        padding: 0;
}
`
// Cabeçalho do sites
export const Header = styled.header` 
        h1 {
        display: flex;
        color: #0073E6;
        letter-spacing: 0.1px;
        font-size: 3.2rem;
      }

      div {
        color: #0073E6;
        font-size:1.4rem;
        line-height: 32px;
        padding: 0;
        margin: 0;
        border: none;
      }
@media screen and (min-width: 1024px) {
        display: flex;
        align-items: center; 
        text-align: center;
        margin-top: 12rem;

     h1 {
        font-size: 4.0rem;
        }

    div {
        margin-left: 20px;
        border-left: 1px solid #E1E6EF;
        padding-left: 2rem;
        font-size: 24px;
        }
       }
`
// Botão Filtro
export const Filter = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0;
        width: 100%;
        height: 4.8rem;
        margin-top: 8rem;
        border: 1px solid #0073E6;
        box-shadow: 0px 8px 16px rgba(11, 31, 77, 0.04);
        border-radius: 4px;
        background-color: #FFFFFF;
@media screen and (min-width: 1024px) {
        width: auto;
       }
    `

export const FilterText = styled.span`
        font-family: 'roboto', sans-serif;
        margin-right: 5.6rem;
        margin-left: 1.5rem;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        color: #0073E6;
`

export const FilterImg = styled.img`
       width: 1.8rem;
       height: 1.2rem;
       margin-left: 1.6rem;
`

export const List = styled.ul`
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        list-style: none;
`
// box com a noticia
export const Item = styled.li`
        width: 100%;
        border: 1px solid #E1E6EF;
        margin-top: 1.6rem;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(11, 31, 77, 0.04);

`
export const ContentItem = styled.section`
        display: flex;
        width: 100%;
        gap: 2.4rem;  
        padding: 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
@media screen and (min-width: 1024px) {
        flex-direction: row;
        padding: 2.4rem;
}
`
 
// ajuste de margem da noticia
export const News = styled.div`
        display: flex;
        flex-direction: column;
        padding-inline: 1.7rem;
        padding-bottom: 2.4rem;
@media screen and (min-width: 1024px) {
        padding: 0.75rem 0;

}
`
// titulo da noticia
export const TitleMaterial = styled.h2`
        color: #333333;
        font-size: 1.8rem;
        margin-right: 0.87rem;
        a {
                text-decoration: none;
                 color: inherit;
        }
@media screen and (min-width: 1024px) {
        font-size: 2.4rem;
}
`

export const Category = styled.span`
        color: #0073E6;
        margin-bottom: 1.6rem;
        font-size: 1.3rem;
@media screen and (min-width: 1024px) {
        padding: 0;
}
`

export const Img = styled.img`
        object-fit: cover;
        border-radius: 5px;
        height: 100%;
        width: 100%;

`
export const Imagem = styled.div`
        width: 100%;
        height: 20rem;
@media screen and (min-width: 1024px) {
        max-width: 20rem;

}
`

// data de postagem da noticia
export const PublicationDate = styled.div`
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        img{
                display: none;
        }
@media screen and (min-width: 1024px){
        img{
                display: flex;
                width: 2.13rem;
                height: 2.1rem;
        }

        span{ 
                margin-left: 0.875rem; 
        }
}
`
// a noticia
export const Description = styled.p`
        font-size: 16px;
        margin-bottom: 1.8rem;
        margin-top: 0.8rem;     
        line-height: 2.4rem;
        color: #333333;
        
`
export const Pagination = styled.div`  
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        gap: 3rem;
        font-size: 25px;
        padding-block: 13rem;
        a {
                color: #0073E6;
                text-decoration: none;
                transition: all .3s ease-in;
                &:hover {
                        display: flex;
                        align-items: center;
                        justify-content: center;        
                        width: 4rem;
                        height: 4rem;
                        color: white;
                        border-radius: 50%;
                        background-color: #0073E6;
                }
        }
`

export const ContainerPagination = styled.section`
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
`

export const ItemPagination = styled.a`

`