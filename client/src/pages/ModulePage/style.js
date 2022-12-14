import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

export const Content = styled.div` 
  max-width: 1100px;
  width: 100%;
  margin: 2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
      max-width: 220px;
      margin: 1rem;
      margin-bottom: 0;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      margin: 20px;
    }
  }
`

export const ButtonContainer = styled.div`
  width: 200px;
`