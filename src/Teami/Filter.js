import React, { Component } from 'react'
import host from '../component/host';
import axios from 'axios';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
import MainCom from './MainCom';
import { Link} from 'react-router-dom';
const cookies = new Cookies();
class Filter extends Component {
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
      
              <NavCom />

          <div id='filterhome'>
<div id='carduserff'>
<div id='carduserff2' >
   
<div>  <Link to='./Company2'><img src={require('../assets/img/cro.jpg')} style={{height:'100px',width:'100px',borderRadius:'300px'}} /></Link> </div>

<div style={{width:'100%',paddingLeft:'2%'}} >
<div style={{width:'100%'}}>User Name  gggg   sssssssss rrrrrrrrr </div>
<div style={{width:'100%'}}>User Name</div>
</div>
</div>
</div>
         
                          



     
<div id='carduserff'>
<div id='carduserff2' >
   
<div>  <Link to='./Company2'><img src={require('../assets/img/cro.jpg')} style={{height:'100px',width:'100px',borderRadius:'300px'}} /></Link> </div>

<div style={{width:'100%',paddingLeft:'2%'}} >
<div style={{width:'100%'}}>User Name  gggg   sssssssss rrrrrrrrr </div>
<div style={{width:'100%'}}>User Name</div>
</div>
</div>
</div>
        


</div>






          </div>

        )
      }}

      </Context.Consumer>
    );

  }
}
export default Filter;