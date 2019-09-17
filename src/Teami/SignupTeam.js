import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput,toaster} from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';
import { Link} from 'react-router-dom';

import Context from '../component/context';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
 class SignupTeam extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
      name:''
     
    }}

    login(e) {
      e.preventDefault()
      axios.post(host + `api/v1/auth/register`, {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
  
    //     .then(response => {
       
    //         window.location.href = '/HomeUser'
    //         cookies.set("Usertoken",response.data.token,{
    //           path:'/',
    //           expires:new Date(Date.now() + 60480000)
    //         }
    //         );
      
    //     })
    //     .catch(function (error) {
    //       console.log(error.message)
    //     });
    // }
    .then(response => {
      console.log(response.data);
  
        // if (response.data.redirect === false) {
     window.location.href = '/Check_com'
        cookies.set("Usertoken",response.data.token,"redirect",response.data.redirect,{
          path:'/',
          expires:new Date(Date.now() + 60480000),
          
        }
     
        );
      // }

    //  else if (response.data.redirect === true) {
    //     window.location.href = '/Warning'
    //        cookies.set("Usertoken",response.data.token,"redirect",response.data.redirect,{
    //          path:'/',
    //          expires:new Date(Date.now() + 60480000),
             
    //        }
        
    //        );
    //      }



    })
    .catch(function (error) {
      console.log(error.message)


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
            <div id='mm'  >     
              <div id='m2'>
            
<div id='main'>

<Row style={{marginRight:'0px',paddingBottom:'3%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'1%'}} >
  <div  style={{fontSize:'29px',lineHeight:'30px',fontWeight:'400',color:'#000',textAlign:'center'}}    ></div>
 <div style={{lineHeight:'30px',fontWeight:'400',color:'#fff',textAlign:'center'}} id='textmaint'>
   <img src={require('../assets/img/link.png')}  style={{height:'90px'}} alt='img'  />
   </div> 
</Row>


<Row style={{marginRight:'0px',paddingBottom:'3%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
 <div style={{lineHeight:'30px',fontWeight:'400',color:'#fff',textAlign:'center',width:'100%'}} id='textmaint' > Together To The Professionality</div> 
</Row>
    <Row style={{marginRight:'0px'}}id='rowlogins1'>




        <Col xs={12} id='ccsarlogin3'>
        <div style={{fontSize:'24px',fontWeight:'400',color:'rgb(43, 45, 117)',paddingTop:'3%'}}>User Sign Up</div>
        <div id='d111serlogindr' style={{paddingTop:'2%'}}>
     
 <TextInput id='width32'
  name="text-input-name"
  placeholder="Name" 
  required value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}
/>
</div>

        <div id='d111serlogindr'>
     
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
  name="text-input-name" type='password'  placeholder=" Password (6 or more characters)" 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>



       
        <div id='log1'>
     <button    id='log'    onClick={(e) => {
                    this.login(e) }}  >
       {/* <Link to='./HomeUser'> */}
        Sign Up
         {/* </Link>  */}
        </button>
   
     </div>
    <div id='teamfree'>Already a member? <Link to='./LoginTeam' style={{paddingLeft:'10px',color:'#3e91b3'}}> Log in Now </Link>  </div>
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
export default SignupTeam;