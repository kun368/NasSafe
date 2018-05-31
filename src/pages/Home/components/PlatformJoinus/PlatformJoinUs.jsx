import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@icedesign/base';

export default class PlatformJoinUs extends Component {
  static displayName = 'PlatformJoinUs';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          ...styles.wrapper,
          backgroundImage:
            'url(https://img.alicdn.com/tfs/TB1Iw2ZRVXXXXb4aFXXXXXXXXXX-2760-1544.png)',
        }}
      >
        <div>
          <div style={styles.titleWrapper}>
            <h2 style={styles.title}>Start Using It Now!</h2>
            <p>
              In the future, blockchain will combine everything
              <br />
              Use Nebulas Safety 365 to share and avoid
              <br />
              fraudulent calls, spam, phishing sites, advertising Twitter
            </p>
          </div>
          <div style={styles.buttons}>
            <Button
              size="large"
              type="primary"
              component="a"
              href="/#/Help"
              target="_blank"
            >
              View Usage Help Manual ->
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 420,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  titleWrapper: {
    textAlign: 'center',
    paddingTop: 90,
  },
  title: {
    fontSize: 32,
    color: '#333',
    letterSpacing: '2px',
    lineHeight: '48px',
    textAlign: 'center',
  },
  buttons: { textAlign: 'center', marginTop: '60px' },
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
