import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Search, Icon} from '@icedesign/base';
import NebUtils from '../../../../util/NebUtils.js'

export default class PlatformLanding extends Component {
  static displayName = 'PlatformLanding';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.body}>
          <h2 style={styles.title}>
            <Icon type="security" size="xl"/> Nebulas Safety 365
          </h2>
          <span style={styles.title2}>
          </span>
          <Search
            autoWidth
            hasIcon={true}
            size="large"
            searchText="RECOGNITION"
            value={this.state.value}
            onSearch={this.props.onSearch}
            dataSource={this.state.dataSource}
            placeholder="Enter suspicious scam Websites, Twitter, WeChat, QQ, Phone, etc."
          />

          <Button.Group style={{paddingTop: '20px'}}>
            <Button
              type="primary"
              component="a"
              target="_blank"
              href="/#/Help"
            >
              <Icon type="form" /> View Help Manual
            </Button>

            <Button
              type="primary"
              component="a"
              target="_blank"
              href="/#/Create"
            >
              <Icon type="comments" /> Provide Information
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

const styles = {
  buttons: {textAlign: 'center', marginTop: 33},
  body: {
    position: 'absolute',
    top: '150px',
    left: '50%',
    marginLeft: '-300px',
    width: '600px',
    color: '#fff',
    maxHeight: '260px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  wrapper: {
    overflow: 'hidden',
    height: 480,
    backgroundImage:
      'url("http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/554157.jpg")',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundColor: '#66ABFF',
    boxShadow: '0 1px 16px 0 rgba(0,0,0,0.10)',
  },
  title: {
    fontSize: '32px',
    color: 'yellow',
    letterSpacing: '2px',
    lineHeight: '48px',
    textAlign: 'center',
    fontWeight: 900,
  },
  title2: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: '48px',
    fontWeight: 900,
  },
  primaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    color: '#fff',
  },
  secondaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
