import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import Select from 'react-select';
import host from '../component/host';
import Component from '@reactions/component';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import { SelectMenu, Button, TextInput, Dialog, Pane, toaster } from 'evergreen-ui';
import State from './state.json';
import speciality from './speciality.json';
import position2 from '../json/position2.json';
import city1 from '../json/city1.json';
import state from '../json/state.json';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Textarea } from 'evergreen-ui/commonjs/textarea';
const cookies = new Cookies();
const city = State;
var sp = speciality;
var pos = position2;
var st = state;
var cit = city1;
const options = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'all', label: 'all' },

]
const options1 = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'all', label: 'all' },

]

const options2 = [
  { value: 'student', label: 'student' },
  { value: 'graduated', label: 'graduated' },
  { value: 'all', label: 'all' },

]

const options3 = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },


]
const options4 = [
  { value: 'Medicine', label: 'Medicine' },
  { value: 'Veternary', label: 'Veternary' },
  { value: 'Biology Scince', label: 'Biology Scince' },
  { value: 'Chemistry scince', label: 'Chemistry scince' },
  { value: 'Physics Scince', label: 'Physics Scince' },
  { value: 'Business Adminsteation', label: 'Business Adminsteation' },
  { value: 'Economics', label: 'Economics' },

]

const options5 = [
  { value: 'Medical Representative', label: 'Medical Representative' },
  { value: 'Sales Representative', label: 'Sales Representative' },
  { value: 'Driver', label: 'Driver' },
  { value: 'Collector', label: 'Collector' },
  { value: 'Medical Supervisor', label: 'Medical Supervisor' },
  { value: 'Sales Supervisor', label: 'Sales Supervisor' },
  { value: 'Human Resource', label: 'Human Resource' },
  { value: 'Accountant', label: 'Accountant' },
  { value: 'Team Leader', label: 'Team Leader' },
  { value: 'Educator', label: 'Educator' },
  { value: 'Data Entry', label: 'Data Entry' },
  { value: 'Warehouse', label: 'Warehouse' },
  { value: 'Merchendiser', label: 'Merchendiser' },
  { value: 'Product Specialist', label: 'Product Specialist' },
  { value: 'Product Manager', label: 'Product Manager' },
  { value: 'General manager', label: 'General manager' },


]


const options6 = [
  { value: 'Pharmacuitical Drugs', label: 'Pharmacuitical Drugs' },
  { value: 'Food Suplement', label: 'Food Suplement' },
  { value: 'Medical Device', label: 'Medical Device' },
  { value: 'Children Milk', label: 'Children Milk' },
  { value: 'Medical Instrument', label: 'Medical Instrument' },

]

const options7 = [
  { value: 'Internal Medicine', label: 'Internal Medicine' },
  { value: 'Endocrinologist', label: 'Endocrinologist' },
  { value: 'Cardiologist', label: 'Cardiologist' },
  { value: 'Gastroenterologist', label: 'Gastroenterologist' },
  { value: 'Obstetrics and Gynecologist', label: 'Obstetrics and Gynecologist' },
  { value: 'Ophthalmologist', label: 'Ophthalmologist' },
  { value: 'Pediatrics', label: 'Pediatrics' },
  { value: 'Neurologist', label: 'Neurologist' },
  { value: 'Nephrologist', label: 'Nephrologist' },
  { value: 'Oncologist', label: 'Oncologist' },
  { value: 'Urologist', label: 'Urologist' },
  { value: 'Dermatologist', label: 'Dermatologist' },
  { value: 'Allergy and immunology', label: 'Allergy and immunology' },
  { value: 'Hematologist', label: 'Hematologist' },
  { value: 'General Practitioner', label: 'General Practitioner' },
  { value: 'Emergency medicine', label: 'Emergency medicine' },
  { value: 'Psychiatric', label: 'Psychiatric' },
  { value: 'Radiologist', label: 'Radiologist' },
  { value: 'Dentist', label: 'Dentist' },
  { value: 'Family medicine', label: 'Family medicine' },
  { value: 'Sports medicine', label: 'Sports medicine' },
  { value: 'Anesthesia', label: 'Anesthesia' },
  { value: 'Rheumatology', label: 'Rheumatology' },
  { value: 'Hepatology', label: 'Hepatology' },
  { value: 'Anesthesiology & Recovery', label: 'Anesthesiology & Recovery' },
  { value: 'Nuclear Medicine', label: 'Nuclear Medicine' },
  { value: 'Speech-Language', label: 'Speech-Language' },
  { value: 'Pediatric surgery', label: 'Pediatric surgery' },
  { value: 'plastic surgery', label: 'plastic surgery' },
  { value: 'Urology surgery', label: 'Urology surgery' },
  { value: 'Neurosurgery', label: 'Neurosurgery' },
  { value: 'Cardiac surgery', label: 'Cardiac surgery' },
  { value: 'Vascular surgery', label: 'Vascular surgery' },
  { value: 'Oncology', label: 'Oncology' },
  { value: 'Ear, nose and throat (ENT) surgery', label: 'Ear, nose and throat (ENT) surgery' },
  { value: 'Orthopedics', label: 'Orthopedics' },
  { value: 'brain surgery', label: 'brain surgery' },
  { value: 'General Surgery', label: 'General Surgery' },

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

    var arr = [{ value: 'city', label: 'city' }];
    for (let i = 0; i < city.length; i++) {
      arr.push(
        { value: city[i].name, label: city[i].name }
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
            {/* {!this.state.spin?( */}
            <div style={{ backgroundColor: '#F5F5F5' }}>


              <Row style={{ marginRight: '0px' }} id='filrow12'>

                <Col md={8} lg={8} id='colpost23' >
                  <div id='adver'>

                    <div id='abbcom'>

                    </div>
                    <div id='abbimg'>
                      <Link to='./Company_profile'>
                        {/* <img src={require('../assets/img/cro.jpg')} id='imgcom' />  */}

                        <img src={host + ctx.value.data4.File} id='imgcom' alt='img' />
                      </Link>
                    </div>
                    <div id='abbtext'>

                      <div style={{ width: '100%', paddingLeft: '2%', fontSize: '24px' }}>{ctx.value.data4.company_name}</div>
                      <div style={{ width: '100%', paddingLeft: '2%', fontSize: '20px' }}> {ctx.value.data4.Position}  </div>
                      <div style={{ width: '100%', paddingLeft: '2%', fontSize: '18px' }}> {ctx.value.data4.ctiy}  </div>

                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '5%',
                        width: '100%', paddingLeft: '2%', fontSize: '18px'
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
                                  <Select
                                    onChange={(e) => {
                                      if (e.value !== 'city') {
                                        this.setState({ Cityinput: e.value })
                                        console.log(e.value);
                                      }
                                    }}
                                    defaultValue={this.stateFun()[0]}
                                    options={this.stateFun()}
                                  />
                                </div>

                                <div id='dd'>
                                  <div> Gender :</div>

                                  <Select
                                    onChange={(e) => {
                                      this.setState({ gender: e.value })
                                      console.log(e.value);
                                    }}
                                    options={options1}
                                  />

                                </div>


                                <div id='dd'>
                                  <p > Education : </p>

                                  <Select
                                    onChange={(e) => {
                                      this.setState({ education: e.value })
                                      console.log(e.value);
                                    }}
                                    options={options2}
                                  />

                                </div>

                                <div id='dd'>
                                  <div> Have Car :</div>

                                  <Select
                                    onChange={(e) => {
                                      this.setState({ car: e.value })
                                      console.log(e.value);
                                    }}
                                    options={options}
                                  />

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


                                      <Select
                                        onChange={(e) => {
                                          this.setState({ Positioninput: e.value })
                                          console.log(e.value);
                                          if (e.value === 'Medical Supervisor' || e.value ==='Medical Representative' || e.value ==='Product Specialist'
                                          || e.value ==='Product Manager'  || e.value ==='General manager'|| e.value ==='Team Leader') {
                                            setTimeout(() => {
                                              this.positionwait()
                                            }, 200);

                                          }
                                        }}
                                        
                                        options={options5}
                                      />
                                    </div>

{!this.state.wait ?(

  <div id='dd'>
  <div> Speciality of Doctor:</div>

  <Select
    onChange={(e) => {
      this.setState({ Speciality: e.value })
      console.log(e.value);
    }}
    options={options7}
  />

</div>
):(
  <div></div>
)

}




                                    <div id='dd'>
                                      <p > Collage : </p>

                                      <Select
                                        onChange={(e) => {
                                          this.setState({ Collage1: e.value })
                                          console.log(e.value);
                                        }}
                                        options={options4}
                                      />

                                    </div>


                            

                                    <div id='dd'>
                                      <div> Phamacuitical Category:</div>

                                      <Select
                                        onChange={(e) => {
                                          this.setState({ category: e.value })
                                          console.log(e.value);
                                        }}
                                        options={options6}
                                      />

                                    </div>




                                  </div>

                                ) : (<div></div>)}














                              </Dialog>

                              <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
                            </Pane>
                          )}
                        </Component>




                      </div>
                    </div>




                    <div style={{ width: '100%' }} id='filtermodel' >
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