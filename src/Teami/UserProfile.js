import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import Select from 'react-select';
import host from '../component/host';
import Nav2 from '../component/Nav2';
import { SelectMenu, Button, TextInput, Dialog, Pane, FilePicker ,toaster} from 'evergreen-ui';
import Component from '@reactions/component';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import State from './state.json';
import Position from './position.json';
import moment from 'moment';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const city = State;
const position = Position;
class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1:[],
data2:[],
      spin: true,
      name:'',
      email:'',
      phone:'',
      ctiy:'',
      BirthDate:'',
      University:'',
      Collage:'',
      DateofGarduation:'',
      Position:'',
      passwordNew:'',
      password:'',
      File:'',
      experience:'',
      CompanyName:'',
      OfficeName:'',
      SpecialityofDoctor:'',
      PhamacuiticalCategory:'',
      TimeofWork:'',
      Startingwork:'',
      EndWork:'',
      place:'',
      subject:'',
      date:'',
      experience_months:'',
      Notes:'',
      Education:'',
      DateofGarduation:'',
      cv:'',
      photo:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
  }
  CityFun() {
    var arr = [{ value: 'city', label: 'city' }];
    for (let i = 0; i < city.length; i++) {
      arr.push(
        { value: city[i].name, label: city[i].name }
      )
    }
    return arr
  }
  positionFun() {
    var arr = [{ value: 'Position', label: 'Position' }];
    for (let i = 0; i < Position.length; i++) {
      arr.push(
        { value: Position[i].name, label: Position[i].name }
      )
    }
    return arr
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date,
   
    });
    let formData = new FormData();
  
  }
  handleChange1(date) {
    this.setState({
      startDate1: date,
      date,
   
    });
    let formData = new FormData();
  
  }
  handleChange2(BirthDate) {
    this.setState({
      startDate2: BirthDate,
      BirthDate,
   
    });
    let formData = new FormData();
  
  }
  handleChange3(DateofGarduation) {
    this.setState({
      startDate3: DateofGarduation,
      DateofGarduation,
   
    });
    let formData = new FormData();
  
  }
  handleChange5(startingwork) {
    this.setState({
      startDate5: startingwork,
      startingwork,
   
    });
    let formData = new FormData();
  
  }
  handleChange6(endWork) {
    this.setState({
      startDate6: endWork,
      endWork,
   
    });
    let formData = new FormData();
  
  }

  componentDidMount() {
    axios.get(host + 'api/v1/auth/profile', { headers: { token: cookies.get("token") } })
      .then(res => {
      
        this.setState({
          data: res.data.data,
        data1:res.data.data.experience,
        data2:res.data.data.training,

        })
        console.log(res.data.data);
  
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }


  change() {
    var password = this.state.password;
    var passwordNew = this.state.passwordNew;
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("password", password);
    formData.append("passwordNew", passwordNew);
    axios({
      url: host+`api/v1/auth/chnagepassword?`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Password has been changed successfully');
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
        }
      });

  }

  delete(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
  axios({
      url: host + `api/v1/user/experience/${id}`,
      method: "DELETE",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('experence has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });
  }

  deletetra(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
  axios({
      url: host + `api/v1/user/training/${id}`,
      method: "DELETE",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('training has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });
  }



  add() {

    var endWork=moment(this.state.endWork).format("YYYY-MM-DD");
    var startingwork=moment(this.state.startingwork).format("YYYY-MM-DD");
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("position", this.state.position);
    formData.append("officeName", this.state.officeName);
    formData.append("companyName", this.state.companyName);
    formData.append("timeofWork", this.state.timeofWork);
    // formData.append("phamacuiticalCategory", this.state.phamacuiticalCategory);
    // formData.append("specialityofDoctor", this.state.specialityofDoctor);
       formData.append("startingwork",startingwork);
       formData.append("endWork",endWork);
    

    axios({
      url: host + `api/v1/user/experience`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Experience has been added successfully');
        // console.log(response)
        // window.location.reload();
      })
      .catch(function (error) {
        // console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  training(){

       var date=moment(this.state.date).format("YYYY-MM-DD");
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("place", this.state.place);
    formData.append("date", date);
    formData.append("subject", this.state.subject);
 

    axios({
      url: host + `api/v1/user/training`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('training has been added successfully');
    
      })
      .catch(function (error) {
    
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  edit() {
    var DateofGarduation=moment(this.state.DateofGarduation).format("YYYY-MM-DD");
    var BirthDate=moment(this.state.BirthDate).format("YYYY-MM-DD");
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("Notes",this.state.Notes);
    formData.append("phone", this.state.phone);
    formData.append("ctiy", this.state.ctiy);
    formData.append("Education", this.state.Education);
    formData.append("University", this.state.University);
    formData.append("Collage", this.state.Collage);
    formData.append("cv", this.state.cv);
    formData.append("file", this.state.File);
    formData.append("DateofGarduation",DateofGarduation);
    formData.append("BirthDate",BirthDate);
  
    axios({
      url: host+`api/v1/auth/edit`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('info has been edit successfully');
      })
      .catch(function (error) {
        // console.log(error.response.data)
        if (error.response) {
        }
      });

  }



  render() {
    return (
      <Context.Consumer>{ctx => {

        return (
          <div>
            {/* {!this.state.spin?( */}
            <div id="apfot">
              <Nav2 />
              <div style={{
                backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                , width: '100%'
              }}>
                <Row style={{ marginRight: '0px', width: '70%' }}>

                  <Col xs={12}>

                    <div id='cardprofileuser' >

                      {/* <div className="container"> */}
                        <div id='backprofcoluser'>
                     


                        </div>


                      {/* </div> */}

                      <div id='name1user' >
                             {/* <img src={require('../assets/img/d.jpg')} id='img123user' alt='offer' /> */}
                             <img src={host + this.state.data.File} id='img123user'alt='img' />
                             </div>

                      <div id='name1user' >
                        {/* sarah nihad */}
                        {this.state.data.name}
                   
                         </div>
                      <div id='name22user' >
                      {this.state.data.email}
                          </div>
                        <div id='name22user'style={{color:'blue'}} >
                Phone :       {this.state.data.phone}
                            </div>
                    <div id='name22user' >
         City :     {this.state.data.ctiy} 
                            </div>
                                <div id='name22user'style={{fontSize:'12px'}} >
                     Birth of Date :     {this.state.data.BirthDate}
                                       </div>
                                        <div id='name22user'style={{fontSize:'12px'}} >
                                 experience months :     {this.state.data.experience_months}
                                       </div>

                                              <div id='name22user'style={{fontSize:'12px'}} >
                                 {this.state.data.Notes}
                                                        </div>
                                                        <div id='name22user'style={{color:'blue'}} >
                                                        <div  style={{cursor:'pointer',zIndex:'3'}}   onClick={() => {
                            window.open( `https://sky-link.herokuapp.com/` + this.state.data.cv,'_blank');
                         
    
                        }}>
                               CV     
                                       </div></div>
                    
                           <div id='edituser'>
                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title="Edit Personal Information"
                                width={'60%'}
                                // height={1000}
                                confirmLabel="Edit"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.edit() }} 
                                   > 

                                <div id='dd'>
                                  <div>Notes :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="Notes"
                                    required value={this.state.Notes} onChange={(e) => {
                                      this.setState({ Notes: e.target.value })
                                    }} />
                                </div>
                                <div id='dd'>
                                  <div>phone :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="phone"
                                    required value={this.state.phone} onChange={(e) => {
                                      this.setState({ phone: e.target.value })
                                    }}
                                  />
                                </div>
                                <div id='dd'>
                                  <div> ctiy :</div>
                                  <Select
                                  onChange={(e) => {
                                    if (e.value !== 'city') {
                                      this.setState({ city: e.value })
                                      console.log(e.value);
                                    }
                                  }}
                                  defaultValue={this.CityFun()[0]}
                                  options={this.CityFun()}
                                />

                                </div>
                                <div id='dd'>
                                  <div> University</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="University" required
                                    value={this.state.University} onChange={(e) => {
                                      this.setState({ University: e.target.value })
                                    }} />
                                </div>


                             

                            
                                <div id='dd'>
                                  <p > Collage:</p>

                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="Collage" required
                                    value={this.state.Collage} onChange={(e) => {
                                      this.setState({ Collage: e.target.value })
                                    }} />
                          
                                </div>


                                <div id='dd'>
                                  <p > Education:</p>

                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="Education" required
                                    value={this.state.Education} onChange={(e) => {
                                      this.setState({ Education: e.target.value })
                                    }} />
                          
                                </div>

                                <div id='dd'>
                                  <div> edit photo</div>
                                  <FilePicker id='width'
                                    multiple
                                    onChange={files =>
                                      this.setState({ File: files[0], file1: files.length })
                                    }
                                  />
</div>

                                <div id='dd'>
                                  <div> Upload CV</div>
                                  <FilePicker id='width'
                                    multiple
                                    onChange={files =>
                                      this.setState({ cv: files[0], file1: files.length })
                                    }
                                  />

                                </div>
                                <div id='dds'>
                                  <div> Date of Birth </div>

                                  <DatePicker id='width'
                                    selected={this.state.startDate2}
                                    onChange={this.handleChange2}
                                  />
                                </div>

                                <div id='dds'>
                                  <div> Date of Garduation </div>

                                  <DatePicker id='width'
                                    selected={this.state.startDate3}
                                    onChange={this.handleChange3}
                                  />
                                </div>


                                <div id='dd' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                  <div>Change Password</div>
                                  <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>  
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="old password" required
                                    value={this.state.password} onChange={(e) => {
                                      this.setState({ password: e.target.value })
                                    }} />

<TextInput id='width'
                                    name="text-input-name"
                                    placeholder="New password" required
                                    value={this.state.passwordNew} onChange={(e) => {
                                      this.setState({ passwordNew: e.target.value })
                                    }} />
          
                                </div>
      <div style={{width:'100%',paddingTop:'2%',display:'flex',alignItems:'center',justifyContent:'center'}}  >                 
<button  onClick={() => this.change()}>Change Password</button>
</div> 


</div>


                              </Dialog>

                              <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
                            </Pane>
                          )}
                        </Component>
                                 </div>

                    </div>

                  </Col>

                </Row>

                <Row style={{ marginRight: '0px', width: '70%' }}>

                  <Col xs={12}>

                    <div id='cardprofileuser' >
                      <div id='eduction'> Education
                      


                      </div>
                      <div id='editesss' >
                      <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '600',paddingRight:'15px' }}> 
                       {/* Al-Nahrain University  */}
              {this.state.data.University}


                       </div>
                       </div>
                      <div style={{ width: '100%', paddingLeft: '15px' }} >
                         {/* Information and Communication Engineering   */}
                   {this.state.data.Collage}
                         </div>

                         <div style={{ width: '100%', paddingLeft: '15px' }}  > 
     {this.state.data.Education}
</div>

                      <div style={{ width: '100%', paddingLeft: '15px' }}  > 
              graduation date   {this.state.data.DateofGarduation}
                      </div>




 









                      <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >

                    </div>







                        <div id='eduction'> Experience
                      
                      <div style={{ float: 'right' }}>
                      
                    
                      
                                                <Component initialState={{ isShown: false }}>
                                                  {({ state, setState }) => (
                                                    <Pane >
                                                      <Dialog
                                                        isShown={state.isShown}
                                                        title="Add Experience"
                                                        width='70%'
                                                        confirmLabel="Add"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        onConfirm={() => {
                                                          setState({ isShown: false })
                                                          this.add() }} 
                                                           > 
         <div id='dd'>
                                  <p > Position:</p>


                                  <Select
                                    onChange={(e) => {
                                      if (e.value !== 'Position') {
                                        this.setState({ Positioninput: e.value })
                                        console.log(e.value);
                                      }
                                    }}
                                    defaultValue={this.positionFun()[0]}
                                    options={this.positionFun()}
                                  />
                                </div>

                                <div id='dd'>
                                  <p > Phamacuitical Category:</p>


                                  <Select
                                    onChange={(e) => {
                                      if (e.value !== 'Position') {
                                        this.setState({ Positioninput: e.value })
                                        console.log(e.value);
                                      }
                                    }}
                                    defaultValue={this.positionFun()[0]}
                                    options={this.positionFun()}
                                  />
                                </div>
                                <div id='dd'>
                                  <p > Speciality of Doctor:</p>


                                  <Select
                                    onChange={(e) => {
                                      if (e.value !== 'Position') {
                                        this.setState({ Positioninput: e.value })
                                        console.log(e.value);
                                      }
                                    }}
                                    defaultValue={this.positionFun()[0]}
                                    options={this.positionFun()}
                                  />
                                </div>

                                                        <div id='dd'>
                                                          <div> Office Name :</div>
                                                          <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="Office Name"
                                                            required value={this.state.officeName} onChange={(e) => {
                                                              this.setState({ officeName: e.target.value })
                                                            }} />
                                                        </div>

                                                        <div id='dd'>
                                                          <div> time of Work :</div>
                                                          <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="full or part"
                                                            required value={this.state.timeofWork} onChange={(e) => {
                                                              this.setState({ offictimeofWorkeName: e.target.value })
                                                            }} />
                                                        </div>



                                                        <div id='dd'>
                                                          <div>Company Name :</div>
                                                          <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="Company Name"
                                                            required value={this.state.companyName} onChange={(e) => {
                                                              this.setState({ companyName: e.target.value })
                                                            }}
                                                          />
                                                        </div>
                                                        <div  style={{display:'flex',width:'100%',justifyContent:'space-between'}}   >

                                                          <div>  
                      
                                                          <DatePicker id='width'
                                                            selected={this.state.startDate5}
                                                            onChange={this.handleChange5}
                                                          />
</div>
<div>  
                      
                      <DatePicker id='width'
                        selected={this.state.startDate6}
                        onChange={this.handleChange6}
                      />
</div>
                                                        </div>
                      
                                                      </Dialog>
                      
                                                      <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-plus"></i>  </Button>
                                                    </Pane>
                                                  )}
                                                </Component> 
                      
                                              </div>
                      
                                            </div>

                                            {this.state.data1.map(((item, i) =>
                                            <div style={{width:'100%'}}>
                                            <div id='editesss' >

                                            <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '600',paddingRight:'13px' }}> 
        
                                            
                                            CompanyName: {item.CompanyName}
        
        
         </div>

                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             OfficeName :  {item.OfficeName}
                                             </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                            Position :  {item.Position}
                                             </div>
                                     
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             SpecialityofDoctor :
                                      
                                   <span> {item.SpecialityofDoctor[0]} </span> ,  <span> {item.SpecialityofDoctor[1]} </span> ,  <span> {item.SpecialityofDoctor[2]} </span>
                                        
                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             PhamacuiticalCategory:  {item.PhamacuiticalCategory}
                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             TimeofWork:  {item.TimeofWork}
                                             </div>


                                            <div style={{ width: '100%', paddingLeft: '15px' }}  > {item.Startingwork} - {item.EndWork} </div>



                                            <div style={{  width: '100%',float: 'right',display:'flex',justifyContent:'flex-end',paddingRight:'30px' }} 
                                             onClick={(e) => { this.delete(item._id) }}   >


                                            <i className="fas fa-trash-alt"></i></div>

                                            <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                      
                                          </div>
                      </div>
                                        ))} 

                                          <div id='eduction'> Training
                      
                      <div style={{ float: 'right' }}>
                      
                      
                      
                                                <Component initialState={{ isShown: false }}>
                                                  {({ state, setState }) => (
                                                    <Pane >
                                                      <Dialog
                                                        isShown={state.isShown}
                                                        title="Add Training"
                                                        confirmLabel="Add"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        onConfirm={() => {
                                                          setState({ isShown: false })
                                                          this.training()
                                                       
                        
                                                        }}>
                                                        <div id='dd'>
                                                          <div> subject :</div>
                                                          <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="subject"
                                                            required value={this.state.subject} onChange={(e) => {
                                                              this.setState({ subject: e.target.value })
                                                            }} />
                                                        </div>
                                                        <div id='dd'>
                                                          <div>place :</div>
                                                          <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="place"
                                                            required value={this.state.place} onChange={(e) => {
                                                              this.setState({ place: e.target.value })
                                                            }}
                                                          />
                                                        </div>
                                                        <div id='dds'>
                                                          <div> Date of Garduation </div>
                      
                                                          <DatePicker id='width'
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                          />
                                                        </div>
                      
                                                      </Dialog>
                      
                                                      <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-plus"></i>  </Button>
                                                    </Pane>
                                                  )}
                                                </Component>
                      
                                              </div>
                      
                                            </div>
                                            {this.state.data2.map(((item, i) =>
                                            <div style={{width:'100%'}} >
                                            <div id='editesss' >
                                            <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '600',paddingRight:'15px' }}> 
                                            {item.place}
  
                                            
                                            
                                             </div>
                                             </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }} > {item.subject} </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }}  > {item.date} </div>


                                            <div style={{  width: '100%',float: 'right',display:'flex',justifyContent:'flex-end',paddingRight:'30px' }} 
                                             onClick={(e) => { this.deletetra(item._id) }}   >


                                            <i className="fas fa-trash-alt"></i></div>


                      
                                            <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                      
                                          </div>
                                          </div>
                                            ))}
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
          </div>
        )
      }}

      </Context.Consumer>
    );
  }
}
export default UserProfile;