import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import NebUtils from "../../util/NebUtils";
import {Feedback} from '@icedesign/base';
import SimpleTable from "./components/SimpleTable/SimpleTable";
import { Dialog } from '@icedesign/base';


const Toast = Feedback.toast;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        list: [],
        isShow: false,
        title: ''
      },
      welcomeDialogShow: true,
    };
    this.onSearchSchool = this.onSearchSchool.bind(this);
  }

  onWelcomeDialogClose = () => {
    this.setState({
      welcomeDialogShow: false
    });
  };

  renderWelcomeDialog() {
    return (
      <Dialog
        visible={this.state.welcomeDialogShow}
        onOk={this.onWelcomeDialogClose}
        closable="esc,mask,close"
        onCancel={this.onWelcomeDialogClose}
        onClose={this.onWelcomeDialogClose}
        title="Welcome to Nebulas Safety 365!"
      >
        <p style={{color: 'red'}}>Nebulas Safety 365 can be used across platforms, first to support four modes of use,
          and to add detailed help to use, to make the Internet a better world, and to make fraud nowhere!</p>
        <ul>
          <li>Method 1. The Chrome browser opens this application, installs the WebExtensionWallet extension, and uses the extension itself to trade</li>
          <li>Method 2. Chrome browser opens this application, installs WebExtensionWallet extension and NAS mobile wallet, uses mobile phone scanning code transaction</li>
          <li>Method 3: The mobile phone/tablet browser opens the nebula fitness assistant and automatically invokes the wallet transaction when uploading the file (only need to install the NAS mobile wallet)</li>
          <li>Method 4. Select this application directly in the NAS mobile wallet DApp market</li>
        </ul>
        <p style={{color: 'red'}}>More features are still being added. For more details on how to use, please see the help manual!</p>
      </Dialog>
    );
  }

  componentDidMount() {
    const thiz = this;
    NebUtils.userCallAxios(
      "GetRecentRecord",
      `["7"]`,
      ret => {
        thiz.setState({
          tableData: {
            list: ret,
            isShow: true,
            title: 'Latest Safety 365 Information'
          }
        })
      }
    );
  }

  static domainName(url) {
    const sign = "://";
    let pos = url.indexOf(sign);
    if(pos >= 0){
      pos += sign.length;
      url = url.slice(pos);
    }
    const array = url.split(".");
    if(array[0] === "www"){
      return array[1];
    }
    return array[0];
  }

  onSearchSchool(value) {
    const thiz = this;
    let key = value.key;
    if (!key || key.trim() === "") {
      Toast.error("Please enter the content to search");
      return;
    }
    key = key.trim();
    if (key.indexOf("http") !== -1) {
      key = Home.domainName(key);
    }

    Toast.loading(`Searching data, please wait...`);
    NebUtils.userCallAxios(
      "SearchRecord",
      `["${key}"]`,
      ret => {
        Toast.success(`Get data success!`);
        thiz.setState({
          tableData: {
            list: ret.reverse(),
            isShow: true,
            title: `Search For: ${key}`
          }
        })
      }
    );

  };

  render() {
    return (
      <div className="home-page" style={{ background: '#fff' }}>
        {this.renderWelcomeDialog()}
        <Header />
        <PlatformLanding onSearch={this.onSearchSchool} />
        <SimpleTable tableData={this.state.tableData}/>
        <PlatformJoinus />
        <Footer />
      </div>
    );
  }
}
