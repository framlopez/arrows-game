import React, { PureComponent, Fragment } from "react";
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default class PageTitle extends PureComponent {
  render() {
    return (
      <Fragment>
        <Title className="page-title">Arrows Game</Title>
        <Paragraph>Arrows Game es un mini juego en base al teclado. Puedes sumar puntos y publicarlos en Twitter para competir con tus amigos. Es un proyecto de motivación personal, y de código abierto.</Paragraph>
      </Fragment>
    );
  }
}
