import styled from 'styled-components'

export const Principal = styled.div`
        max-width: 1040px;
        margin: auto;
`
// Cabeçalho do sites
export const Header = styled.header` 
        display: flex;
        align-items: center; 
        text-align: center;
        margin-top: 12rem;

     h1 {
        color: #0073E6;
        left: 200px
        letter-spacing: 0.1px;
        font-size: 40px;
        }

    div {
        margin-left: 20px;
        color: #0073E6;
        border-left: 1px solid #E1E6EF;
        padding-left: 2rem;
        font-size: 24px;
        line-height: 32px;
        }
`
// Botão Filtro
export const Filter = styled.button`
        display: flex;
        padding: 1.5rem 0;
        margin-top: 8rem;
        align-items: center;
        border: 1px solid #0073E6;
        box-shadow: 0px 8px 16px rgba(11, 31, 77, 0.04);
        border-radius: 4px;
        background-color: #FFFFFF;
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
        width: 104rem;
        border: 1px solid #E1E6EF;
        margin-top: 1.6rem;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(11, 31, 77, 0.04);
`
export const ContentItem = styled.section`
        padding: 2.4rem;
        display: flex;
        gap: 2.4rem;  
        align-items: center;
        justify-content: center;
`
 
// ajuste de margem da noticia
export const News = styled.div`
        padding: 0.75rem 0;
        display: flex;
        flex-direction: column;
`
// titulo da noticia
export const TitleMaterial = styled.h2`
        color: #333333;
        font-size: 2.4rem;
        margin-right: 0.87rem;
        a {
                text-decoration: none;
                 color: inherit;
        }
`

export const Category = styled.span`
        color: #0073E6;
        margin-bottom: 1.6rem;
        font-size: 1.3rem;
`

export const Img = styled.img`
        object-fit: cover;
        border-radius: 5px;
        height: 100%;


`
export const Imagem = styled.div`
        width: 100%;
        max-width: 20rem;
        height: 20rem;
`

// data de postagem da noticia
export const Data = styled.div`
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        span{ 
                margin-left: 0.875rem; 
        }
        img{
                width: 2.13rem;
                height: 2.1rem;
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