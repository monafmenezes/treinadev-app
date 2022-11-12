import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => (props.purpleSchema ? '#DD99BB' : '#f5f5f5')};
    color: ${(props) => (props.purpleSchema? '#f5f5f5' : '#DD99BB')};
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--kobi);
    font-family: 'Roboto Mono', monospace;
    margin-top: 16px;
    width: 100%;
    transition: 0.5s;
    :hover{
        border: 2px solid var(--purple-100);
        filter: brightness(0.9);
    }
`