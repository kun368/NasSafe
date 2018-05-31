import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownDocs.scss';

const initialSource = `
# Nebulas Safety 365 Platform Help Manuel

## Product Positioning

Nebulas Safety 365 is a decentralized platform based on NAS smart contracts that focuses on preventing phishing websites, spam, fraudulent calls, advertising Twitter, and marketing WeChat, making the Internet safer and cleaner.

Nebulas Safety 365 can help you permanently save this data to the blockchain and share it with others.

The site's data is stored on the smart contract of the nebula blockchain. Blockchain is a new application mode of computer technology such as distributed data storage, point-to-point transmission, consensus mechanism, and encryption algorithms. Blockchains are characterized by decentralization, openness, autonomy, non-disruptive information, and anonymity.

With the help of blockchain technology, this site can realize permanent preservation of data and cannot be tampered with. The blockchain also has the feature of anonymity. You can share this useful data, and no one knows who you are and solve the problem of sharing. The risk of data being tracked.

At the same time, Nebulas Safety 365 supports not only browser wallet transactions but also mobile mobile wallets.


## Use Nebulas Safety 365 via your browser wallet

- Step 1: open the website and check the latest Nebulas Safety 365 safety information
- Step 2: according to your needs, find the phone, email address, website domain name, Twitter, WeChat, QQ, etc. that you think are suspicious.
- Step 3: if you want to share information and help others to better browse the Internet, you can click the "Provide Information" button on the home page.
- Step 4: Download Chrome Browser and NAS Wallet Extension
- Step 5, fill in the form you want to share, submit the transaction, log in to your NAS account and switch to the main network, submit information
- Step 6: Check your newly shared information on the home page

## Using Nebulas Safety 365 with Mobile Wallet

- Step 1: Open the site on the mobile (mobile phone, tablet, etc.) and check the latest Nebula Security 365 security information
- Step 2: According to your needs, find the mobile phone, e-mail address, website domain name, Twitter, WeChat, QQ, etc. that you consider suspicious.
- Step 3: If you want to share information and help others to better browse the Internet, you can click the "provide information" button on the home page.
- Step 4: Install NAS Mobile Wallet
- Step 5, fill out the form you want to share, submit the transaction, login to your NAS account and switch to the main network, submit information
- Step 6: The Nebula Wallet app pops up after submitting the information. Submit the transaction after confirming the information.
- Step 7: Check the newly shared information on your homepage

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/14392267.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/72291809.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/54489193.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/94760618.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/2844709.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/38215194.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-31/50231976.jpg)

`;

export default class MarkdownDocs extends Component {
  static displayName = 'MarkdownDocs';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{paddingTop: '30px'}}>
        <ReactMarkdown className="markdown-docs-body" source={initialSource} />
      </div>
    );
  }
}
