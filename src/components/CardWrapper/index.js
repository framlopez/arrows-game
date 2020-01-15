import React, { PureComponent, Fragment } from "react";
import { Card, Typography, Icon } from 'antd';
import { Context } from "../Aplication/context";

import './index.css';

const { Title } = Typography;

export default class CardWrapper extends PureComponent {
  static contextType = Context;

  get title() {
    const { title, iconType } = this.props;
    if (!title) return null;
    return (
      <Fragment>
        <Icon type={iconType} />
        {` ${title}`}
      </Fragment>
    );
  }

  render() {
    const { text } = this.props;
    return (
      <Card className="card-wrapper" title={this.title}>
        <Title level={2}>{text}</Title>
      </Card>
    );
  }
}
