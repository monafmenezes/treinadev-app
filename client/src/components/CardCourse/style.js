import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 6px;
  background-color: var(--purpler);
  border: 1px solid var(--kobi);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  margin-top: 2rem;

  p {
    margin-top: 1rem;
  }



 

`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  button {
    max-width: 100px;
  }
`