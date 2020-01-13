import React, { PureComponent, Fragment } from "react";
import { Card, Typography, Icon } from 'antd';
import { Context } from "../Aplication/context";

const { Title } = Typography;

export default class GameScoreCard extends PureComponent {
  static contextType = Context;

  get title() {
    const { title, iconType } = this.props;
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
      <Card title={this.title}>
        <Title>{text}</Title>
      </Card>
    );
  }
}
