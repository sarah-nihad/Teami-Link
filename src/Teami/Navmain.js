import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink,Link} from 'react-router-dom';
import axios from 'axios';
import host from '../component/host';
// import Autosuggest from 'react-autosuggest';
import Context from '../component/context';
import { Popover, Pane,Button } from 'evergreen-ui';
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



class Navmain extends React.Component {

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




            <Navbar expand="lg" id="navmaiteam">


              <Navbar.Brand style={{ paddingLeft: '3%' }}> 
               <img src={require('../assets/img/link.png')} id='img22' alt='offer' /></Navbar.Brand>

        
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} /> */}
              {/* <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }} > */}
                <Nav className="mr-auto">

                </Nav>



                <div id='itemnavteam' >
     

                <Popover
  content={
    <Pane
      width={200}
      height={200}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./LoginTeam' style={{textDecoration:'none'}}> User Login   </Link>  </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./ComLogin'style={{textDecoration:'none'}} > Company Login  </Link>  </div>


    </Pane>
  }
>
  <Button> Login </Button>
</Popover>
            

             
                    {/* <NavLink to='/LoginTeam' style={{textDecoration:'none'}} >
                    <Button> Log in </Button>
                    </NavLink> */}
                
           
                  <Popover
  content={
    <Pane
      width={200}
      height={200}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
     <div style={{paddingBottom:'10%'}} >
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./SignupTeam' style={{textDecoration:'none'}}> User Sign Up   </Link>  </div>
     </div>
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Companysignup'style={{textDecoration:'none'}} > Company Sign Up  </Link>  </div>


    </Pane>
  }
>
  <Button> Sign Up </Button>
</Popover>
   
              
             
                
               
              
                </div>




              {/* </Navbar.Collapse> */}

            </Navbar>
            <div className="container1">
              {/* <div style={{float:'right'}}> */}
<img src={require('../assets/img/Bg.png')} id='homeimgteam' alt='img'  />
{/* </div> */}
<div className="text-block">
  
  </div>

  <div id='text-block'>
   <div id='signteam' > <Link to='./SignupTeam'> User Sign Up  <i className="fas fa-user" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i>  </Link>  </div>
   
   <div id='signteam'> <Link to='./Companysignup'> Company Sign Up <i className="far fa-building" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i> </Link>  </div>
   
   </div>
 <div id='welcometext'>
Welcome to your professional community
</div> 


</div>







          </div>
        )
      }}

      </Context.Consumer>
    );
  }
}

export default Navmain;