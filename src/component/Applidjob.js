import React, { Component } from 'react'
import axios from 'axios';
// import Foot1 from './Foot1';
import { Redirect} from 'react-router-dom';
import Nav2 from './Nav2';
import Context from '../component/context';
import Cookies from 'universal-cookie';
import host from './host';
import '../assets/css/teami.css';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
// import '@lottiefiles/lottie-player';
const cookies = new Cookies();
class Applidjob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:'' 

    }
  }

  comp(item){
  axios.get(host + `api/v1/Company/get/5d67e0fe0ce20a66f888bd40`, { headers: { token: cookies.get("token") } })
  .then(res1 => {
    // console.log(res1.data)
  
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
           <div >
       
       <Nav2 />
    
  
       <div id='filterhome'>
       {ctx.value.data8.map(((item, i) =>
<div id='carduserff3e3e' key={i}  >
<div id='carduserff2'  onClick={() => {
               window.location.href = `/profile1?id=${item.company_id._id}`;

             }}  style={{cursor:'pointer'}}   >

<div   >  
  <img src={host + item.company_id.File} style={{height:'100px',width:'100px',borderRadius:'300px'}} alt='img'  />
  </div>
<div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'spase-between'}} id='job2w3' >
<div style={{width:'100%',paddingLeft:'2%'}}  >
<div style={{width:'100%'}}>Name :  {item.company_id.name} </div>
<div style={{width:'100%'}}> Position :  {item.company_id.Position}</div>
</div>


<div style={{width:'100%',paddingLeft:'2%'}} >
<div style={{width:'100%'}}> Title :  {item.ads_id.title} </div>
<div style={{width:'100%'}}>City : {item.ads_id.city}</div>
</div>


<div style={{width:'100%',paddingLeft:'2%'}} >
<div style={{width:'100%'}}> status  :   <span style={{paddingLeft:'5px'}}> {item.status}</span>     </div>

</div>


</div>

</div>
</div>
  
                   

        ))} 



 


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
export default Applidjob;