import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
// import Select from 'react-select';
import host from './host';
import { Redirect } from 'react-router-dom';
import NavCom from '../Teami/NavCom';
import { toaster } from 'evergreen-ui';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
// import Component from '@reactions/component';
import Context from './context';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '@lottiefiles/lottie-player';

// import moment from 'moment';
import Cookies from 'universal-cookie';

const cookies = new Cookies();




class User extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: [],
      data2: [],
      spin: true,
      name: '',
      email: '',
      phone: '',
      ctiy: '',
      BirthDate: '',
      University: '',
      Collage: '',

      Position: '',
      passwordNew: '',
      password: '',
      File: '',
      experience: '',
      CompanyName: '',
      OfficeName: '',
      SpecialityofDoctor: '',
      PhamacuiticalCategory: '',
      TimeofWork: '',
      Startingwork: '',
      EndWork: '',
      place: '',
      subject: '',
      date: '',
      experience_months: '',
      Notes: '',
      Education: '',
      DateofGarduation: '',
      cv: '',
      photo: '',
      Cityinput: '',
      Positioninput: '',
      categoryinput: '',
      specialityinput: '',
      selectedNames: '',
      startDate2: new Date(),
      startDate1: new Date(),
      startDate3: new Date(),
      startDate: new Date(),
      startDate5: new Date(),
      startDate6: new Date(),
      wait: true,
      wait1: true,
      wait2: true,
      categoryinput1: '',
      Collage1: '',
      Positioninput1: '',
      gender: '',
      car: ''

    }


  }



  put(item) {


    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("status", "Rejected");



    axios({
      url: host + `api/v1/Company/job/${item._id}`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('status has been rejected');

      })
      .catch(function (error) {

        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }


  accept(item) {


    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("status", "Accepted ");



    axios({
      url: host + `api/v1/Company/job/${item._id}`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('status has been Accepted');

      })
      .catch(function (error) {

        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }






  render() {
    return (
      <Context.Consumer>{ctx => {




        if (ctx.value.chech_compLOgin === "notlogin") {
          return (
            <Redirect to="/"></Redirect>
          )
        } else if (ctx.value.chech_compLOgin === "login") {
          return (
            <div >

              <div>

                <div id="apfot">
                  <NavCom />

                  <div style={{
                    backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    , width: '100%'
                  }}>





                    <Tabs defaultActiveKey="Watting" style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}  >
                      <Tab eventKey="Watting" title="Watting">


                        {ctx.value.data11.map(((item, i) =>
                          <Row  key={i}  style={{ marginRight: '0px', width: '100%', boxShadow: 'rgba(140, 140, 255, 0.9) 0px 0px 3px 1px', minHeight: '130px', marginBottom: '2%' }}
                            id='user_row'  >

                            <Col xs={12} style={{ cursor: 'pointer' }} onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;
                            }} lg={2} id='colusercc'  >
                              <div id='imguse1'  >   <img src={host + item.user_id.File} style={{ width: '100px', height: '100px', borderRadius: '300px' }} alt='img' /></div>
                            </Col>



                            <Col style={{ cursor: 'pointer' }} onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;
                            }} xs={12} lg={3} id='colusercc' >


                              <div key={i} style={{ width: '100%' }}   >


                                <div id='name22user2'  >

                                  Name :       {item.user_id.name}

                                </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-envelope" style={{ fontSize: '15px' }}></i>   <span style={{ paddingLeft: '10px', width: '100%' }}  >{item.user_id.email}</span>
                                </div>

                              </div>


                            </Col>

                            <Col style={{ cursor: 'pointer' }} onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;
                            }} id='colusercc' xs={12} lg={2}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-phone-volume"></i> <span style={{ paddingLeft: '10px', width: '100%' }}  > {item.user_id.phone} </span>
                                </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-map-marker-alt" style={{ fontSize: '14px' }} ></i>  <span style={{ paddingLeft: '10px', width: '100%' }}  >  {item.user_id.ctiy} </span>
                                </div>   </div>
                            </Col>

                            <Col style={{ cursor: 'pointer' }} onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;
                            }} id='colusercc' xs={12} lg={3}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <span style={{ width: '100%' }}  >  Title  :   {item.ads_id.title} </span>
                                </div>  </div>
                            </Col>


                            <Col id='colusercc' xs={12} lg={1}  >
                              <div id='rej' onClick={(e) => { this.accept(item) }}   > <i className="fas fa-check"></i> Accept  </div>

                            </Col>


                            <Col id='colusercc' xs={12} lg={1}  >
                              <div id='rej' onClick={(e) => { this.put(item) }}   > <i className="fas fa-times"></i> Reject </div>
                            </Col>

                          </Row>
                        ))}




                      </Tab>
                      <Tab eventKey="Acceptt" title=" Accepted">
                        {ctx.value.data10.map(((item, i) =>
                          <Row key={i}  style={{ marginRight: '0px', width: '100%', boxShadow: 'rgba(140, 140, 255, 0.9) 0px 0px 3px 1px', minHeight: '130px', marginBottom: '2%', cursor: 'pointer' }}
                            id='user_row' onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;

                            }}  >

                            <Col xs={12} lg={2} id='colusercc'  >
                              <div id='imguse1'  >   <img src={host + item.user_id.File} style={{ width: '100px', height: '100px', borderRadius: '300px' }} alt='img' /></div>
                            </Col>



                            <Col xs={12} lg={3} id='colusercc' >


                              <div key={i} style={{ width: '100%' }}   >


                                <div id='name22user2'  >

                                  Name :       {item.user_id.name}

                                </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-envelope" style={{ fontSize: '15px' }}></i>   <span style={{ paddingLeft: '10px', width: '100%' }}  >{item.user_id.email}</span>
                                </div>





                              </div>


                            </Col>

                            <Col id='colusercc' xs={12} lg={3}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-phone-volume"></i> <span style={{ paddingLeft: '10px', width: '100%' }}  > {item.user_id.phone} </span>
                                </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-map-marker-alt" style={{ fontSize: '14px' }} ></i>  <span style={{ paddingLeft: '10px', width: '100%' }}  >  {item.user_id.ctiy} </span>
                                </div>   </div>
                            </Col>

                            <Col id='colusercc' xs={12} lg={4}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <span style={{ width: '100%' }}  >  Title  :   {item.ads_id.title} </span>
                                </div>  </div>
                            </Col>

                          </Row>
                        ))}
                      </Tab>
                      <Tab eventKey="reject" title="Rejected" >

                        {ctx.value.data9.map(((item, i) =>
                          <Row  key={i}  style={{ marginRight: '0px', width: '100%', boxShadow: 'rgba(140, 140, 255, 0.9) 0px 0px 3px 1px', minHeight: '130px', marginBottom: '2%', cursor: 'pointer' }}
                            id='user_row' onClick={() => {
                              window.location.href = `/Accept?id=${item.user_id._id}`;

                            }}  >

                            <Col xs={12} lg={2} id='colusercc'  >
                              <div id='imguse1'  >   <img src={host + item.user_id.File} style={{ width: '100px', height: '100px', borderRadius: '300px' }} alt='img' /></div>
                            </Col>



                            <Col xs={12} lg={3} id='colusercc' >
                              <div key={i} style={{ width: '100%' }}   >


                                <div id='name22user2'  > Name :       {item.user_id.name}  </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-envelope" style={{ fontSize: '15px' }}></i>   <span style={{ paddingLeft: '10px', width: '100%' }}  >{item.user_id.email}</span>
                                </div>
                              </div>


                            </Col>

                            <Col id='colusercc' xs={12} lg={3}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-phone-volume"></i> <span style={{ paddingLeft: '10px', width: '100%' }}  > {item.user_id.phone} </span>
                                </div>
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <i className="fas fa-map-marker-alt" style={{ fontSize: '14px' }} ></i>  <span style={{ paddingLeft: '10px', width: '100%' }}  >  {item.user_id.ctiy} </span>
                                </div>   </div>
                            </Col>
                            <Col id='colusercc' xs={12} lg={4}  >
                              <div key={i} style={{ width: '100%' }}   >
                                <div id='name22user2' style={{ color: '#1A5491' }} >
                                  <span style={{ width: '100%' }}  >  Title  :   {item.ads_id.title} </span>
                                </div>  </div>
                            </Col>

                          </Row>
                        ))}



                      </Tab>
                    </Tabs>










                  </div>

                </div>
              </div>

            </div>

          )
        } else if (ctx.value.chech_compLOgin === "") {
          return (
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
export default User;