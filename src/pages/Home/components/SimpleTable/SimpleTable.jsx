import React, {Component} from 'react';
import {Table, Pagination, Rating, Balloon, Tag} from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import KunUtils from '../../../../util/KunUtils.js'
import {Base64} from 'js-base64';
import moment from 'moment';

export default class SimpleTable extends Component {
  static displayName = 'SimpleTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderAddress = (value) => {
    const str = KunUtils.beautySub(value, 26);
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
    const str = KunUtils.beautySub(value, 26);
    const trigger = <p>{str}</p>;

    return (
      <Balloon trigger={trigger} triggerType="hover">
        {value}
      </Balloon>
    );
  };

  renderSubject = (value) => {
    return (
      <div>
        <IceLabel style={{backgroundColor: '#7265e6'}}>{value}</IceLabel>
      </div>
    );
  };

  renderResult = (value) => {
    if (value === 'Safe') {
      return (
        <div>
          <IceLabel style={{backgroundColor: '#cfefdf', color: '#00a854'}}>{value}</IceLabel>
        </div>
      )
    }
    if (value === 'Other') {
      return (
        <div>
          <IceLabel style={{backgroundColor: '#fde3cf', color: '#f56a00'}}>{value}</IceLabel>
        </div>
      )
    }
    return (
      <div>
        <IceLabel style={{backgroundColor: '#f04134'}}>{value}</IceLabel>
      </div>
    );
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

  render() {
    if (this.props.tableData.isShow === false) {
      return '';
    }

    const tableData = this.props.tableData.list;
    console.log(tableData);

    return (
      <div className="simple-table" style={{margin: '20px 8%'}}>
        <IceContainer>
          <h2>{this.props.tableData.title}</h2>
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
              title="Subject"
              dataIndex="type"
              width={120}
              cell={this.renderSubject}
            />
            <Table.Column
              title="Result"
              dataIndex="result"
              width={120}
              cell={this.renderResult}
            />
            <Table.Column
              title="To"
              dataIndex="mainBody"
              cell={this.renderAddress}
            />

            <Table.Column
              title="Content"
              dataIndex="content"
              cell={this.renderContent}
            />
            <Table.Column
              title="Time"
              dataIndex="time"
              width={150}
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
