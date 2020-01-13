import React, { PureComponent } from "react";
import { Typography } from 'antd';

const { Title } = Typography;

export default class TitleCard extends PureComponent {
  render() {
    return (
      <Title className="app-title">Arrows Game</Title>
    );
  }
}
