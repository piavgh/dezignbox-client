import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AdminPage extends Component {

  render() {
    return (
      <div>
        <h1>Admin Management</h1>

        <Link to="/admin/transactions">Manage Transactions</Link>
      </div>
    )
  }
}
