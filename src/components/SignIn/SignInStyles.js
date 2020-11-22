import styled from 'styled-components';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    margin-left: 2rem;
    margin-top: 2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;

    @media screen and (max-width: 480px) {
      margin-left: 1rem;
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;  

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  h1 {
    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
  }

  label {
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
  }

  input {
    padding: 1rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 4px;
  }

  button {
    background: #01bf71;
    padding: 1rem 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.3rem;
    cursor: pointer
  }

  span {
    text-align: center;
    margin-top: 1.5rem;
    color: #fff;
    font-size: 14px;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;