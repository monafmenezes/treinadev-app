import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  height: 330px;
  background-color: rgba(123, 80, 111, 1);
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    form {
        margin: 20px 0;
        width: 340px;
        text-align: center;
    }

    h1, h2 {
        margin-bottom: 32px;
        color: var(--white);
        font-weight: 300;
    }
    div{
        margin-top: 16px;
    }
    p {
        margin-top: 8px;
    }
    a {
       font-weight: bold;
       color: var(--kobi);
    }

`