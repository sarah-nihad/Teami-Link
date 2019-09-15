import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput} from 'evergreen-ui';
import Context from './context';
import '../assets/css/Ahmed.css';
 class Ahmed extends Component{
    constructor(props){
        super(props);
    this.state={
    
     
    }}





    render(){
        return(
     
          <Context.Consumer>{ctx => {
            return (
            <div style={{height:'100vh',backgroundColor:'#8B6FE6'}}>
          
       
              <div id='mahmed'>
            


    <Row style={{marginRight:'0px',width:'80%'}}  id='ahmed_row' >

<Col md={6}>

<img src={require('../assets/img/link.png')} style={{height:'300px'}} />

</Col>






        <Col xs={12} md={6}  >
<div style={{fontSize:'24px',fontWeight:'400',color:'rgb(43, 45, 117)',paddingTop:'3%'}}> Login Your Account</div>

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
   <div id='teamfree'>
    <div className="dropdown3">

     <div  style={{paddingLeft:'10px',color:'#3e91b3'}}></div>
   
     
     <div className="dropdown3-content">

     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
    
     </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
   
       </div>


       </div>
       </div>

  </div> 
        </Col>
    </Row>
</div>

</div>


         

)
}}

</Context.Consumer>
        );
        
    }
}
export default Ahmed;