import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import Select from 'react-select';
import host from '../component/host';
import Component from '@reactions/component';
import Context from '../component/context';
import { Row, Col,Form } from 'react-bootstrap';
import { SelectMenu, Button, TextInput, Dialog, Pane, toaster } from 'evergreen-ui';
// import State from './state.json';
import speciality from './speciality.json';
import position2 from '../json/position2.json';
import city1 from '../json/city1.json';
import state from '../json/state.json';
import Position from './position.json';
// import Category from './Category.json';
// import colleage from './colleage.json';
import SS from '../json/SS.json';
import Spe from '../json/Spe.json';
import Colg from '../json/Colg.json';
import Cate from '../json/Cate.json';
// import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Textarea } from 'evergreen-ui/commonjs/textarea';
const cookies = new Cookies();
const city = state;
var sp = speciality;
var s1 = Spe;
var pos = position2;
var st = state;
var cit = city1;
const Collage = Colg;
// var position = Position;
var position = SS;
const phamacuiticalCategory = Cate;




const options3 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },


]



class MainCom extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: [],
      data3: [],
      company_name: '',
      OfficeName: '',
      Position: '',
      ctiy: '',
      spin: true,
      all: '',
      body: '',
      title: '',
      timeofWork: '',
      position: '',
      experience: '',
      collage1: '',
      education: '',
      car: '',
      gender: '',
      city: '',
      Speciality: '',
      category: '',
      Cityinput: '',
      Positioninput: '',
      specialityofDoctor: '',
      wait1: true,
      wait: true,
      exp1: '',
      poss: '',
   
      car1: '',
      gender1: '',
      education1: '',
      category1: '',
    }
  }





  CityFun() {
    var arr=[];
       for (let i = 0; i < city.length; i++) {
      arr.push(
        <option value={city[i].name }>{city[i].name }</option>
      )
    }
    return arr
  }

  stateFun() {

    var arr = [{ value: 'st', label: 'city' }];
    for (let i = 0; i < st.length; i++) {
      arr.push(
        { value: st[i].name, label: st[i].name }
      )
    }
    return arr
  }

  positionFun() {
    var arr = [];
    for (let i = 0; i < Position.length; i++) {
      arr.push(
     
        <option value={position[i].name }>{position[i].name }</option>
      )
    }
    return arr
  }
  CollageFun() {
   
    var arr = [];
    for (let i = 0; i < Collage.length; i++) {
      arr.push(
      
        <option value={Collage[i].name }>{Collage[i].name }</option>
      )
    }
    return arr
  }
  categoryFun() {
   
    var arr = [];
    for (let i = 0; i < phamacuiticalCategory.length; i++) {
      arr.push(
        <option value={phamacuiticalCategory[i].name }>{phamacuiticalCategory[i].name }</option>
      )
    }
    return arr
  }
  spFun() {
   
    var arr = [];
    for (let i = 0; i < s1.length; i++) {
      arr.push(
        <option value={s1[i].name }>{s1[i].name }</option>
      )
    }
    return arr
  }
  
  add() {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    if (this.state.exp1 === 'Yes') {
      formData.append("collage", this.state.Collage1)
      formData.append("position", this.state.Positioninput)
      formData.append("category", this.state.category);
      // formData.append("speciality", this.state.Speciality);
if (this.state.Positioninput === 'Medical Supervisor' || this.state.Positioninput ==='Medical Representative' || this.state.Positioninput ==='Product Specialist'
|| this.state.Positioninput ==='Product Manager'  || this.state.Positioninput ==='General manager'|| this.state.Positioninput ==='Team Leader') {
  formData.append("speciality", this.state.Speciality);
}
else{
  formData.append("speciality", "all");
}


    }
    else if (this.state.exp1 === 'No') {
      formData.append("collage", "all")
      formData.append("position", "all")
      formData.append("category", "all");
      formData.append("speciality", "all");

    }
    formData.append("body", this.state.body);
    formData.append("title", this.state.title);
    formData.append("city", this.state.Cityinput);
    formData.append("education", this.state.education);
    formData.append("experience", this.state.experience);
    formData.append("gender", this.state.gender);
    formData.append("car", this.state.car);




    axios({
      url: host + `api/v1/Advertising/add`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Advertising has been added successfully');
      })
      .catch(function (error) {

        console.log(error.response.data.error)
        toaster.danger(error.response.data.error);
      });

  }

  expnwait() {
    this.setState({
      wait1: false
    })

  }
  positionwait() {
    this.setState({
      wait: false
    })

  }

  render() {
    return (
      <Context.Consumer>{ctx => {

        return (
          <div>
        
            <div style={{ backgroundColor: '#F5F5F5' }}>


              <Row style={{ marginRight: '0px' }} id='filrow12'>

                <Col md={8} lg={8} id='colpost23' >


                <Row style={{ marginRight: '0px',  }} id='userpro1'  >

<Col xs={12}>

  <div id='cardprofileuser' >


      <div id='backprofcoluser'>
   
      </div>
    <div id='name1user' >
    
           <img src={host + ctx.value.data4.File} id='img123user'alt='img' />

           </div>

    <div id='name1user' >
   
      {ctx.value.data4.company_name}
 
       </div>
    <div id='name22user' style={{color:'#1A5491'}} >
    <i className="fas fa-envelope"style={{fontSize:'15px'}}></i>   <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv_ddcd' >{ctx.value.data4.email}</span>  
        </div>
      <div id='name22user'style={ctx.value.data4.phone === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
      <i className="fas fa-phone-volume"></i> <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv_ddcd' > {ctx.value.data4.phone} </span> 
          </div>
  <div id='name22user'style={ctx.value.data4.ctiy === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
  <i className="fas fa-map-marker-alt" style={{fontSize:'14px'}} ></i>  <span style={{paddingLeft:'10px',width:'100%'}}  id='s2drv_ddcd' >  {ctx.value.data4.ctiy} </span>
          </div>
          
               

 
       

         <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingTop: '5%',
                        width: '100%', fontSize: '18px',paddingBottom:'5%'
                      }}>
                        Add Advertising

                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title="Add Advertising"
                                width={'60%'}

                                confirmLabel="Add"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.add()
                                }}
                              >

                                <div id='dd'>
                                  <div>Title :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="title"
                                    required value={this.state.title} onChange={(e) => {
                                      this.setState({ title: e.target.value })
                                    }} />
                                </div>
                                <div id='dd'>
                                  <div> Text :</div>
                                  <Textarea id='width'
                                    name="text-input-name"
                                    placeholder="text ..."
                                    required value={this.state.body} onChange={(e) => {
                                      this.setState({ body: e.target.value })
                                    }}
                                  />
                                </div>

                                <div id='dd'>
                                  <div> City :</div>
                                  <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ Cityinput: even.target.value })
                                                    }
                                                }}>
                                                <option value="Select"> city</option>

                                               {this.CityFun()}
                                            </Form.Control>
                                        </Form.Group>
                                </div>

                                <div id='dd'>
                                  <div> Gender :</div>

                                  <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ gender: even.target.value })
                                                    }
                                                }}>
                                                <option value="Select"> gender</option>
                                                <option value="Male"> Male</option>
                                                <option value="Female"> Female</option>
                                                <option value="all"> all</option>
                                            </Form.Control>
                                        </Form.Group>

                                </div>


                                <div id='dd'>
                                  <p > Education : </p>

                                  <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ education: even.target.value })
                                                    }
                                                }}>
                                                <option value="Select"> Education</option>
                                                <option value="student"> student</option>
                                                <option value="graduated"> graduated</option>
                                                <option value="all"> all</option>
                                            </Form.Control>
                                        </Form.Group>

                                </div>

                                <div id='dd'>
                                  <div> Have Car :</div>

                                  <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ car: even.target.value })
                                                    }
                                                }}>
                                                <option value="Select"> Select</option>
                                                <option value="Yes"> Yes</option>
                                                <option value="No"> No</option>
                                                <option value="all"> all</option>
                                            </Form.Control>
                                        </Form.Group>

                                </div>


                                <div id='dd'>
                                  <div> No. of  experience :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="title"
                                    required value={this.state.experience} onChange={(e) => {
                                      this.setState({ experience: e.target.value })
                                    }} />
                                </div>




                                <div id='dd'>
                                  <div> Experience </div>
                                  <Select
                                    onChange={(e) => {
                                      this.setState({ exp1: e.value })
                                      console.log(e.value);
                                      if (e.value === 'Yes') {
                                        setTimeout(() => {
                                          this.expnwait()
                                        }, 200);
                                      }


                                    }}
                                    options={options3}
                                  />
                                </div>


                                {!this.state.wait1 ? (

                                  <div>
                                    <div id='dd'>
                                      <p > Position:</p>


                                      <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'position') {
                                                        this.setState({ Positioninput: even.target.value })   
                                                    }
                                              
                                                    if (even.target.value === 'Medical Supervisor' ||even.target.value ==='Medical Representative' || even.target.value ==='Product Specialist'
                                                    ||even.target.value ==='Product Manager'  || even.target.value ==='General manager'|| even.target.value ==='Team Leader') {
                                                      setTimeout(() => {
                                                        this.positionwait()
                                                      }, 200);
                                                    }
                                                }}>
                                                <option value="Select"> position</option>

                                               {this.positionFun()}
                                            </Form.Control>
                                        </Form.Group>
                                    </div>

{!this.state.wait ?(

  <div id='dd'>
  <div> Speciality of Doctor:</div>

  <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ speciality: even.target.value })
                                                    }

                                               
                                                }}>
                                                <option value="Select"> Collage</option>

                                               {this.spFun()}
                                            </Form.Control>
                                        </Form.Group>

</div>
):(
  <div></div>
)

}

                                    <div id='dd'>
                                      <p > Collage : </p>

                                      <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'Select') {
                                                        this.setState({ Collage1: even.target.value })
                                                    }

                                               
                                                }}>
                                                <option value="Select"> Collage</option>

                                               {this.CollageFun()}
                                            </Form.Control>
                                        </Form.Group>

                                    </div>

                                    <div id='dd'>
                                      <div> Phamacuitical Category:</div>

                                      <Form.Group  >
                                            <Form.Control as="select" id='sel_sa'
                                                onChange={(even) => {
                                                    if (even.target.value !== 'phamacuiticalCategory') {
                                                        this.setState({ category: even.target.value })
                                                    }
                                             
                                                }}>
                                                <option value="Select"> phamacuitical Category</option>

                                               {this.categoryFun()}
                                            </Form.Control>
                                        </Form.Group>

                                    </div>

                                  </div>

                                ) : (<div></div>)}


                              </Dialog>

                              <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
                            </Pane>
                          )}
                        </Component>


  </div>






  <div  id='hide_f1' >

 
                      <Component initialState={{ isShown: false }}>
                        {({ state, setState }) => (
                          <Pane >
                            <Dialog
                              isShown={state.isShown}
                              title="Advanced Search"
                              confirmLabel="Search"
                              onCloseComplete={() => setState({ isShown: false })}
                              onConfirm={() => {
                                setState({ isShown: false })

                                window.location.href = `/finduser?Education=${this.state.education1}&car=${this.state.car1}&speciality=${this.state.specialityofDoctor}&position=${this.state.poss}&category=${this.state.category1}&gender=${this.state.gender1}&ctiy=${this.state.city}`;

                              }}



                            >

                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>


                                <Component
                                  initialState={{
                                    options: sp
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Speciality of Doctor"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          specialityofDoctor: selected
                                        })
                                        console.log(this.state.specialityofDoctor);

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
                                        this.setState({
                                          specialityofDoctor: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Speciality of Doctor'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>

                              </div>
                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: pos
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Position"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          poss: selected
                                        })
                                        console.log(this.state.poss);
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
                                        this.setState({
                                          poss: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Position'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>

                              </div>

                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: cit
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="City"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]

                                        this.setState({
                                          city: selected
                                        })
                                        console.log(this.state.city);
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
                                        this.setState({
                                          city: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'City '}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>

                              </div>

                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: ['Pharmacuitical Drugs', 'Food Suplement', 'Medical Device', 'Children Milk', 'Medical Instrument']
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Phamacuitical Category"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          category1: selected
                                        })
                                        console.log(this.state.category1);
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
                                        this.setState({
                                          category1: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Phamacuitical Category'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>

                              </div>
                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: ['student', 'Graduated']
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Education"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          education1: selected
                                        })
                                        console.log(this.state.education1);
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
                                        this.setState({
                                          education1: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Education'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>
                              </div>

                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: ['Male', 'Female']
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Gender"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          gender1: selected
                                        })
                                        console.log(this.state.gender1);


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
                                        this.setState({
                                          gender1: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Gender'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>
                              </div>
                              <div id='filtercomp' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Component
                                  initialState={{
                                    options: ['Yes', 'No']
                                      .map(label => ({ label, value: label })),
                                    selected: []
                                  }}
                                >
                                  {({ state, setState }) => (
                                    <SelectMenu
                                      height={180}
                                      width={280}
                                      isMultiSelect
                                      title="Car"
                                      options={state.options}
                                      selected={state.selected}
                                      onSelect={item => {
                                        const selected = [...state.selected, item.value]
                                        this.setState({
                                          car1: selected
                                        })
                                        console.log(this.state.car1);
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
                                        this.setState({
                                          car1: selectedItems
                                        })
                                      }}
                                    >
                                      <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Car'}</Button>
                                    </SelectMenu>
                                  )}
                                </Component>
                              </div>


                            </Dialog>

                            <Button style={{ width: '200px', display: 'flex', justifyContent: 'center' }} onClick={() => { setState({ isShown: true }) }}>  <span style={{paddingRight:'5px'}} >Advanced Search</span> <i className="fas fa-search"></i>   </Button>
                          </Pane>
                        )}
                      </Component>

                    </div>













  </div>

</Col>

</Row>



                </Col>
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
                <Col md={4} lg={3} id='colfilter' >

                  <div id='divfilter'  >
                    <span style={{ fontSize: '20px', fontWeight: '500', color: '#1A5491', paddingTop: '25px', paddingBottom: '25px' }}  >Advanced Search <i className="fas fa-search"></i>  </span>



                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: sp
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Speciality of Doctor"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                specialityofDoctor: selected
                              })
                              console.log(this.state.specialityofDoctor);

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
                              this.setState({
                                specialityofDoctor: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Speciality of Doctor'}</Button>
                          </SelectMenu>
                        )}
                      </Component>

                    </div>
                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: pos
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Position"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                poss: selected
                              })
                              console.log(this.state.poss);
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
                              this.setState({
                                poss: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Position'}</Button>
                          </SelectMenu>
                        )}
                      </Component>

                    </div>

                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: cit
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="City"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]

                              this.setState({
                                city: selected
                              })
                              console.log(this.state.city);
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
                              this.setState({
                                city: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'City '}</Button>
                          </SelectMenu>
                        )}
                      </Component>

                    </div>

                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: ['Pharmacuitical Drugs', 'Food Suplement', 'Medical Device', 'Children Milk', 'Medical Instrument']
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Phamacuitical Category"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                category1: selected
                              })
                              console.log(this.state.category1);
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
                              this.setState({
                                category1: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Phamacuitical Category'}</Button>
                          </SelectMenu>
                        )}
                      </Component>

                    </div>
                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: ['student', 'Graduated']
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Education"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                education1: selected
                              })
                              console.log(this.state.education1);
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
                              this.setState({
                                education1: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Education'}</Button>
                          </SelectMenu>
                        )}
                      </Component>
                    </div>

                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: ['Male', 'Female']
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Gender"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                gender1: selected
                              })
                              console.log(this.state.gender1);


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
                              this.setState({
                                gender1: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Gender'}</Button>
                          </SelectMenu>
                        )}
                      </Component>
                    </div>
                    <div id='filtercomp'>
                      <Component
                        initialState={{
                          options: ['Yes', 'No']
                            .map(label => ({ label, value: label })),
                          selected: []
                        }}
                      >
                        {({ state, setState }) => (
                          <SelectMenu
                            height={180}
                            width={280}
                            isMultiSelect
                            title="Car"
                            options={state.options}
                            selected={state.selected}
                            onSelect={item => {
                              const selected = [...state.selected, item.value]
                              this.setState({
                                car1: selected
                              })
                              console.log(this.state.car1);
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
                              this.setState({
                                car1: selectedItems
                              })
                            }}
                          >
                            <Button style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state.selectedNames || 'Car'}</Button>
                          </SelectMenu>
                        )}
                      </Component>
                    </div>
                    <div style={{ width: '100%', paddingTop: '15px', display: 'flex', justifyContent: 'center' }}  >
                      <div id='aplay' onClick={() => {
                        window.location.href = `/finduser?Education=${this.state.education1}&car=${this.state.car1}&speciality=${this.state.specialityofDoctor}&position=${this.state.poss}&category=${this.state.category1}&gender=${this.state.gender1}&ctiy=${this.state.city}`;

                      }}  >  Search </div>

                    </div>

                  </div>
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
export default MainCom;