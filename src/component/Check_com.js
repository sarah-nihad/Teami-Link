import React, { Component } from 'react';
import Context from './context';
// import { Link} from 'react-router-dom';
// import { Redirect} from 'react-router-dom';
// import { TextInput, Button} from 'evergreen-ui';
import '../assets/css/teami.css';
// import Lottie from 'lottie-react-web'
// import jssson from '../assets/img/jssson.json';
class Check_com extends Component {
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
        
        <div >
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',
           color:'#f30000',fontSize:'25px',fontWeight:'500',flexDirection:'column'}} >
               
             <div style={{marginBottom:'2%',textAlign:'center',padding:'10px'}}>  Please Check Your Email! </div> 
                
            {/* <Link to='./UserProfile' style={{width:'100%',textDecoration:'none',display:'flex',justifyContent:'center'}}> 
             <button className='warningbut'>profile</button></Link>   */}
         
                  </div> 
        
          </div>
            </div>
        
          )
 
     
      }}

      </Context.Consumer>
    );

  }
}
export default Check_com;