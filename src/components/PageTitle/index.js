import React, { PureComponent } from "react";
import { Typography } from 'antd';

import './index.css';

const { Title } = Typography;

export default class PageTitle extends PureComponent {
  render() {
    return (
      <Title className="page-title">Arrows Game</Title>
    );
  }
}
