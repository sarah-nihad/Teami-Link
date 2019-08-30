import React, { Component } from 'react'
import host from './host';
import axios from 'axios';
// import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
import Cookies from 'universal-cookie';
import Profile from './Profile';
const cookies = new Cookies();
class POS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      password: '',
      phone: '',
      description: ''

    }
  }


 


  render() {
    return (

      <Context.Consumer>{ctx => {
        return (
          <div >
      
              <Nav2 />
            <Profile />
          </div>

        )
      }}

      </Context.Consumer>
    );

  }
}
export default POS;