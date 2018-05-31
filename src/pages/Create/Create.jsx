import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class Create extends Component {
  static displayName = 'Create';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="create-page">
        <CreateActivityForm />
      </div>
    );
  }
}
