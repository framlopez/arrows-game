import React, { PureComponent } from "react";
import { Table, Tag } from 'antd';
import { Context } from "../Aplication/context";

const columns = [
  {
    title: 'Motivo',
    dataIndex: 'id1',
    key: 'id1',
  },
  {
    title: 'Cantidad',
    dataIndex: 'id2',
    key: 'id2',
    align: 'right',
  },
  {
    title: 'Puntos',
    dataIndex: 'id3',
    key: 'id3',
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
          <Tag color={color}>
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
      // {
      //   key: '1',
      //   name: 'Movimientos',
      //   points: score.allCount,
      //   tags: [],
      // },
      {
        key: '1',
        id1: 'Movimientos acertados',
        id2: score.successCount,
        id3: score.successCount * 1,
      },
      {
        key: '2',
        id1: 'Movimientos fallidos',
        id2: score.errorCount,
        id3: score.errorCount * -2,
      },
      // {
      //   key: '4',
      //   name: 'Calificación',
      //   points: score.points,
      //   tags: [],
      // },
    ];
    return (
      <Table bordered columns={columns} dataSource={data} pagination={false} size="small" />
    );
  }
}
