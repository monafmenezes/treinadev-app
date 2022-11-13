import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-bottom: 1rem;
  }

  ul {
      display:  flex;
      justify-content: space-between;
      align-items:flex-start;
      flex-direction: column;
      width: 100%;

      li {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        margin-right: 15px;
        align-self: flex-start;
      }

      
      div {
        display: flex;
        svg {
        margin-right: 10px;
        cursor: pointer;
      }      
      }
    }

`