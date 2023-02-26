import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    @media(max-width:760px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:510px){
        grid-template-columns: repeat(1, 1fr);
    }

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        display: block;
        font-size: 2rem;
        margin-top: 1rem;
        line-height: 3rem;
        font-weight: 500;
    }
    & .highligth-background{
        background:#33cc95;
        color: var(--shape);
    }
`