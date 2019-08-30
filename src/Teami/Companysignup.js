import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { TextInput, toaster } from 'evergreen-ui';
import host from '../component/host';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Context from '../component/context';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Companysignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      password: '',
      name: '',
      company_name: '',
      phone: '',
      OfficeName: '',
      Position: '',
      ctiy: ''

    }
  }


  login(e) {
    e.preventDefault()
    axios.post(host + `api/v1/Company/register`, {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    })

      .then(response => {
        // if (response === 200) {
        window.location.href = '/HomeCom'
        cookies.set("token", response.data.token, {
          path: '/',
          expires: new Date(Date.now() + 60480000)
        }
        );
        // }
      })
      .catch(function (error) {
        console.log(error.message)
      });
  }


  render() {
    return (

      <Context.Consumer>{ctx => {
        return (
          <div style={{ backgroundColor: ' #1A5491' }} >


            <div id='m2'>

              <div id='main'>
                <Row  id='rowcom' style={{ marginRight: '0px', paddingBottom: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                  {/* <img src={require('../assets/img/link.png')} id='img22' alt='offer' /> */}
                  <div style={{ lineHeight: '30px', fontWeight: '400', color: '#fff', textAlign: 'center' }} id='textmaint1' > Make the most of your professional life</div>
                     <div style={{fontSize:'24px',fontWeight:'400',color:'#fff',paddingTop:'3%'}}>Company Sign Up</div>
                </Row>
                <Row style={{ marginRight: '0px' }} id='rowlogins1c' style={{ width: '90%' }}>

                  <Col xs={12} md={6}>
                 
                    <div id='d111serlogindr' style={{ paddingTop: '2%' }}>

                      <TextInput id='width32'
                        name="text-input-name"
                        placeholder="Name"
                        required value={this.state.name} onChange={(e) => {
                          this.setState({ name: e.target.value })
                        }}
                      />
                    </div>

                    <div id='d111serlogindr'>

                      <TextInput id='width32'
                        name="text-input-name"
                        placeholder="E-mail"
                        required value={this.state.email} onChange={(e) => {
                          this.setState({ email: e.target.value })
                        }}
                      />
                    </div>


                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" type='password' placeholder=" Password (6 or more characters)"
                        required value={this.state.password} onChange={(e) => {
                          this.setState({ password: e.target.value })
                        }}
                      />
                    </div>


                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" placeholder=" company_name "
                        required value={this.state.company_name} onChange={(e) => {
                          this.setState({ company_name: e.target.value })
                        }}
                      />
                    </div>

                  </Col>
                  <Col xs={12} md={6} >
                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" placeholder="phone"
                        required value={this.state.phone} onChange={(e) => {
                          this.setState({ phone: e.target.value })
                        }}
                      />
                    </div>
                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" placeholder="OfficeName"
                        required value={this.state.OfficeName} onChange={(e) => {
                          this.setState({ OfficeName: e.target.value })
                        }}
                      />
                    </div>
                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" placeholder="Position"
                        required value={this.state.Position} onChange={(e) => {
                          this.setState({ Position: e.target.value })
                        }}
                      />
                    </div>
                    <div id='d111serlogin'>

                      <TextInput id='width32'
                        name="text-input-name" placeholder="ctiy"
                        required value={this.state.ctiy} onChange={(e) => {
                          this.setState({ ctiy: e.target.value })
                        }}
                      />
                    </div>


                  </Col>
                  <Row style={{ marginRight: 0, width: '90%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                  <div id='log1' style={{width:'50%'}}>

                    <button id='log' onClick={(e) => {
                      this.login(e)
                    }}   >
                      {/* <Link to='./HomeCom'> */}
                      Sign Up
          {/* </Link>    */}
                    </button>

                  </div>
                  <div id='teamfree'>Already a member? <Link to='./LoginTeam' style={{ paddingLeft: '10px', color: '#3e91b3' }}> Log in Now </Link>  </div>
                </Row>
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
export default Companysignup;