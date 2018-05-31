import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import NebUtils from "../../util/NebUtils";
import {Feedback} from '@icedesign/base';
import SimpleTable from "./components/SimpleTable/SimpleTable";

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
    };
    this.onSearchSchool = this.onSearchSchool.bind(this);
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
        <Header />
        <PlatformLanding onSearch={this.onSearchSchool} />
        <SimpleTable tableData={this.state.tableData}/>
        <PlatformJoinus />
        <Footer />
      </div>
    );
  }
}
