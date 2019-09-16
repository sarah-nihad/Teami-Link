import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import host from '../component/host';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import { Redirect} from 'react-router-dom';
import Nav2 from './Nav2';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';


class Company2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data4: [],
      data1: [],
      company_name:'',
      email:'',
      name:'',
      OfficeName:'',
      Position:'',
      numberOfTeam:'',
      ctiy:'',
      File:'',
      wait1:true,
  
   
      spin: true,
      password:'',
      passwordNew:'',
    }
  }
 



  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');


    axios.get(host + `api/v1/Company/get/${myParam}`)
      .then(res1 => {
       
        this.setState({
          data1: res1.data.result
       

        })
        // console.log(res1.data.result)
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }



 




 

  render() {
    return (
      <Context.Consumer>{ctx => {
        if (ctx.value.chech_userLOgin==="notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_userLOgin==="login") {
          return (
            <div >
        <Nav2 />
        <div style={{ backgroundColor: '#F5F5F5' }}>


{/* <Row style={{ marginRight: '0px' }} id='filrow1cooo'>

  <Col xs={12} id='colpost23' >
   <div id='adver'>

<div id='abbcom'>

</div>
<div id='abbimg'>
<img src={host + this.state.data1.File} id='imgcom' alt='img' />
</div>
<div id='abbtext'>
<div  style={{paddingBottom:'2%',display:'flex',justifyContent:'space-between',width:'100%'}}>
<div style={{paddingLeft:'2%',fontSize:'24px',paddingBottom:'2%',width:'100%'}}>{this.state.data1.company_name} </div>


</div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'20px'}}> 
<span style={{color:'#1A5491'}} id='nbhk' >Office Name : </span> <span id='s2drv'  >  {this.state.data1.OfficeName} </span> </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk'  >Company Name : </span> <span id='s2drv' >  {this.state.data1.company_name}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk' > Name : </span> <span id='s2drv' >  {this.state.data1.name}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} id='nbhk' > Position : </span> <span id='s2drv' >  {this.state.data1.Position}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}}  id='nbhk'> Ctiy : </span> <span id='s2drv'>  {this.state.data1.ctiy} </span> </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}}  id='nbhk' > E-mail : </span>  <span id='s2drv' > {this.state.data1.email} </span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}}  id='nbhk' > Phone : </span> <span id='s2drv' >   {this.state.data1.phone} </span> </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}}  id='nbhk'> Number Of Team : </span> <span id='s2drv' >  {this.state.data1.numberOfTeam}</span>  </div>
            </div>

   </div>
  
  </Col>


</Row> */}


<div style={{
                            backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                            , width: '100%'
                          }}>
                            <Row style={{ marginRight: '0px',  }} id='userpro1'  >
            
                              <Col xs={12}>
            
                                <div id='cardprofileuser' >
            
                          
                                    <div id='backprofcoluser'>
                                 
            
            
                                    </div>
            
            
            
                                  <div id='name1user' >
                                  
                                         <img src={host + this.state.data1.File} id='img123user'alt='img' />
                                         </div>
                                         <div id='name1user' >
                                 
                                 {this.state.data1.company_name}
                            
                                  </div>
                                  <div id='name22user' >
                                 
                                  <span style={{color:'#1A5491'}} id='nbhk' >Office Name : </span> <span id='s2drv'  >  {this.state.data1.OfficeName} </span>
                               
                                     </div>
                                     <div id='name22user' >
                                     <span style={{color:'#1A5491'}} id='nbhk' > Name : </span> <span id='s2drv' >  {this.state.data1.name}</span> 
                            
                                  </div>
                                  <div id='name22user' >
                                  <span style={{color:'#1A5491'}} id='nbhk' > Position : </span> <span id='s2drv' >  {this.state.data1.Position}</span> 
                            
                                  </div>

                                 
                                  <div id='name22user' style={{color:'#1A5491'}} >
                                  <i className="fas fa-envelope"style={{fontSize:'15px'}}></i>   <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv' >{this.state.data1.email}</span>  
                                      </div>
                                    <div id='name22user'style={ctx.value.data.phone === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                    <i className="fas fa-phone-volume"></i> <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv' > {this.state.data1.phone} </span> 
                                        </div>
                                <div id='name22user'style={ctx.value.data.ctiy === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                <i className="fas fa-map-marker-alt" style={{fontSize:'14px'}} ></i>  <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv' >  {this.state.data1.ctiy} </span>
                                        </div>
                                         
                                                    <div id='name22user'style={ctx.value.data.numberOfTeam === 0 ?  {display:'none'} : { display:'',fontSize:'12px'}}  >
                                                    number Of Team :     {this.state.data1.numberOfTeam}
                                                   </div>
            
                              
                                </div>
            
                              </Col>
            
                            </Row>
                            </div>











</div>
            </div>
        
          )
        }else if (ctx.value.chech_userLOgin==="") {
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
export default Company2;