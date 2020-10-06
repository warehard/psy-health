import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/footer";
import Login from "../pages/login";
import PsychologistPage from "../pages/psychologist-page";
import Register from "../pages/register";

const Routes = (props) => {
  const token = ""; // somente para testes
  const access = true; // somente para testes

  return (
    <Switch>
      {token &&
        (!access ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path="/">
              Home Logado
              <Footer />
            </Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/">
              <PsychologistPage />
              <Footer />
            </Route>
          </Switch>
        ))}

      {/* não logado */}
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/">
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
