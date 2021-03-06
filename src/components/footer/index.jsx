import { Col } from "antd";
import React from "react";
import "antd/dist/antd.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import logo from "../../assets/imgs/logo-azul.svg";
import {
  StyledFooterContainer,
  StyledRow,
  StyledLogoCotainer,
  StyledCol,
  StyledContainerColSocial,
  StyledContainerLeft
} from "./styled";

const Footer = () => {
    return (
      <StyledFooterContainer>
        <StyledRow>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <StyledLogoCotainer href="/">
              <img src={logo} alt="Logo" />
            </StyledLogoCotainer>
          </Col>
          <StyledContainerLeft xs={24} sm={24} md={12} lg={12} xl={6}>
            <div className="container-box-left">
              <h4>Sobre a PsyHealth</h4>
              <a href="#">Perguntas frequentes</a>
              <a href="#">Quem somos</a>
              <a href="#">Politica de privacidade</a>
              <a href="#">Paciente: Termos de uso</a>
              <a href="#">Psicólogo: Termos de uso</a>
            </div>
          </StyledContainerLeft >
          <StyledCol xs={24} sm={24} md={12} lg={12} xl={7}>
            <div className="container-box-middle">
              <h4>Assuntos mais lidos</h4>
              <a href="#">Ansiedade</a>
              <a href="#">Depressão</a>
              <a href="#">Sindrome do impostor</a>
              <a href="#">Bipolaridade</a>
              <a href="#">Estresse</a>
            </div>
          </StyledCol>
          <StyledCol xs={24} sm={24} md={12} lg={12} xl={7}>
            <div className="container-box-middle">
              <h4>Especialistas</h4>
              <a href="#">Psicanalistas</a>
              <a href="#">Psicólogos</a>
              <a href="#">Terapeutas</a>
              <a href="#">Coachs</a>
            </div>
          </StyledCol>
          <StyledContainerColSocial xs={24} sm={24} md={12} lg={12} xl={4}>
            <div>
              <h4>Redes sociais</h4>
              <div>
                <a href="#">
                  <span>
                    <FaInstagramSquare />
                  </span>
                </a>
                <a href="#">
                  <span>
                    <FaFacebookSquare />
                  </span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span>
                    <FaTwitterSquare />
                  </span>
                </a>
                <a href="#">
                  <span>
                    <FaYoutubeSquare />
                  </span>
                </a>
              </div>
            </div>
          </StyledContainerColSocial>
        </StyledRow>
        <div className="developed-by">
          <span className="copy">&copy; PsyHealth</span>
          <div>
            <span className="developed-by-text">Desenvolvido por:</span>
            <a href="https://www.linkedin.com/in/augusto-pietroski/" target="_blank">Augusto,</a>
            <a href="https://www.linkedin.com/in/alexmiguel95/" target="_blank">Alex,</a>
            <a href="https://www.linkedin.com/in/cassiano-doederlein-648592148/" target="_blank">Cassiano,</a>
            <a href="https://www.linkedin.com/in/carolina-ahn-35ab7473/" target="_blank">Carolina,</a>
            <a href="https://www.linkedin.com/in/edu-magno/" target="_blank">Eduardo</a>
            <span className="e-text">e</span>
            <a href="https://www.linkedin.com/in/willian-brusch-237448154/" target="_blank">Willian</a>
          </div>
        </div>
      </StyledFooterContainer>
    );
};

export default Footer;
