import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
    div {
        span {
            color: var(--red);
            font-size: 11px;
            
        }
    }
`
export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--purple);
    color: var(--purple);
    padding: 1rem;
    display: flex;
    transition: 0.4s;
    ${(props) =>
    props.isErrored && css`
        border-color: var(--red);
        svg: var(--red);
    `}
    input {
        background: transparent;
        align-items: center;
        flex: 1; 
        border: 0;
        color: var(--black);
        &::placeholder {
            color: var(--gray);
        }
    }
    svg{
        margin-right: 16px;
    }
` 