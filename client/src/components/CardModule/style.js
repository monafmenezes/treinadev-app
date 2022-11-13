import styled from "styled-components";

export const Container = styled.div`
  height: 170px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--kobi);
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  &:hover {
    border: 1px solid var(--purple-100);
    filter: brightness(0.8);
  }

  h2 {
    font-size: 14px;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const IconContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;

span {
  font-size: 14px;
  margin-top: 4px;
}

svg {
  color: var(--kobi);
}

`

export const ContainerButton = styled.div`
  width: 100px ;
`