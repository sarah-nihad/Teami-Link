import React, { Component } from 'react';
import Context from './context';
import { Link} from 'react-router-dom';
import { Redirect} from 'react-router-dom';
// import { TextInput, Button} from 'evergreen-ui';
import '../assets/css/teami.css';

class Warning extends Component {
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
        if (ctx.value.chech_userLOgin === "notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_userLOgin==="login") {
          return (
            <div >
        
        <div >
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',
           color:'#f30000',fontSize:'25px',fontWeight:'500',flexDirection:'column'}} >
               
             <div style={{marginBottom:'2%',textAlign:'center',padding:'10px'}}>  Please Complete profile information to show the Advertisements! </div> 
                
            <Link to='./UserProfile' style={{width:'100%',textDecoration:'none',display:'flex',justifyContent:'center'}}> 
             <button className='warningbut'>profile</button></Link>  
         
                  </div> 
        
          </div>
            </div>
        
          )
        }else if (ctx.value.chech_userLOgin==="") {
          return(
            <h1>waiting</h1>
          )
        }

     
      }}

      </Context.Consumer>
    );

  }
}
export default Warning;