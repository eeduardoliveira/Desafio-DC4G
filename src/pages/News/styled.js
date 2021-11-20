import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.div`
    padding: 8rem 20rem 1.6rem 20rem;
    margin: auto;
    padding: 0;
`
export const Container = styled.section`
    max-width: 1040px;
`

export const ButtonBack = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;    
    color: #222222;
    padding: 2rem;
    display: flex;
    height: 3em;
    width: 11rem;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background-color: #0073E6;
    &:hover {
        box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
        background-color: #FFFFFF;
        transform: translateY(-2px);
    }
`
export const Section = styled.section`
    width: 100%;
    background-color: #0073E6;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Loader = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5rem;
        h2 {
            color: #0073E6;
            height: 40vh;
            font-size: 3rem;
        }

`
export const Header =  styled.div`
    padding: 4rem 2.4rem;
    @media screen and (min-width: 1024px) {
        position: relative;
        text-align: row;
        padding-block: 8rem 4.4rem;
     }
`
export const TitleNews =  styled.div`
    color: #FFFFFF;
    h1 {
        font-size: 2.4rem; 
    }    
    p {
        font-size: 1.6rem; 
        padding-top: 1.6rem;
    }
 @media screen and (min-width:1024px) {
    color: #FFFFFF;
    h1 {
        font-size: 3.2rem;
    }
    p{
        font-size: 1.8rem;
        padding-top: 1.6rem;
    }  
 }
`
export const AdditionalInformation = styled.section`
@media screen and (max-width: 738px) {
    padding-top: 3.2rem;

}
 @media screen and (min-width:1024px) {
    padding-top: 6.8rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
`
export const PublicationDate = styled.div`
@media screen and (max-width:738px) {
    font-size: 1.2rem;
    img {
        display: none;
    }
}
@media screen and (min-width:1024px) {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    span{ 
        padding-left: 0.887rem;

        }
     img{
        width: 2.15rem;
        height: 2.1rem;
        }
}
`
export const Share = styled.nav`
 @media screen and (max-width: 738px) {
    padding-top: 3.7rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    img {
        width: 2.1rem;
        height: 2.1rem;
        margin-left: 2rem;
        }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
    }
 }
@media screen and (min-width:1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    img {
        width: 2.1rem;
        height: 2.1rem;
        margin-left: 2rem;
        }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
    }
}

`

export const Text = styled.div`
    margin-bottom: 0.24rem;
    ul{
        list-style: none;
    }
    p, h2, li {
        margin-bottom: 2rem;
        font-size: 1.6rem;
    }
    a {
        text-decoration: none;
        color: #0073E6;
        font-weight: bold;
    }
 @media screen and (min-width:1024px) {
    padding-top: 4.8rem;
    font-size: 1.6rem;
    p, h2, li{
        margin-bottom: 2rem;
    }
    ul{
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #0073E6;
        font-weight: bold;
    }
    h1{
        display: none;
    }
 }
`
export const Content = styled.div`
    padding: 4rem 2.4rem;
    img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
    small {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.8rem 0 4rem;
        font-size: 1.2rem;
    }
@media screen and (min-width:1024px) {
    padding-top: 5.6rem;
    max-width: 1040px;
    margin: auto;
    img{
        height: 500px;
        object-fit: cover;
    }
    small {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.6rem;
        font-size: 1.4rem;
    }
}
`
export const Category = styled.div`
    font-size: 1.6rem;
    text-transform: uppercase;  
    padding-top: 4rem;
    a {
        text-decoration: none;
        color: #0073E6;
        font-weight: bold;
        font-size: 1.3rem;
    }
@media screen and (min-width:1040px) {
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding-top: 4rem;
    a {
        text-decoration: none;
        color: #0073E6;
        font-weight: bold;
    }
}
`