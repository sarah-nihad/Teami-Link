import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
// import {TextInput} from 'evergreen-ui';
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
            <div style={{height:'100vh'}}>
          
       
              <div id='mahmed'>
            


    <Row style={{marginRight:'0px',width:'80%'}}  id='ahmed_row' >

<Col md={6} id='ahm_col2' >

<img src={require('../assets/img/alwan.jpg')} style={{height:'300px'}} />

</Col>






        <Col xs={12} md={6} id='ahm_col1' >
        <div id='card_a21'  >
<div  id='field1_ah' style={{fontSize:'24px',fontWeight:'400',color:'#005D7F',paddingTop:'3%'}}> Login Your Account</div>



        <div id='field1_ah'>
    
 <input id='width_ah'
  name="text-input-name"
  placeholder="E-mail" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>
</div>


<div id='field1_ah'>
     
 <input id='width_ah'
  name="text-input-name" type='password'
  placeholder=" Password " 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>



       

     
        <div id='log1_ah'>
     <button  id='log_ah'     onClick={(e) => {
                    this.login(e) }}  > 
 
       Log In 
     
        </button>
   
     </div>  </div>
  
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