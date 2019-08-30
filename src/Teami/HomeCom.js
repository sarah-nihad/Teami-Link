import React, { Component } from 'react'
import host from '../component/host';
import axios from 'axios';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
import MainCom from './MainCom';

const cookies = new Cookies();
class HomeCom extends Component {
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
      
              <NavCom />
              <MainCom />
         
          </div>

        )
      }}

      </Context.Consumer>
    );

  }
}
export default HomeCom;