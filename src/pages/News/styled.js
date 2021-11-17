import styled from 'styled-components'

export const Main = styled.div`
    padding: 8rem 20rem 1.6rem 20rem;
    margin: auto;
    padding: 0;

`

export const Container = styled.section`
    max-width: 1040px;

`

export const Section = styled.section`
    width: 100%;
    background-color: #0073E6;
    display: flex
    align-items: center;
    justify-content: center;

`
export const Header =  styled.div`
    text-align: row;
    padding-block: 8rem 4.4rem;
`

export const TitleNews =  styled.div`
    color: #FFFFFF;
    h1 {
        font-size: 3.2rem;
    }

    p{
        font-size: 1.8rem;
        padding-top: 1.6rem;
    }  
`
export const AdditionalInformation = styled.section`
    padding-top: 6.8rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PublicationDate = styled.div`
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
`

export const Share = styled.nav`
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

`


export const Text = styled.div`
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
`

export const Content = styled.div`
    padding-top: 5.6rem;
    max-width: 1040px;
    margin: auto;
    img{
        height: 500px;
        object-fit: cover;
    }
    small{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.6rem;
        font-size: 1.4rem;

    }
`
export const Category = styled.div`
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding-top: 4rem;
    a {
        text-decoration: none;
        color: #0073E6;
        font-weight: bold;
    }
`