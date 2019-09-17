import React, { Component } from 'react'
import host from '../component/host';
import axios from 'axios';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import { Redirect} from 'react-router-dom';
import Context from '../component/context';
import { toaster} from 'evergreen-ui';
import Cookies from 'universal-cookie';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
// import { Link} from 'react-router-dom';
const cookies = new Cookies();
class Advertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      password: '',
      phone: '',
      description: '',
      _id:''

    }
  }

  deletetra(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
  axios({
      url: host + `api/v1/Advertising/delete/${id}`,
      method: "DELETE",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success(' Advertising has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
      });
  }


  render() {
    return (

      <Context.Consumer>{ctx => {


        if (ctx.value.chech_compLOgin ==="notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_compLOgin ==="login") {
          return (
            <div >
             <div >
      
      <NavCom />

      <div id='colpost' >
         
         {ctx.value.data6.map(((item, i) =>
           <div id='mainpostadvertise' key={i}  >

<div>{item.title} </div>
<div style={{width:'100%',padding:'10px'}}>  {item.body} </div>
<div style={{width:'100%',paddingLeft:'8px'}}> City :   {item.city} </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> gender :  {item.gender} </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Education :  {item.education}   </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Car :  {`${item.car}`}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Collage :  {item.collage}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Position : {item.position}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Time of Work : {item.timeofWork}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Experience :  {item.experience}  </div> 
<div style={{width:'100%',display:'flex',justifyContent:'center',paddingBottom:'2%',paddingTop:'2%'}}  >  

<div style={{  width: '100%',display:'flex',justifyContent:'flex-end',paddingRight:'30px' }} 
                                     onClick={(e) => { this.deletetra(item._id) }}   >
                                    <i className="fas fa-trash-alt"  style={{color:'#9A281C'}}  id='trash'  ></i></div>



</div>
</div>
         ))}

           {/* </div> */}
        
         </div>






  </div>
      

            </div>
        
          )
        }else if (ctx.value.chech_compLOgin ==="") {
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
export default Advertising;