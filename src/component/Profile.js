import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import host from './host';
import {toaster} from 'evergreen-ui';
// import Component from '@reactions/component';
import Context from './context';
import { Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: [],
      name:'',
      Collage:'',
      File:'',
      redirect: 'false',
      city:'',
      _id:'',
      company_id:''
   
    }
  }

  aplay(item) {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("Usertoken")
    };

    
    formData.append("company_id",item.company_id._id);
    formData.append("ads_id",item._id);

   

    axios({
      url: host + `api/v1/user/job/`,
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
        // if (error.response) {
        //   console.log(error.response.data);
        // }
      });

  }




 
  render() {
    return (
      <Context.Consumer>{ctx => {

        return (
          <div>
         
            <div style={{ backgroundColor: '#F5F5F5' }}>


              <Row style={{ marginRight: '0px' }} id='filrow12'>
                <Col lg={4} id='colprofiletem' >

                  <div id='cardprofile' >

                    <div className="container">
                      <div id='backprofcol'>
                      <Link to='./UserProfile' style={{position:'relative',bottom:'-40%'}}> 
                      {/* <img src={require('../assets/img/d.jpg')} id='img123' alt='offer' /> */}
                      <img src={host + ctx.value.data.File} id='img123'alt='img' />
                      </Link> 

                  
                      </div>


                    </div>

                    <div id='name1' >
                     {/* sarah nihad */}
                     {ctx.value.data.name}
                    </div>
                   
                    <div  id='name22' style={ctx.value.data.Collage === 'NON' ?  {display:'none'} : { display:''}}>
              {ctx.value.data.Collage}
                    </div>

                  </div>

                </Col> 
 {/* {this.state.redirect === `${false}` ?( */}


                <Col md={8} lg={8} id='colpost' >
                 
                {ctx.value.data3.map(((item, i) =>
                  <div id='mainpost' key={i}  >
                  {/* <div id='filterhome'> */}
<div id='carduserff'>
<div id='carduserff2' >
   
<div>  
  
  <img src={host +item.company_id.File} style={{height:'100px',width:'100px',borderRadius:'300px'}} alt='img'  />
   </div>
<div id='advertisemain' >
<div id='advertisemain1'   >
<div style={{width:'100%'}}>{item.company_id.OfficeName}</div>
<div style={{width:'100%'}}>{item.company_id.email}</div>
</div>
<div id='advertisemain1'  >
<div style={{width:'100%'}}>{item.company_id.Position}</div>
<div style={{width:'100%'}}>{item.company_id.phone}</div>
</div>
</div>

</div>  </div>
<div>{item.title} </div>
 <div style={{width:'100%',paddingLeft:'8px'}}>  {item.body} </div>
 <div style={{width:'100%',paddingLeft:'8px'}}> City :   {item.city} </div> 
 <div style={{width:'100%',paddingLeft:'8px'}}> gender :  {item.gender} </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Education :  {item.education}   </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Car :  {`${item.car}`}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Collage :  {item.collage}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Position : {item.position}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Time of Work : {item.timeofWork}  </div> 
<div style={{width:'100%',paddingLeft:'8px'}}> Experience :  {item.experience}  </div> 
<div style={{width:'100%',display:'flex',justifyContent:'center',paddingBottom:'2%',paddingTop:'2%'}}  >   

  <div id='aplay_user'  onClick={(e) => {
                    this.aplay(item) }}    >  Aplay  </div>    </div>
</div>
                ))}

                  {/* </div> */}
               
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
export default Profile;