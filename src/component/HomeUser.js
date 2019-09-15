import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
import Nav2 from './Nav2';
import Context from './context';

import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';

import Profile from './Profile';
// import '@lottiefiles/lottie-player';
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
if (ctx.value.chech_userLOgin==="notlogin") {
  return(
<Redirect to="/"></Redirect>
  )
}else if (ctx.value.chech_userLOgin==="login") {
  return (
    <div >

        <Nav2 />
        
      <Profile />
    </div>

  )
}else if (ctx.value.chech_userLOgin==="") {
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
export default POS;