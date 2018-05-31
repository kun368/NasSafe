'use strict';


class SafeInfoRecord {

  from;
  time;
  txHash;
  type;
  result;
  mainBody;
  content;

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.time = o.time;
    this.txHash = o.txHash;
    this.type = o.type;
    this.result = o.result;
    this.mainBody = o.mainBody;
    this.content = o.content;
  }

  toString() {
    return JSON.stringify(this);
  }
}


const NasSefe = function () {
  LocalContractStorage.defineMapProperty(this, 'repo', {
    parse: function (text) {
      return new SafeInfoRecord(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  });
  LocalContractStorage.defineMapProperty(this, 'bodyList');
};

NasSefe.prototype = {

  init: function () {
  },


  Push(collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = [];
    }
    item.push(value);
    this[collectionName].put(key, item);
  },

  /**
   * @return {boolean}
   */
  TestStringContain(str1, str2) {
    return str1.toLowerCase().indexOf(str2.toLowerCase()) !== -1;
  },

  AddSafeInfoRecord(type, result, mainBody, content) {
    let item = new SafeInfoRecord();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.type = type;
    item.result = result;
    item.mainBody = mainBody;
    item.content = content;
    this.repo.put(item.mainBody, item);
    this.Push("bodyList", "list", item.mainBody);
    return item;
  },


  SearchRecord(searchString) {
    let list = this.bodyList.get("list");
    if (!list) {
      list = [];
    }
    return list
      .filter(it => {
        return this.TestStringContain(it, searchString);
      })
      .map(it => {
        return this.repo.get(it);
      });
  },

  GetRecentRecord(count) {
    let list = this.bodyList.get("list");
    if (!list) {
      list = [];
    }
    if (count > list.length) {
      count = list.length;
    }
    return list
      .reverse()
      .slice(0, count)
      .map(it => {
        return this.repo.get(it);
      });
  },

  GetAllMainBodys() {
    let list = this.bodyList.get("list");
    if (!list) {
      list = [];
    }
    return list;
  }
};
module.exports = NasSefe;
