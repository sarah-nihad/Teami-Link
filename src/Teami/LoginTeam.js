import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput,toaster} from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';

import { Link} from 'react-router-dom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
 class LoginTeam extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
  
     
    }}

    // login(){
    //   var password=this.state.password;
    //    var phone=this.state.phone; 
    //    let formData = new FormData();
    //    var headers = {
    //      "Content-Type": "application/json",
    //      token: cookies.get("token")
    //    };
    //    formData.append("phone", phone);
    //    formData.append("password", password);
  
    //    axios({
    //      url:host+ `api/v1/user/login/`,
    //      method: "POST",
    //      data: formData,
    //        headers: headers
    //    })
    //      .then(response => {
    //       toaster.success('تم تسجيل الدخول بنجاح');
    //      })
    //      .catch(function (error) {
    //        if (error.response) {
    //          toaster.danger('قم بأدخال رقم الموبايل و الباسورد');
    //        }
    //      });

    //     }

    login(e) {
      // e.preventDefault()
      axios.post(host + `api/v1/auth/login`, {
        email: this.state.email,
        password: this.state.password
      })
  
        .then(response => {
          console.log(response.data);
          
          // if (response === 200) {
         window.location.href = '/HomeUser'
            cookies.set("token",response.data.token,{
              path:'/',
              expires:new Date(Date.now() + 60480000)
            }
            );
          // }
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
{/* <div style={{fontSize:'14px',fontWeight:'400',color:'#333333',paddingTop:'1%',paddingBottom:'2%'}} >Find jobs matching your salary</div> */}
        <div id='d111serlogin'>
      {/* <p id='p2'> رقم الموبايل : </p> */}
 <TextInput id='width32'
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
  <p id='p3'>Forgot Password?</p>
</div>
       
        <div id='log1'>
     <button  id='log'     onClick={(e) => {
                    this.login(e) }}  > 
     {/* <Link to='./HomeUser'> */}
       Log In 
       {/* </Link>  */}
        </button>
   
     </div>
    <div id='teamfree'>New User?
    <div className="dropdown3">
     {/* <Link to='./SignupTeam' style={{paddingLeft:'10px',color:'#3e91b3'}}>  */}
     <div  style={{paddingLeft:'10px',color:'#3e91b3'}}> Sign up FREE Now </div>
     {/* </Link> */}
     
     <div className="dropdown3-content">

     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./SignupTeam' style={{textDecoration:'none'}}> User Sign Up  </Link>  </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Companysignup'style={{textDecoration:'none'}} > Company Sign Up  </Link>  </div>


       </div>
       </div>

  </div>
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
export default LoginTeam;