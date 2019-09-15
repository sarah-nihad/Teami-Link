import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import Context from '../component/context';
// import Cookies from 'universal-cookie';
import MainCom from './MainCom';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';

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
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}  >
   
   <Lottie
                 options={{
                   animationData: jssson,
                 }}
                width={300}
                height={300}
               />
</div>
          )
        }








    
      }}

      </Context.Consumer>
    );

  }
}
export default HomeCom;