import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput,toaster} from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';

import { Link} from 'react-router-dom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
 class ComLogin extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
      license:true
     
    }}

    // login(e) {
    //   e.preventDefault()
    //   axios.post(host + `api/v1/Company/login`, {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
  
    //     .then(response => {
  
    //         window.location.href = '/HomeCom'
    //         cookies.set("token",response.data.token,{
    //           path:'/',
    //           expires:new Date(Date.now() + 60480000)
    //         }
    //         );
    //     })
    //     .catch(function (error) {
    //       console.log(error.message)
    //     });
    // }

    
    login(e) {
      // e.preventDefault()
      axios.post(host + `api/v1/Company/login`, {
        email: this.state.email,
        password: this.state.password
      })
  
        .then(response => {
          console.log(response.data);
      
            if (response.data.license === true) {
         window.location.href = '/HomeCom'
            cookies.set("token",response.data.token,"license",response.data.license,{
              path:'/',
              expires:new Date(Date.now() + 60480000),
              
            }
         
            );
          }

         else if (response.data.license === false) {
            window.location.href = '/Activation'
               cookies.set("token",response.data.token,"license",response.data.license,{
                 path:'/',
                 expires:new Date(Date.now() + 60480000),
                 
               }
            
               );
             }
        })
        .catch(function (error) {
          console.log(error.response.data.msg);
          if (error.response.data.msg==="Please Check Your Email to complete your registration") {
            window.location.href = '/Check_com'
          }else{
            toaster.danger(error.response.data.msg)
          }
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
  <div  style={{fontSize:'29px',lineHeight:'30px',fontWeight:'400',color:'#000',textAlign:'center'}}    ></div>
 <div style={{lineHeight:'30px',fontWeight:'400',color:'#fff',textAlign:'center'}} id='textmaint'>
   <img src={require('../assets/img/link.png')}  style={{height:'100px'}} alt='img'  />
   </div> 
</Row>
<Row style={{marginRight:'0px',paddingBottom:'3%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >

 <div style={{lineHeight:'30px',fontWeight:'400',color:'#fff',textAlign:'center',width:'100%'}} id='textmaint'> Log in to stay updated on your professional world.</div> 
</Row>
    <Row style={{marginRight:'0px'}}id='rowlogins1'>
        <Col xs={12} id='ccsarlogin3'>
<div style={{fontSize:'24px',fontWeight:'400',color:'rgb(43, 45, 117)',paddingTop:'3%'}}> Company Login</div>
{/* <div style={{fontSize:'14px',fontWeight:'400',color:'#333333',paddingTop:'1%',paddingBottom:'2%'}} >Find jobs matching your salary</div> */}
        <div id='d111serlogin'>
      {/* <p id='p2'> رقم الموبايل : </p> */}
 <TextInput id='width32' type='email'
  name="text-input-name"
  placeholder="E-mail" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>
</div>


<div id='d111serlogin'>
      {/* <p id='p2'> الباسورد  : </p> */}
 <TextInput id='width32'
  name="text-input-name" type='password'
  placeholder=" Password " 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>


<div id='forgot'>
  <p id='p3'> <Link to='/Forget_pass'>   Forgot Password? </Link>   </p>
</div>
       
        <div id='log1'>
     <button  id='log'   onClick={(e) => {
                    this.login(e) }}  >
        {/* <Link to='./HomeCom'> */}
          Log In
         {/* </Link>  */}
          </button>
   
     </div>
    <div id='teamfree'>New User?
    {/* <div className="dropdown3"> */}
     {/* <Link to='./SignupTeam' style={{paddingLeft:'10px',color:'#3e91b3'}}>  */}
     <Link  to='./Companysignup' style={{paddingLeft:'10px',color:'#3e91b3'}}> Sign up FREE Now </Link>  </div>
     {/* </Link> */}
     
     {/* <div className="dropdown3-content">

     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./SignupTeam' style={{textDecoration:'none'}}> User Sign Up  </Link>  </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Companysignup'style={{textDecoration:'none'}} > Company Sign Up  </Link>  </div>


       </div> */}
       {/* </div>

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
export default ComLogin;