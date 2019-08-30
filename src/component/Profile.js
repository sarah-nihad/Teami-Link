import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import host from './host';
import {SelectMenu,Button} from 'evergreen-ui';
import Component from '@reactions/component';
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
    }
  }


  componentDidMount() {
    axios.get(host + 'api/v1/auth/profile', { headers: { token: cookies.get("token") } })
      .then(res => {
      
        this.setState({
          data: res.data.data,
        data1:res.data.data.experience,
  

        })
        console.log(res.data.data);
  
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }



 
  render() {
    return (
      <Context.Consumer>{ctx => {

        return (
          <div>
            {/* {!this.state.spin?( */}
            <div style={{ backgroundColor: '#F5F5F5' }}>


              <Row style={{ marginRight: '0px' }} id='filrow12'>
                <Col lg={4} id='colprofiletem' >

                  <div id='cardprofile' >

                    <div className="container">
                      <div id='backprofcol'>
                      <Link to='./UserProfile' style={{position:'relative',bottom:'-40%'}}> 
                      {/* <img src={require('../assets/img/d.jpg')} id='img123' alt='offer' /> */}
                      <img src={host + this.state.data.File} id='img123'alt='img' />
                      </Link> 

                  
                      </div>


                    </div>

                    <div id='name1' >
                     {/* sarah nihad */}
                     {this.state.data.name}
                    </div>
                    <div id='name22' >
              {this.state.data.Collage}
                    </div>

                  </div>

                </Col>
                <Col md={8} lg={8} id='colpost' >
                 
                 
                  <div id='mainpost'>
  <p style={{textAlign:'center'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss</p>
  <p style={{textAlign:'center'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss</p>
  <p style={{textAlign:'center'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss</p>
  <p style={{textAlign:'center'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss</p>
 
  <img src={require('../assets/img/poerd by.png')} id='postimg2' />

                  </div>
                  <div id='mainpost'>
  <p style={{textAlign:'center',fontSize:'15px',fontWeight:'400',padding:'5px'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss hhhhhh
  jjjjjj hhhhhhhh jjjjj hhhhhhhhhhhh
  jjjjjjjj nnnnnn jjjjjjjj      hhhhhhhhh jjjjjjj    lllllll</p>

  <img src={require('../assets/img/poerd by.png')} id='postimg2' />

                  </div>
                  <div id='mainpost'>
  <p style={{textAlign:'center'}}> ssss sssssssssss sssssssss ssssssssss ssssssssss</p>

  <img src={require('../assets/img/poerd by.png')} id='postimg2' />

                  </div>

                </Col>
              

              </Row>

            </div>
            {/* // ):(
            //   <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            //   <img src={require('../assets/img/_food.gif')}   alt='gif'/>
            //   </div> 
            // )} */}
          </div>

        )
      }}

      </Context.Consumer>
    );
  }
}
export default Profile;