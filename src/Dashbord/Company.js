import React, { Component } from 'react'
// import { Redirect} from 'react-router-dom';
import axios from 'axios';
import host from '../component/host';
// import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';


// import Cookies from 'universal-cookie';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      email: '',
      password: '',
      phone: '',
      description: '',
      File:''

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
    // return (

    //   <Context.Consumer>{ctx => {

  return (
    <div >
  <div style={{ backgroundColor: '#F5F5F5',zIndex:'-1' }}>


<Row style={{ marginRight: '0px' }} id='filrow1'>

  <Col xs={12} id='colpost23' >
   <div id='adver'>

<div id='abbcom'>

</div>
<div id='abbimg'>
{/* <img src={require('../assets/img/cro.jpg')} id='imgcom' /> */}
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


</Row>
</div>
    
    </div>

//   )
// }


      
    //   }}

    //   </Context.Consumer>
    );

  }
}
export default Company;