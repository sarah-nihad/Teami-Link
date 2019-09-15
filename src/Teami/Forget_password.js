import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput,toaster} from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';

// import { Link} from 'react-router-dom';
import Context from '../component/context';
// import Cookies from 'universal-cookie';
//  const cookies =new Cookies();
 class Forget_password extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
      redirect:false
     
    }}



    aplay() {

        let formData = new FormData();
        var headers = {
          "Content-Type": "application/json",
        //   token: cookies.get("Usertoken")
        };
    
        
        formData.append("email",this.state.email);
      
    
       
    
        axios({
          url: host + `api/v1/auth/email`,
          method: "POST",
          data: formData,
          headers: headers,
    
        })
          .then(response => {
            if (response.status === 200) {
              toaster.success(' Done ');
            
            }
    
          })
          .catch(function (error) {
            console.log(error)
        
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
   <img src={require('../assets/img/link.png')}  style={{height:'120px'}} alt='img' />
   </div> 
</Row>
    <Row style={{marginRight:'0px'}}id='rowlogins1'>
        <Col xs={12} id='ccsarlogin3'>
<div style={{fontSize:'24px',fontWeight:'400',color:'rgb(43, 45, 117)',paddingTop:'3%'}}>Forget Password</div>

        <div id='d111serlogin'>
    
 <TextInput id='width32'
  name="text-input-name"
  placeholder="E-mail" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>
</div>


{/* <div id='d111serlogin'> */}
     
 {/* <TextInput id='width32'
  name="text-input-name" type='password'
  placeholder=" Password " 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/> */}
{/* </div> */}


       
        <div id='log1'>
     <button  id='log'     onClick={(e) => {
                    this.aplay(e) }}  > 
 
     Send
     
        </button>
   
     </div>
   <div id='teamfree'>
    <div className="dropdown3">

     <div  style={{paddingLeft:'10px',color:'#3e91b3'}}></div>
   
     
     <div className="dropdown3-content">

     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     {/* <Link to='./SignupTeam' style={{textDecoration:'none'}}>  </Link>  */}
     </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      {/* <Link to='./Companysignup'style={{textDecoration:'none'}} >   </Link>  */}
       </div>


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
export default Forget_password;