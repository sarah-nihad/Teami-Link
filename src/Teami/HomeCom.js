import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import Context from '../component/context';
// import Cookies from 'universal-cookie';
import MainCom from './MainCom';


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


        if (ctx.value.chech_compLOgin==="notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_compLOgin==="login") {
          return (
            <div >
        
        <NavCom />
              <MainCom />
            </div>
        
          )
        }else if (ctx.value.chech_compLOgin==="") {
          return(
            <h1>waiting</h1>
          )
        }








    
      }}

      </Context.Consumer>
    );

  }
}
export default HomeCom;