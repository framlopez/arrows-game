import React, { PureComponent } from "react";
import { Table, Tag } from 'antd';
import { Context } from "../Aplication/context";

import './index.css';

const columns = [
  {
    title: 'Motivo',
    dataIndex: 'concept',
    key: 'concept',
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'right',
  },
  {
    title: 'Puntos',
    dataIndex: 'points',
    key: 'points',
    align: 'right',
    render: (points) => {
      let color = 'geekblue';
      let symbol = ' ';
      if (points < 0) {
        color = 'volcano';
        symbol = '';
      } else if (points > 0) {
        color = 'green';
        symbol = '+';
      }
      return (
        <span>
          <Tag className="tag" color={color}>
            {`${symbol}${points}`}
          </Tag>
        </span>
      );
    },
  },
];

export default class ScoreTable extends PureComponent {
  static contextType = Context;
  render() {
    const { score } = this.context;
    const data = [
      {
        key: '1',
        concept: 'Movimientos acertados',
        quantity: score.successCount,
        points: score.successCount * 1,
      },
      {
        key: '2',
        concept: 'Movimientos fallidos',
        quantity: score.errorCount,
        points: score.errorCount * -2,
      },
    ];
    return (
      <Table bordered={true} columns={columns} dataSource={data} pagination={false} size="small" />
    );
  }
}
