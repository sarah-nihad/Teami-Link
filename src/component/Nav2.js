import React from 'react';
import { Navbar, Nav, InputGroup } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
import host from './host';
import Autosuggest from 'react-autosuggest';
import Context from './context';
import { Popover, Pane, Avatar } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


var languages = [];
var id = '';
const getSuggestions = value => {

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;


  return inputLength === 0 ? [] : languages.filter(lang =>

    lang.name.toLowerCase().slice(0, inputLength) === inputValue

  );
};

function getSuggestionValue(suggestion) {
  id = suggestion._id
  return suggestion.name

}
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



class Nav2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      data1: [],
      searchData: [],
      description: '',
      suggestions: [],
      value: '',

      type_value: '',
      type: '',
      uptime: '',
      logo: '',

      _id: '',
      name: '',
      location: '',
      category: ''

    }
  }



  onChange = (event, { newValue }) => {

    //   var name=newValue.split
    //  var res = name.split("  ");
    this.setState({
      value: newValue
    });

  };
  onSuggestionsFetchRequested = ({ value }) => {

    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {

    this.setState({
      suggestions: []
    });
  };


  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  onEnter(){
   
    
    var input = document.getElementById("teeeest");
  input.addEventListener("keyup", function(event) {
  
    if (event.keyCode === 13) {
     
      event.preventDefault();
     
      document.getElementById("iconcolor").click();
    }
  });
  }
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: '',
      value,
      width: '400px',
      onChange: this.onChange,

    };

    return (
      <Context.Consumer>{ctx => {
        return (
          <div >




            <Navbar expand="lg" id="navmai">


              <Navbar.Brand style={{ paddingLeft: '3%' }}>  <img src={require('../assets/img/link.png')} id='img22' alt='offer' /></Navbar.Brand>

              {/* <Navbar.Brand style={{ paddingLeft: '3%' }}>  <img src={require('../assets/img/with.png')} id='img223sss' alt='offer' /></Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
              <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }} >
                <Nav className="mr-auto">

                </Nav>



                <div id='itemnav' >
                  {/* <div id='searchwidth'>
                    <InputGroup id='teeeest'  onChange={() => {
this.onEnter()}}
                    >

                      <InputGroup.Prepend id='prep'  >

                        <InputGroup.Text id="basic-addon1" style={{ marginLeft: -39, cursor: "pointer" }} className='ss' onClick={() => {

                          if (id) {
                            window.location.href = `/profile?id=${id}`
                          }

                        }}>

                          <i className="fas fa-search" id='iconcolor'></i>
                        </InputGroup.Text>
                        <div style={{ color: '#000' }}>
                          <Autosuggest 
                            id="Autosuggest"

                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                          />
                        </div>
                      </InputGroup.Prepend>


                    </InputGroup>

                  </div> */}
                  <div id='ssteamnav'>
<div id='teamnav'>
<i className="fas fa-home"></i>
                  <NavLink to='./HomeUser'> Home </NavLink>
                  </div>

              
                  <div id='teamnav'>
                  <i className="fas fa-award"></i>
                    <NavLink to='./Benefits'> Benefits </NavLink>
</div>
          
                  <div id='teamnav'>
                  <i className="fas fa-user"></i>
                  <NavLink to='./UserProfile' >  Profile   </NavLink>
                  </div>
                  <div id='teamnav'>
                  <i className="fas fa-sign-out-alt"></i>
                  {/* <NavLink to='./' >  */}
                  <div style={{cursor:'pointer'}} onClick={()=>{ 
                  cookies.remove("token");
                  window.location.href= "/"
                }}>Logout </div> 
              
                    {/* </NavLink> */}
                  </div>

          </div>
                </div>




              </Navbar.Collapse>

            </Navbar>












          </div>
        )
      }}

      </Context.Consumer>
    );
  }
}

export default Nav2;