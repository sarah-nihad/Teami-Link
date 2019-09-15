import React, { Component } from 'react';
import Context from './context';
// import { Link} from 'react-router-dom';
import { Redirect} from 'react-router-dom';
// import { TextInput, Button} from 'evergreen-ui';
import '../assets/css/teami.css';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
class Activation extends Component {
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
        if (ctx.value.chech_compLOgin === "notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_compLOgin==="login") {
          return (
            <div >
        
        <div >
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',
           color:'rgb(220, 11, 11)',fontSize:'25px',fontWeight:'500',flexDirection:'column'}} >
               
             <div style={{marginBottom:'2%',textAlign:'center',padding:'10px'}}>  Please Contact With Us To Activate Your Account ! </div> 
                
            <div style={{width:'100%',textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',fontSize:'18px'}}> 
         <div>  <i className="fas fa-phone-volume" style={{color:'#2222ab'}} ></i> <span style={{paddingLeft:'10px',color:'#2222ab'}}  >   0770123456</span> </div> 
         <div>  <i className="fas fa-envelope" style={{color:'#2222ab'}} ></i> <span style={{paddingLeft:'10px',color:'#2222ab'}}  >   mustafa_aljaf@hotmail.com</span> </div> 
        
         </div>
                  </div> 
        
          </div>
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
export default Activation;