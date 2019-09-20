import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Context from '../component/context';
import { Popover, Pane,Button } from 'evergreen-ui';




var languages = [];
const getSuggestions = value => {

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;


  return inputLength === 0 ? [] : languages.filter(lang =>

    lang.name.toLowerCase().slice(0, inputLength) === inputValue

  );
};




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


    this.setState({
      value: newValue
    });

  };
  onSuggestionsFetchRequested = ({ value }) => {

    this.setState({
      suggestions: getSuggestions(value)
    });
  };


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
 
    return (
      <Context.Consumer>{ctx => {
        return (
          <div >




            <Navbar expand="lg" id="navmaiteam">


              <Navbar.Brand style={{ paddingLeft: '3%' }}> 
               <img src={require('../assets/img/link.png')} id='img22' alt='offer' /></Navbar.Brand>

        
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

       {ctx.value.chech_userLOgin && ctx.value.chech_userLOgin!=="notlogin" ?(
     <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
     <Link to='./HomeUser' style={{textDecoration:'none'}}> User Profile   </Link>  </div>
       ):(

        <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
        <Link to='./LoginTeam' style={{textDecoration:'none'}}> User Login   </Link>  </div>
       )}


     </div>
     <div style={{paddingBottom:'10%'}} >
       {ctx.value.chech_compLOgin && ctx.value.chech_compLOgin!=="notlogin" ?(
   <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./HomeCom'style={{textDecoration:'none'}} > Company Profile  </Link>  </div>
       ):(
        <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <Link to='./ComLogin'style={{textDecoration:'none'}} > Company Login  </Link>  </div>
       )}
      </div>
      {ctx.value.auth === false ? (
      <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Admin_login'style={{textDecoration:'none'}} > Admin Login  </Link>  </div>
       ) : (<React.Fragment>

<div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
      <Link to='./Home'style={{textDecoration:'none'}} > Dashbord   </Link></div>
       </React.Fragment>)}
      


    </Pane>
  }
>
  <Button> Login </Button>
</Popover>
            
                

  {ctx.value.chech_userLOgin && ctx.value.chech_userLOgin!=="notlogin"
  &&
  ctx.value.chech_compLOgin && ctx.value.chech_compLOgin!=="notlogin"
  ? (
  
<React.Fragment></React.Fragment>
  
):(


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
      {ctx.value.chech_userLOgin && ctx.value.chech_userLOgin!=="notlogin" ?(
       <React.Fragment></React.Fragment>
      ):(
 
        <div style={{paddingBottom:'10%'}} >
        <div id='stnav' style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}} > 
        <Link to='./SignupTeam' style={{textDecoration:'none'}}> User Sign Up   </Link>  </div>
        </div>
      )}

{ctx.value.chech_compLOgin && ctx.value.chech_compLOgin!=="notlogin" ?(
<React.Fragment></React.Fragment>
):(
 <div id='stnav'  style={{height:'30px',width:'150px',border:'1px solid blue',display:'flex',alignItems:'center',justifyContent:'center'}}  >
    <Link to='./Companysignup'style={{textDecoration:'none'}} > Company Sign Up  </Link>  </div>
)}

  </Pane>
}
>
<Button> Sign Up </Button>
</Popover>
)}
            
                </div>

              {/* </Navbar.Collapse> */}

            </Navbar>
            <div className="container1">
      
<img src={require('../assets/img/Bg.png')} id='homeimgteam' alt='img'  />

<div className="text-block">
 
  </div>

  <div id='text-block'>
  {ctx.value.chech_userLOgin && ctx.value.chech_userLOgin!=="notlogin" ?(
   <div id='signteam' > 
   <Link to='./HomeUser'> User Profile  <i className="fas fa-user" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i> 
    </Link>  </div>
  ):(
    <div id='signteam' > 
    <Link to='./SignupTeam'> User Sign Up  <i className="fas fa-user" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i> 
     </Link>  </div>
  )}
   {ctx.value.chech_compLOgin && ctx.value.chech_compLOgin!=="notlogin" ?(
   <div id='signteam'> 
   <Link to='./HomeCom'> Company Profile<i className="far fa-building" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i>
    </Link>  </div>
   ):(
    <div id='signteam'> 
    <Link to='./Companysignup'> Company Sign Up <i className="far fa-building" style={{color:'#1A5491',fontSize:'12px',paddingLeft:'5px'}}></i>
     </Link>  </div>
   )}
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