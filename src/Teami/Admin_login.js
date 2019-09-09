import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput} from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';

import { Link} from 'react-router-dom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
 class Admin_login extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
      redirect:false
     
    }}



    login(e) {
   
      axios.post(host + `api/v1/admin/auth/login`, {
        email: this.state.email,
        password: this.state.password
      })
  
        .then(response => {
          console.log(response.data);
      
            // if (response.data.redirect === false) {
         window.location.href = '/Home'
            cookies.set("token_admin",response.data.token,"redirect",response.data.redirect,{
              path:'/',
              expires:new Date(Date.now() + 60480000),
              
            }
         
            );
        //   }

  



        })
        .catch(function (error) {
          console.log(error.message)
        });
    }

    render(){
        return(
     
          <Context.Consumer>{ctx => {
            return (
            <div id='mm'>
          
       
              <div id='m2'>
            
<div id='main'>
<Row style={{marginRight:'0px',paddingBottom:'3%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
  <div  style={{fontSize:'29px',lineHeight:'30px',fontWeight:'400',color:'#000',textAlign:'center'}}    >Welcome Back</div>
 <div style={{lineHeight:'30px',fontWeight:'400',color:'#fff',textAlign:'center'}} id='textmaint'>Don't miss your next opportunity. Sign in to stay updated on your professional world.</div> 
</Row>
    <Row style={{marginRight:'0px'}}id='rowlogins1'>
        <Col xs={12} id='ccsarlogin3'>
<div style={{fontSize:'24px',fontWeight:'400',color:'rgb(43, 45, 117)',paddingTop:'3%'}}> User Login</div>

        <div id='d111serlogin'>
    
 <TextInput id='width32'
  name="text-input-name"
  placeholder="E-mail" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>
</div>


<div id='d111serlogin'>
     
 <TextInput id='width32'
  name="text-input-name" type='password'
  placeholder=" Password " 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>


{/* <div id='forgot'>
  <p id='p3'>Forgot Password?</p>
</div> */}
       
        <div id='log1'>
     <button  id='log'     onClick={(e) => {
                    this.login(e) }}  > 
 
       Log In 
     
        </button>
   
     </div>
    {/* <div id='teamfree'>New User?
    <div className="dropdown3">

     <div  style={{paddingLeft:'10px',color:'#3e91b3'}}> Sign up FREE Now </div>
   
     
     <div className="dropdown3-content">

     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./SignupTeam' style={{textDecoration:'none'}}> User Sign Up  </Link>  </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Companysignup'style={{textDecoration:'none'}} > Company Sign Up  </Link>  </div>


       </div>
       </div>

  </div> */}
        </Col>
    </Row>
</div>

</div>
</div>

         

)
}}

</Context.Consumer>
        );
        
    }
}
export default Admin_login;