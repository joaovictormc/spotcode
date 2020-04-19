import React, { Fragment } from 'react';
import { Navbar, Container, Colums, Button, Dropdown } from 'react-bulma-components';
import logoImg from '../../../assets/images/logo.png';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const ColumsFullWidth = styled(Colums)`
    width: 100%;
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
`
const Menu = () => {
  let actionButton;

  if(useLocation().pathname == '/') {
    actionButton = <a href='/users/sing_in' className='iss-pulled-right is-right'>
                       <Button outlined={true} color="white">ENTRAR</Button>
                   </a>
  } else {
    actionButton = <Dropdown className='is-pulled-right is-right' color='dark' label={<FaUserCircle size="2em" />}>
                      <Dropdown.Item value="other">
                        <a href='/users/edit'>
                          Editar Usuário
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item value="other">
                        <a href='/users/sing_out'>
                          Sair
                        </a>
                      </Dropdown.Item>
                   </Dropdown>
  }


  return (
    <Fragment>
      <Navbar color="dark">
          <Container>
            <ColumsFullWidth className='is-mobile'>
              <Colums.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
                    <Img src={logoImg} className='image' />
              </Colums.Column>
              <Colums.Column>
                  {actionButton}
              </Colums.Column>
            </ColumsFullWidth>
          </Container>
      </Navbar>
    </Fragment>
  );
}
export default Menu;