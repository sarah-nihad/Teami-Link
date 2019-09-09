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
import { Redirect} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import State from './state.json';
import Position from './position.json';
import Category from './Category.json';
import speciality from './speciality.json';
import colleage from './colleage.json';
import moment from 'moment';
import Cookies from 'universal-cookie';
var sp=speciality;
const cookies = new Cookies();
const city = State;
const Collage = colleage;
var position = Position;
const phamacuiticalCategory = Category;

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  
]
const options1 = [
  { value: 'true', label: 'true' },
  { value: 'false', label: 'false' },
  
]
const options2 = [
  { value: 'true', label: 'true' },
  { value: 'false', label: 'false' },
  
]

const options3 = [
  { value: 'full', label: 'full' },
  { value: 'part', label: 'part' },
  
]
const options4 = [
  { value: 'student', label: 'student' },
  { value: 'graduated', label: 'graduated' },
  
]

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
      photo:'',
      Cityinput:'',
      Positioninput:'',
      categoryinput:'',
      specialityinput:'',
      selectedNames:'',
      startDate2: new Date(),
      startDate1: new Date(),
      startDate3: new Date(),
      startDate: new Date(),
      startDate5: new Date(),
      startDate6: new Date(),
      wait:true,
      wait1:true,
      wait2:true,
      spesh:true,
      categoryinput1:'',
      Collage1:'',
      Positioninput1:'',
      gender:'',
      car:''
     
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

  categoryFun() {
   
    var arr = [{ value: 'phamacuiticalCategory', label: 'phamacuiticalCategory' }];
    for (let i = 0; i < phamacuiticalCategory.length; i++) {
      arr.push(
        { value: phamacuiticalCategory[i].name, label: phamacuiticalCategory[i].name }
      )
    }
    return arr
  }

  CollageFun() {
   
    var arr = [{ value: 'Collage', label: 'Collage' }];
    for (let i = 0; i < Collage.length; i++) {
      arr.push(
        { value: Collage[i].name, label: Collage[i].name }
      )
    }
    return arr
  }
  
  positionFun() {
    var arr = [{ value: 'position', label: 'position' }];
    for (let i = 0; i < Position.length; i++) {
      arr.push(
        { value: position[i].name, label: position[i].name }
      )
    }
    return arr
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date,
   
    });
  
  
  }
  handleChange1(date) {
    this.setState({
      startDate1: date,
      date,
   
    });
   
  
  }
  handleChange2(BirthDate) {
    this.setState({
      startDate2: BirthDate,
      BirthDate,
   
    });
    // let formData2 = new FormData();
  
  }
  handleChange3(DateofGarduation) {
    this.setState({
      startDate3: DateofGarduation,
      DateofGarduation,
   
    });
  
  
  }
  handleChange5(startingwork) {
    this.setState({
      startDate5: startingwork,
      startingwork,
   
    });
   
  
  }
  handleChange6(endWork) {
    this.setState({
      startDate6: endWork,
      endWork,
   
    });
   
  
  }




  change() {
    var password = this.state.password;
    var passwordNew = this.state.passwordNew;
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("Usertoken")
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
      token: cookies.get("Usertoken")
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
    
      });
  }

  deletetra(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("Usertoken")
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
      });
  }
  getCateById() {
    this.setState({
      wait: false
    })
  }
 positionwait() {
    this.setState({
      wait1: false
    })
  }
  positionwait1() {
    this.setState({
      spesh: false
    })
  }
  colgwait() {
    this.setState({
      wait2: false
    })
  }

  add() {

    var endWork=moment(this.state.endWork).format("YYYY-MM-DD");
    var startingwork=moment(this.state.startingwork).format("YYYY-MM-DD");
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("Usertoken")
    };
    if (this.state.Positioninput === 'Medical Representative'|| this.state.Positioninput === 'Medical Supervisor'
    || this.state.Positioninput === 'Product Specialist' || this.state.Positioninput === 'General manager'
    || this.state.Positioninput === 'Product Manager') {
    for (let index = 0; index < this.state.specialityofDoctor.length; index++) {
      formData.append("specialityofDoctor[]",this.state.specialityofDoctor[index]);
    }
    }

    if (this.state.categoryinput !== 'other') {
     
      formData.append("phamacuiticalCategory", this.state.categoryinput)
    }
    
    if (this.state.categoryinput === 'other') {
      formData.append("phamacuiticalCategory", this.state.categoryinput1)
    }
  
    if (this.state.categoryinput !== 'other') {
     
      formData.append("position", this.state.Positioninput)
    }
    
    if (this.state.categoryinput === 'other') {
      formData.append("position", this.state.Positioninput1)
    }
    formData.append("officeName", this.state.officeName);
    formData.append("companyName", this.state.companyName);
    formData.append("timeofWork", this.state.timeofWork);
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
      })
      .catch(function (error) {
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
      token: cookies.get("Usertoken")
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
      token: cookies.get("Usertoken")
    };
    if (this.state.categoryinput !== 'other') {
     
      formData.append("Collage", this.state.Collage)
    }
    
    if (this.state.categoryinput === 'other') {
      formData.append("Collage", this.state.Collage1)
    }
    formData.append("Notes",this.state.Notes);
    formData.append("phone", this.state.phone);
    formData.append("ctiy", this.state.Cityinput);
    formData.append("Education", this.state.Education);
    formData.append("University", this.state.University);
    formData.append("cv", this.state.cv);
    formData.append("file", this.state.File);
    formData.append("DateofGarduation",DateofGarduation);
    formData.append("BirthDate",BirthDate);
    formData.append("gender",this.state.gender);
    formData.append("car",this.state.car);
    formData.append("working",this.state.working);


  
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
        if (error.response) {
        }
      });

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
           <div>
            {/* {!this.state.spin?( */}
            <div id="apfot">
              <Nav2 />
      
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
                      
                             <img src={host + ctx.value.data.File} id='img123user'alt='img' />
                             </div>
     
                      <div id='name1user' >
                     
                        {ctx.value.data.name}
                   
                         </div>
                      <div id='name22user' style={{color:'#1A5491'}} >
                      <i className="fas fa-envelope"style={{fontSize:'15px'}}></i>   <span style={{paddingLeft:'10px',width:'100%'}}  >{ctx.value.data.email}</span>  
                          </div>
                        <div id='name22user'style={ctx.value.data.phone === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                        <i className="fas fa-phone-volume"></i> <span style={{paddingLeft:'10px',width:'100%'}}  > {ctx.value.data.phone} </span> 
                            </div>
                    <div id='name22user'style={ctx.value.data.ctiy === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                    <i className="fas fa-map-marker-alt" style={{fontSize:'14px'}} ></i>  <span style={{paddingLeft:'10px',width:'100%'}}  >  {ctx.value.data.ctiy} </span>
                            </div>
                                <div id='name22user' style={ctx.value.data.BirthDate === 'NON' ?  {display:'none'} : { display:'',fontSize:'12px',color:'#1A5491'}}  >
                  <span style={{fontSize:'14px'}}> <i className="fas fa-calendar-alt"></i> </span> <span style={{paddingLeft:'10px'}}  >   {ctx.value.data.BirthDate} </span>
                                       </div>
                                        <div id='name22user'style={ctx.value.data.experience_months === 0 ?  {display:'none'} : { display:'',fontSize:'12px'}}  >
                               experience months :     {ctx.value.data.experience_months}
                                       </div>

                  
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
                           <div id='edituser'>
                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title="Change Password"
                                width={'60%'}
                                confirmLabel="Edit"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.change() }} 
                                   > 

                                  <div id='dd'>
                                  <div>old password :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="old password" required
                                    value={this.state.password} onChange={(e) => {
                                      this.setState({ password: e.target.value })
                                    }} />
                                    </div>

                                    <div id='dd'>
                                  <div>New password :</div>
<TextInput id='width'
                                    name="text-input-name"
                                    placeholder="New password" required
                                    value={this.state.passwordNew} onChange={(e) => {
                                      this.setState({ passwordNew: e.target.value })
                                    }} />
          </div>
  


                              </Dialog>

                              <Button style={{width:'100%'}}  onClick={() => { setState({ isShown: true }) }}> Change Password   </Button>
                            </Pane>
                          )}
                        </Component>
                                 </div>
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
                                      this.setState({ Cityinput: e.value })
                                      console.log( e.value );
                                    }
                                  }}
                                  defaultValue={this.CityFun()[0]}
                                  options={this.CityFun()}
                                />
                                </div>

                                <div id='dd'>
                                  <div> gender :</div>
                                             <Select
                                  onChange={(e) => {
                               
                                      this.setState({ gender: e.value })
                                      console.log( e.value );
                               
                                  }}
                             
                                  options={options}
                                />

                                </div>

                                <div id='dd'>
                                  <div> Have a Car?:</div>
                           
            <Select
                                  onChange={(e) => {
                               
                                      this.setState({ car: e.value })
                                      console.log( e.value );
                               
                                  }}
                             
                                  options={options1}
                                />

                                </div>

                                <div id='dd'>
                                  <div> working?:</div>
                           
            <Select
                                  onChange={(e) => {
                               
                                      this.setState({ working: e.value })
                                      console.log( e.value );
                               
                                  }}
                             
                                  options={options2}
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

                                     <Select
                                  onChange={(e) => {
                                    if (e.value !== 'Collage') {
                                      this.setState({ Collage: e.value })
                                      console.log( e.value );
                                    }
                                    if (e.value === 'other') {
                                      setTimeout(() => {
                                        this.colgwait()
                                      }, 200);
                
                                    }
                                  }}
                                  defaultValue={this.CollageFun()[0]}
                                  options={this.CollageFun()}
                                />
                          
                                </div>
                                {!this.state.wait2 ? (
   
   <div id='dd'>
   <div>write your Collage:</div>
   <TextInput id='width'
     name="text-input-name"
     placeholder="Collage"
     required value={this.state.Collage1} onChange={(e) => {
       this.setState({ Collage1: e.target.value })
     }} />
 </div>


   ) : (<div></div>)}


                                <div id='dd'>
                                  <p > Education:</p>

                                  {/* <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="Education" required
                                    value={this.state.Education} onChange={(e) => {
                                      this.setState({ Education: e.target.value })
                                    }} /> */}

<Select
                                  onChange={(e) => {
                               
                                      this.setState({ Education: e.value })
                                      console.log( e.value );
                               
                                  }}
                             
                                  options={options4}
                                />
                          
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


                             



                              </Dialog>

                              <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
                            </Pane>
                          )}
                        </Component>
                                 </div>

                    </div></div>

                  </Col>

                </Row>

                <Row style={{ marginRight: '0px' }} id='userpro1'  >

                  <Col xs={12}>

                    <div id='cardprofileuser' >
                      <div id='eduction'> Education
                      


                      </div>
                      <div id='editesss' >
                      <div style={ctx.value.data.University === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px', fontWeight: '500',paddingRight:'15px',fontSize:'16px'}}>
                   
                       {/* Al-Nahrain University  */}
         <span style={{color:'#1A5491'}} > University :  </span>     {ctx.value.data.University}
                       </div>
                       </div>
                      <div style={ctx.value.data.Collage === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                     
                         {/* Information and Communication Engineering   */}
                         <span style={{color:'#1A5491'}} > Collage :  </span>        {ctx.value.data.Collage}
                         </div>

                         <div style={ctx.value.data.Education === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                            
                         <span style={{color:'#1A5491'}} >        {ctx.value.data.Education} </span>

                              </div>

                        <div style={ctx.value.data.DateofGarduation === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                        <span style={{color:'#1A5491'}} >  graduation date  :  </span> {ctx.value.data.DateofGarduation}
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
                                                              if (e.value !== 'position') {
                                                                 this.setState({ Positioninput: e.value })
                                                                  console.log(e.value);
                                      }
                                      if (e.value === 'other') {
                                        setTimeout(() => {
                                          this.positionwait()
                                        }, 200);
                                      }
                                      if (e.value === 'Medical Supervisor' || e.value ==='Medical Representative' || e.value ==='Product Specialist'
                                      || e.value ==='Product Manager'  || e.value ==='General manager') {
                                        setTimeout(() => {
                                          this.positionwait1()
                                        }, 200);
                                      }

                                    }}
                                    defaultValue={this.positionFun()[0]}
                                    options={this.positionFun()}
                                  />
                                </div>

                                {!this.state.wait1 ? (
   
   <div id='dd'>
   <div>write your position:</div>
   <TextInput id='width'
     name="text-input-name"
     placeholder="Position"
     required value={this.state.Positioninput1} onChange={(e) => {
       this.setState({ Positioninput1: e.target.value })
     }} />
 </div>


   ) : (<div></div>)}


{!this.state.spesh ? (
   
  <div id='dd'>
  <p > Speciality of Doctor:</p>

  <Component
initialState={{
options: sp
.map(label => ({ label, value: label })),
selected: []
}}
>
{({ state, setState }) => (
<SelectMenu
isMultiSelect
title="Speciality of Doctor"
options={state.options}
selected={state.selectedNames}
onSelect={item => {
const selected = [...state.selected, item.value]
this.setState({
specialityofDoctor:selected
})
// console.log(selected);

const selectedItems = selected
const selectedItemsLength = selectedItems.length
let selectedNames = ''
if (selectedItemsLength === 0) {
selectedNames = ''
} else if (selectedItemsLength === 1) {
selectedNames = selectedItems.toString()
} else if (selectedItemsLength > 1) {
selectedNames = selectedItemsLength.toString() + ' selected...'
}
setState({
selected,
selectedNames
})
console.log(selectedNames);
}}
onDeselect={item => {
const deselectedItemIndex = state.selected.indexOf(item.value)
const selectedItems = state.selected.filter(
(_item, i) => i !== deselectedItemIndex
)
const selectedItemsLength = selectedItems.length
let selectedNames = ''
if (selectedItemsLength === 0) {
selectedNames = ''
} else if (selectedItemsLength === 1) {
selectedNames = selectedItems.toString()
} else if (selectedItemsLength > 1) {
selectedNames = selectedItemsLength.toString() + ' selected...'
}
setState({ selected: selectedItems, selectedNames })
}}
>
<Button style={{width:'100%',display:'flex',justifyContent:'center'}} >{state.selectedNames || 'Speciality of Doctor'}</Button>
</SelectMenu>
)}
</Component>


</div>


   ) : (<div></div>)}


                                <div id='dd'>
                                  <p > Phamacuitical Category:</p>


                                  <Select
                                    onChange={(e) => {
                                      if (e.value !== 'phamacuiticalCategory') {
                                        this.setState({ categoryinput: e.value })
                                        console.log(e.value);
                                      }
                                      if (e.value === 'other') {
                                
                                        setTimeout(() => {
                                          this.getCateById()
                                        }, 200);
                                      }
                                    }}
                                    defaultValue={this.categoryFun()[0]}
                                    options={this.categoryFun()}
                                  />
 {!this.state.wait ? (
   
   <div id='dd'>
   <div>write your    Phamacuitical Category:</div>
   <TextInput id='width'
     name="text-input-name"
     placeholder="Phamacuitical Category"
     required value={this.state.categoryinput1} onChange={(e) => {
       this.setState({ categoryinput1: e.target.value })
     }} />
 </div>


   ) : (<div></div>)}
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
                                                          {/* <TextInput id='width'
                                                            name="text-input-name"
                                                            placeholder="full or part"
                                                            required value={this.state.timeofWork} onChange={(e) => {
                                                              this.setState({ timeofWork: e.target.value })
                                                            }} /> */}
                  <Select
                                  onChange={(e) => {
                               
                                      this.setState({ timeofWork: e.value })
                                      console.log( e.value );
                               
                                  }}
                             
                                  options={options3}
                                />



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

                                                          <div id='dds'  >  
                      <div>Starting Work:</div>
                                                          <DatePicker id='width'
                                                            selected={this.state.startDate5}
                                                            onChange={this.handleChange5}
                                                          />
</div>
<div id='dds'>  
   <div>End Work </div>                   
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

                                            {ctx.value.data1.map(((item, i) =>
                                            <div key={i} style={{width:'100%'}}>
                                            <div id='editesss' >

                                            <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'13px' }}> 
        
                                            
                                            <span style={{color:'#1A5491'}} >  Company Name: </span>  <span style={{paddingLeft:'8px'}}> {item.CompanyName}</span> 
        
        
         </div>

                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px'}} > 
                                             <span style={{color:'#1A5491'}} >     Office Name : </span> <span style={{paddingLeft:'8px'}}>  {item.OfficeName}</span> 
                                             </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                            <span style={{color:'#1A5491'}} >      Position : </span> <span style={{paddingLeft:'8px'}}>  {item.Position}</span> 
                                             </div>
                                     
                                         
                                             <div style={item.SpecialityofDoctor.length< 1||item.SpecialityofDoctor[0] === 'NON'  ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                             <span style={{color:'#1A5491'}} >       Speciality Of Doctor : </span>
                                      
                                 <span style={{paddingLeft:'8px'}}>  {item.SpecialityofDoctor[0]} </span>,  
                                 <span> {item.SpecialityofDoctor[1]} </span> ,  <span> {item.SpecialityofDoctor[2]} </span>
                                        
                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             <span style={{color:'#1A5491'}} >  Phamacuitical Category: </span>  <span style={{paddingLeft:'8px'}}>   {item.PhamacuiticalCategory}</span> 
                                             </div>
                                             <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                             <span style={{color:'#1A5491'}} >      Time Of Work:  </span> <span style={{paddingLeft:'8px'}}>  {item.TimeofWork}</span> 
                                             </div>


                                            <div style={{ width: '100%', paddingLeft: '15px' }}  >   {item.Startingwork} - {item.EndWork}  </div>



                                            <div style={{  width: '100%',display:'flex',justifyContent:'flex-end',paddingRight:'30px' }} 
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
                                            {ctx.value.data2.map(((item, i) =>
                                            <div key={i} style={{width:'100%'}} >
                                            <div id='editesss' >
                                            <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'15px' }}> 
                                            <span style={{color:'#1A5491'}} >  Place :  </span>   
                                            <span style={{paddingLeft:'8px'}}>    {item.place} </span>
  
                                            
                                            
                                             </div>
                                             </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }} >        <span style={{color:'#1A5491'}} >  Subject :  </span>   
                                            <span style={{paddingLeft:'8px'}}>     {item.subject}  </span> </div>
                                            <div style={{ width: '100%', paddingLeft: '15px' }}  > {item.date} </div>


                                            <div style={{  width: '100%',display:'flex',justifyContent:'flex-end',paddingRight:'30px' }} 
                                             onClick={(e) => { this.deletetra(item._id) }}   >
                                            <i className="fas fa-trash-alt"></i></div>


                      
                                            <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                      
                                          </div>
                                          </div>
                                            ))}

<div  style={ctx.value.data.Notes === 'NON' ?  {display:'none'} : { display:'',fontSize:'14px',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                 {ctx.value.data.Notes}
                                                        </div>
                                                        <div  style={ctx.value.data.cv === 'NON' ?  {display:'none'} : { display:'',color:'blue',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                                        <div  style={{cursor:'pointer',zIndex:'3'}}   onClick={() => {
                            window.open( `https://sky-link.herokuapp.com/` + ctx.value.data.cv,'_blank');
                         
    
                        }}>
                               CV     
                                       </div></div>

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
         
            </div>
        
          )
        }else if (ctx.value.chech_userLOgin==="") {
          return(
            <h1>waiting</h1>
          )
        }
        

      
      }}

      </Context.Consumer>
    );
  }
}
export default UserProfile;