import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Form, FormContent, FormWrap } from './SignInStyles';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Link to="/">bitcash</Link>
          <FormContent>
            <Form action="#">
              <h1>Sign in to your account</h1>
              <label htmlFor="for">Email</label>
              <input type="email" required />
              <label htmlFor="for">Password</label>
              <input type="password" required />
              <button type="submit">Continue</button>
              <span>Forgot Password</span>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default SignIn;
