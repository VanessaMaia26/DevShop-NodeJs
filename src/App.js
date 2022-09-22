import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTolltip from  'react-tooltip';

import { Container, Menu, PageBody } from './reducers/AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './Components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './Components/cart';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
      <BrowserRouter>
        <Container>
          <Menu>
            <MenuItem title="Loja" icon="/assets/store.png" link="/" />
            <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
            <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profilec" />
          </Menu>
          <PageBody>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
                <PrivateRoute path="/orders">
                  <div>TELA DE PEDIDOS</div>
                </PrivateRoute>
                <PrivateRoute path="/profile">
                  <div>TELA DE PERFIL</div>
                </PrivateRoute>
              </Route>
              <Route path="/tela2/:nome">
                <Tela2Screen />
              </Route>
            </Switch>
          </PageBody>
          <Cart />
          <ReactTolltip id="tip-top" place="top" effect="solid" />
          <ReactTolltip id="tip-right" place="right" effect="solid" />

        </Container>
      </BrowserRouter>
    );
}