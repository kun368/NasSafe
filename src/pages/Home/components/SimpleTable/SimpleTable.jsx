import React, {Component} from 'react';
import {Table, Pagination, Rating, Balloon} from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import KunUtils from '../../../../util/KunUtils.js'
import {Base64} from 'js-base64';
import moment from 'moment';

moment.locale('zh-cn');

export default class SimpleTable extends Component {
  static displayName = 'SimpleTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderAddress = (value) => {
    const str = KunUtils.beautySub(value, 5);
    const trigger =
      <div>
        {str}
      </div>;

    return (
      <Balloon trigger={trigger} triggerType="hover">
        {value}
      </Balloon>
    );
  };

  renderContent = (value) => {
    value = Base64.decode(value);
    const str = KunUtils.beautySub(value, 5);
    const trigger = <p>{str}</p>;

    return (
      <Balloon trigger={trigger} triggerType="hover">
        {value}
      </Balloon>
    );
  };

  renderSubject = (value) => {
    const str = KunUtils.beautySub(value, 5);
    const trigger = <p>{str}</p>;

    return (
      <Balloon trigger={trigger} triggerType="hover">
        {value}
      </Balloon>
    );
  };

  renderResult = (value) => {
    return (
      {value}
    )
  };

  renderTime = (value) => {
    const t1 = moment(new Date(value)).format('LLLL');
    const t2 = moment(new Date(value)).format('YYYY-MM-DD');
    const trigger = <p>{t2}</p>;

    return (
      <Balloon trigger={trigger} triggerType="hover">
        {t1}
      </Balloon>
    );
  };

  extractFilterLabel(tableData, name) {
    let res = new Set(tableData.map(it => {
      return it[name];
    }));
    res = new Array(...res).map(it => {
      return {
        label: it,
        value: it
      }
    });
    return res;
  }

  render() {
    if (this.props.tableData.isShow === false) {
      return '';
    }

    const tableData = this.props.tableData.list;
    console.log(tableData);

    return (
      <div className="simple-table" style={{margin: '20px 8%'}}>
        <IceContainer>
          <Table
            dataSource={tableData}
            className="basic-table"
            hasBorder={false}
            language="en-us"
          >
            <Table.Column
              title="From Address"
              dataIndex="from"
              cell={this.renderAddress}
            />
            <Table.Column
              title="Result"
              dataIndex="result"
              cell={this.renderResult}
            />
            <Table.Column
              title="Subject"
              dataIndex="Subject"
              cell={this.renderSubject}
            />

            <Table.Column
              title="Content"
              dataIndex="content"
              cell={this.renderContent}
            />
            <Table.Column
              title="Time"
              dataIndex="time"
              cell={this.renderTime}
            />
          </Table>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  operation: {
    marginRight: '12px',
    textDecoration: 'none',
  },
  paginationWrapper: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
