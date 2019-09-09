import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
// import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
// import Cookies from 'universal-cookie';
import Profile from './Profile';
import '@lottiefiles/lottie-player';
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
   
    <lottie-player
    autoplay
 
    loop
    mode="normal"
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
style={{width:'300px',height:'300px'}}
>
</lottie-player>
</div>
  )
}

      
      }}

      </Context.Consumer>
    );

  }
}
export default POS;