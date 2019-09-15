import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import host from '../component/host';
// import DatePicker from "react-datepicker";
import Component from '@reactions/component';
import { Redirect} from 'react-router-dom';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import {  Button, TextInput, Dialog, Pane, FilePicker,toaster} from 'evergreen-ui';
import NavCom from './NavCom';
import Select from 'react-select';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
import State from './state.json';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const city = State;
class Company2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data4: [],
      data1: [],
      phone:'',

      company_name:'',
      email:'',
      name:'',
      OfficeName:'',
      Position:'',
      numberOfTeam:'',
      ctiy:'',
      File:'',
      wait1:true,

   
      spin: true,
      password:'',
      passwordNew:'',
    }
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


 
componentDidMount(){

  axios.get(host + 'api/v1/Company/profile', { headers: { token: cookies.get("token") } })
  .then(res => {
  
    this.setState({
      data4: res.data.profile,
    
      name: res.data.profile.name,
      phone: res.data.profile.phone,
      OfficeName: res.data.profile.OfficeName,
      Position: res.data.profile.Position,
      company_name: res.data.profile.company_name,
      numberOfTeam: res.data.profile.numberOfTeam,
      ctiy: res.data.profile.Cityinput,
      file: res.data.profile.file,
      
    })


    console.log(res.data.profile);
  })
  .catch(err => {
    console.log('error:' + err);
   
  })




}


  edit() {
 
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("name",this.state.name);
    formData.append("phone", this.state.phone);
    formData.append("OfficeName", this.state.OfficeName);
    formData.append("Position", this.state.Position);
    formData.append("numberOfTeam", this.state.numberOfTeam);
    formData.append("ctiy", this.state.Cityinput);
    formData.append("company_name", this.state.company_name);
    formData.append("file", this.state.file);
    axios({
      url: host+`api/v1/Company/edit`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('info has been edit successfully');
        this.componentDidMount();
      })
      .catch(function (error) {
        // console.log(error.response.data)
        if (error.response) {
        }
      });

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
      url: host+`api/v1/Company/chnagepassword?`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('information has been edit successfully');
      })
      .catch(function (error) {
        console.log(error.response.data)
        toaster.danger(error.response.data.msg);
      });

  }
  positionwait() {
    this.setState({
      wait1: false
    })

  }

  render() {
    return (
      <Context.Consumer>{ctx => {
        
        if (ctx.value.chech_compLOgin==="notlogin") {
          return(
        <Redirect to="/"></Redirect>
          )
        }else if (ctx.value.chech_compLOgin==="login") {
          return (
            <div >
            <div>
          
          <NavCom />
      <div style={{ backgroundColor: '#F5F5F5' }}>


        <Row style={{ marginRight: '0px' }} id='filrow1cooo'>
        
          <Col xs={12} id='colpost23' >
           <div id='adver'>

<div id='abbcom'>

</div>
<div id='abbimg'>
{/* <img src={require('../assets/img/cro.jpg')} id='imgcom' /> */}
<img src={host + ctx.value.data4.File} id='imgcom' alt='img' />
</div>
<div id='abbtext'>
<div  style={{paddingBottom:'2%',display:'flex',justifyContent:'space-between',width:'100%'}}>
<div style={{paddingLeft:'2%',fontSize:'24px',paddingBottom:'2%',width:'100%'}}>{this.state.data4.company_name} </div>












</div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'20px'}}> 
<span style={{color:'#1A5491'}}id='nbhk'  >Office Name : </span> <span id='s2drv'  >    {this.state.data4.OfficeName} </span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk' >Company Name : </span>  <span id='s2drv'  >  {this.state.data4.company_name}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk'  > Name : </span>  <span id='s2drv'  >  {this.state.data4.name}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} id='nbhk'  > Position : </span> <span id='s2drv'  >   {this.state.data4.Position}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk'  > City : </span> <span id='s2drv'  >    {this.state.data4.ctiy} </span>   </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} id='nbhk'   > E-mail : </span> <span id='s2drv' >    {this.state.data4.email} </span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} id='nbhk'  > Phone : </span> <span id='s2drv' >  {this.state.data4.phone}</span>  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} id='nbhk'  > Number Of Team : </span>  <span id='s2drv' >  {this.state.data4.numberOfTeam}</span>  </div>
                    </div>


<div style={{width:'100%',display:'flex',justifyContent:'space-around',position:'relative',bottom:'35px'}}  >


                    <Component initialState={{ isShown: false }}>
                    {({ state, setState }) => (
                      <Pane >
                        <Dialog
                          isShown={state.isShown}
                          title="Edit Information"
                          confirmLabel="Edit"
                          onCloseComplete={() => setState({ isShown: false })}
                          onConfirm={() => {
                            setState({ isShown: false })
                            this.edit()
                         

                          }}>

                       
                          <div id='dd'>
                            <div> Company Name : </div>
                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="company_name"
                              required value={this.state.company_name} onChange={(e) => {
                                this.setState({ company_name: e.target.value })
                              }} />
                          </div>
                          <div id='dd'>
                            <div>Office Name : </div>
                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="OfficeName"
                              required value={this.state.OfficeName} onChange={(e) => {
                                this.setState({ OfficeName: e.target.value })
                              }}
                            />
                          </div>
                          <div id='dd'>
                            <div> Position : </div>
                            <TextInput
                              name="text-input-name" id='width'
                              placeholder="Position"
                              required value={this.state.Position} onChange={(e) => {
                                this.setState({ Position: e.target.value })
                              }} />

                          </div>
                          <div id='dd'>
                                  <div> City :</div>
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
                            <div> Edit photo</div>
                            <FilePicker id='width'
                              multiple


                              onChange={files =>
                                this.setState({ file: files[0], file1: files.length })
                              }
                            />

                          </div>
                          <div id='dd'>
                            <p > Name : </p>

                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="name" required
                              value={this.state.name} onChange={(e) => {
                                this.setState({ name: e.target.value })
                              }} />
                      
                          </div>
                          <div id='dd'>
                            <p > Phone : </p>

                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="phone" required
                              value={this.state.phone} onChange={(e) => {
                                this.setState({ phone: e.target.value })
                              }} />
                      
                          </div>

                     
                          <div id='dd'>
                            <div> Number Of Team</div>

                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="numberOfTeam" required
                              value={this.state.numberOfTeam} onChange={(e) => {
                                this.setState({ numberOfTeam: e.target.value })
                              }} />
                          </div>
                  
                        </Dialog>

                        <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
                      </Pane>
                    )}
                  </Component>



                  <Component initialState={{ isShown: false }}>
                    {({ state, setState }) => (
                      <Pane >
                        <Dialog
                          isShown={state.isShown}
                          title="Change Password"
                          width={'60%'}
                          // height={1000}
                          confirmLabel="Change"
                          onCloseComplete={() => setState({ isShown: false })}
                          onConfirm={() => {
                            setState({ isShown: false })
                            this.change() }} 
                             > 

                            <div id='dd'>
                            <div>Old Password :</div>
                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="Old password" required
                              value={this.state.password} onChange={(e) => {
                                this.setState({ password: e.target.value })
                              }} />
                              </div>

                              <div id='dd'>
                            <div>New Password :</div>
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







           </div>
           
    

          </Col>


        </Row>

      </div>

    </div>
     
            </div>
        
          )
        }else if (ctx.value.chech_compLOgin==="") {
          return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}  >
   
   <Lottie
                 options={{
                   animationData: jssson,
                 }}
                 style={{width:'300px',height:'300px'}}
               />
        </div>
          )
        }

    
      }}

      </Context.Consumer>
    );
  }
}
export default Company2;