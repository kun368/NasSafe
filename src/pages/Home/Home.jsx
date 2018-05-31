import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import PlatformBlackIntro from './components/PlatformBlackIntro';
import NebUtils from "../../util/NebUtils";
import {Feedback} from '@icedesign/base';
import SimpleTable from "./components/SimpleTable/SimpleTable";

const Toast = Feedback.toast;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  onSearchSchool(value) {
    let key = value.key;
    if (!key || key.trim() === "") {
      Toast.error("Please enter the content to search");
      return;
    }
    key = key.trim();
    Toast.success(key);

  };

  render() {
    return (
      <div className="home-page" style={{ background: '#fff' }}>
        <Header />
        <PlatformLanding onSearch={this.onSearchSchool} />
        <SimpleTable tableData={this.state.tableData}/>
        <PlatformToolsIntro />
        <PlatformIntro />
        <PlatformBlackIntro />
        <PlatformJoinus />
        <Footer />
      </div>
    );
  }
}
