import React from 'react';
import '../assets/css/teami.css';
import axios from 'axios';
import host from '../component/host';
import DatePicker from "react-datepicker";
import Component from '@reactions/component';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import { SelectMenu, Button, TextInput, Dialog, Pane, FilePicker} from 'evergreen-ui';

import { Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class MainCom extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: [],
      data3: [],
      company_name:'',
      OfficeName:'',
      Position:'',
      ctiy:'',
      spin: true
    }
  }

  componentDidMount() {
    axios.get(host + 'api/v1/Company/profile', { headers: { token: cookies.get("token") } })
      .then(res => {
      
        this.setState({
          data: res.data.profile
 

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


              <Row style={{ marginRight: '0px' }} id='filrow1'>
              
                <Col md={8} lg={8} id='colpost23' >
                 <div id='adver'>

<div id='abbcom'>

</div>
 <div id='abbimg'>
 <Link to='./Company2'>
  {/* <img src={require('../assets/img/cro.jpg')} id='imgcom' />  */}
 
   <img src={host + this.state.data.File} id='imgcom' alt='img' />
    </Link> 
</div>
 <div id='abbtext'>

 <div style={{width:'100%',paddingLeft:'2%',fontSize:'24px'}}>{this.state.data.company_name}</div>
 <div style={{width:'100%',paddingLeft:'2%',fontSize:'20px'}}> {this.state.data.Position}  </div>
 <div style={{width:'100%',paddingLeft:'2%',fontSize:'18px'}}> {this.state.data.ctiy}  </div>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'5%',
width:'100%',paddingLeft:'2%',fontSize:'18px'}}>
 Add Advertising
 <Component initialState={{ isShown: false }}>
                            {({ state, setState }) => (
                              <Pane >
                                <Dialog
                                  isShown={state.isShown}
                                  title="Edit Personal Information"
                                  confirmLabel="Edit"
                                  onCloseComplete={() => setState({ isShown: false })}
                                  onConfirm={() => {
                                    setState({ isShown: false })


                                  }}
                                >
                                  <div id='dd'>
                                    <div> University :</div>
                                    <TextInput id='width'
                                      name="text-input-name"
                                      placeholder="University"
                                      required value={this.state.description} onChange={(e) => {
                                        this.setState({ description: e.target.value })
                                      }} />
                                  </div>
                                  <div id='dd'>
                                    <div>Collage :</div>
                                    <TextInput id='width'
                                      name="text-input-name"
                                      placeholder="Collage"
                                      required value={`${this.state.type1}`} onChange={(e) => {
                                        this.setState({ type1: e.target.value })
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




<div style={{width:'100%'}} id='filtermodel' > 
<Component initialState={{ isShown: false }}>
                            {({ state, setState }) => (
                              <Pane >
                                <Dialog
                                  isShown={state.isShown}
                                  title="Edit Personal Information"
                                  confirmLabel="Edit"
                                  onCloseComplete={() => setState({ isShown: false })}
                                  onConfirm={() => {
                                    setState({ isShown: false })


                                  }}
                                >
                                
                                <div id='filtercomp' style={{display:'flex',justifyContent:'center'}}>
<Component
  initialState={{
    options: ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']
          .map(label => ({ label, value: label })),
    selected: []
  }}
>
  {({ state, setState }) => (
    <SelectMenu
    height={180}
    width={280}
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={item => {
        const selected = [...state.selected, item.value]
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
      }}
    >
      <Button style={{width:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>
 
</div>

                                </Dialog>

                                <Button style={{width:'200px',display:'flex',justifyContent:'center'}} onClick={() => { setState({ isShown: true }) }}>  Filter </Button>
                              </Pane>
                            )}
                          </Component>

  </div>


                 </div>
                 
         

                </Col>
                <Col md={4}  lg={3} id='colfilter' >

<div id='divfilter'  >
<div id='filtercomp'>
<Component
  initialState={{
    options: ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']
          .map(label => ({ label, value: label })),
    selected: []
  }}
>
  {({ state, setState }) => (
    <SelectMenu
    height={180}
    width={280}
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={item => {
        const selected = [...state.selected, item.value]
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
      }}
    >
      <Button style={{width:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>
 
</div>
<div id='filtercomp'>
<Component
  initialState={{
    options: ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']
          .map(label => ({ label, value: label })),
    selected: []
  }}
>
  {({ state, setState }) => (
    <SelectMenu
    height={180}
    width={280}
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={item => {
        const selected = [...state.selected, item.value]
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
      }}
    >
      <Button style={{width:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>

</div>

<div id='filtercomp'>
<Component
  initialState={{
    options: ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']
          .map(label => ({ label, value: label })),
    selected: []
  }}
>
  {({ state, setState }) => (
    <SelectMenu
    height={180}
    width={280}
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={item => {
        const selected = [...state.selected, item.value]
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
      }}
    >
      <Button style={{width:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>

</div>

<div id='filtercomp'>
<Component
  initialState={{
    options: ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']
          .map(label => ({ label, value: label })),
    selected: []
  }}
>
  {({ state, setState }) => (
    <SelectMenu
    height={180}
    width={280}
      isMultiSelect
      title="Select multiple names"
      options={state.options}
      selected={state.selected}
      onSelect={item => {
        const selected = [...state.selected, item.value]
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
      }}
    >
      <Button style={{width:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>{state.selectedNames || 'Select multiple...'}</Button>
    </SelectMenu>
  )}
</Component>

</div>

<div id='aplay' > <Link to='./Filter'> Aplay  </Link>  </div>


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
export default MainCom;