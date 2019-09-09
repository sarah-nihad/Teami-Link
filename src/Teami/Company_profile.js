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
// import { Link} from 'react-router-dom';
// import Select from 'react-select';
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
    var arr = [{ value: 'State', label: 'State' }];
    for (let i = 0; i < city.length; i++) {
      arr.push(
        { value: city[i].name, label: city[i].name }
      )
    }
    return arr
  }


  componentDidMount() {
    axios.get(host + 'api/v1/Company/profile', { headers: { token: cookies.get("token") } })
      .then(res => {
      
        this.setState({
          data4: res.data.profile
 

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
    formData.append("ctiy", this.state.ctiy);
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
        // console.log(error.response.data)
        if (error.response) {
        }
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


        <Row style={{ marginRight: '0px' }} id='filrow1'>
        
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
<div style={{paddingLeft:'2%',fontSize:'24px',paddingBottom:'2%',width:'50%'}}>{ctx.value.company_name} </div>












</div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'20px'}}> 
<span style={{color:'#1A5491'}} >Office Name : </span>  {ctx.value.data4.OfficeName} </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} >Company Name : </span>  {ctx.value.data4.name} </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} > Position : </span> {ctx.value.data4.Position} </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} > Ctiy : </span> {ctx.value.data4.ctiy}</div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} > E-mail : </span> {ctx.value.data4.email}  </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> 
<span style={{color:'#1A5491'}} > Phone : </span> {ctx.value.data4.phone} </div>
<div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
<span style={{color:'#1A5491'}} > Number Of Team : </span> {ctx.value.data4.numberOfTeam} </div>
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
                            <div> company_name : </div>
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
                            <div> ctiy </div>
                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="ctiy" required
                              value={this.state.ctiy} onChange={(e) => {
                                this.setState({ ctiy: e.target.value })
                              }} />
                          </div>


                          <div id='dd'>
                            <div> edit photo</div>
                            <FilePicker id='width'
                              multiple


                              onChange={files =>
                                this.setState({ file: files[0], file1: files.length })
                              }
                            />

                          </div>
                          <div id='dd'>
                            <p > name : </p>

                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="name" required
                              value={this.state.name} onChange={(e) => {
                                this.setState({ name: e.target.value })
                              }} />
                      
                          </div>
                          <div id='dd'>
                            <p > phone : </p>

                            <TextInput id='width'
                              name="text-input-name"
                              placeholder="phone" required
                              value={this.state.phone} onChange={(e) => {
                                this.setState({ phone: e.target.value })
                              }} />
                      
                          </div>

                     
                          <div id='dd'>
                            <div> number Of Team</div>

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







           </div>
           
    

          </Col>


        </Row>

      </div>

    </div>
     
            </div>
        
          )
        }else if (ctx.value.chech_compLOgin==="") {
          return(
            <h1>waiting</h1>
          )
        }

    
      }}

      </Context.Consumer>
    );
  }
}
export default Company2;