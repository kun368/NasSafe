import React, {Component} from 'react';
import {Input, Balloon, Icon} from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'FeedBack',
    path: 'https://github.com/kun368/NasSafe/issues/new',
  },
  {
    name: 'Download Chrome Extension',
    path: 'https://github.com/ChengOrangeJu/WebExtensionWallet',
  },
  {
    name: 'Download Mobile Wallet',
    path: 'https://nano.nebulas.io/index_en.html',
  },
];

export default class Header extends Component {
  renderBalloonContent = (menu, idx) => {
    return (
      <Menu.Item key={idx}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, idx) => {
            return (
              <a href={subMenu.path} target="_blank" className="custom-sub-menu" key={idx}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, idx) => {
      if (menu.children) {
        return this.renderBalloonContent(menu, idx);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.path} target="_blank">{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          {/*<Logo isDark={true}/>*/}
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
