import React, { Component } from 'react';
import Context from './context';
import { Row, Col,} from 'react-bootstrap';
import axios from 'axios';
import host from '../component/host';
import NavCom from '../Teami/NavCom';
import { Redirect} from 'react-router-dom';
import Lottie from 'lottie-react-web'
import jssson from '../assets/img/jssson.json';
// import { TextInput, Button} from 'evergreen-ui';
import '../assets/css/teami.css';
// import '@lottiefiles/lottie-player';
class Accept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      data3: [],

    }
  }

  
 
  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');


    axios.get(host + `api/v1/user/${myParam}`)
      .then(res1 => {
       
        this.setState({
          data1: res1.data.data,
          data2:res1.data.data.experience,
          data3:res1.data.data.training,

        })
        console.log(res1.data.data)
      })
      .catch(err => {
        console.log('error:' + err);
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
            <div>
            <NavCom />
            
            
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
                                  
                                         <img src={host + this.state.data1.File} id='img123user'alt='img' />
                                         </div>
                 
                                  <div id='name1user' >
                                 
                                    {this.state.data1.name}
                               
                                     </div>
                                  <div id='name22user' style={{color:'#1A5491'}} >
                                  <i className="fas fa-envelope"style={{fontSize:'15px'}}></i>   <span style={{paddingLeft:'10px',width:'100%'}}  >{this.state.data1.email}</span>  
                                      </div>
                                    <div id='name22user'style={ctx.value.data.phone === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                    <i className="fas fa-phone-volume"></i> <span style={{paddingLeft:'10px',width:'100%'}}  > {this.state.data1.phone} </span> 
                                        </div>
                                <div id='name22user'style={ctx.value.data.ctiy === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                <i className="fas fa-map-marker-alt" style={{fontSize:'14px'}} ></i>  <span style={{paddingLeft:'10px',width:'100%'}}  >  {this.state.data1.ctiy} </span>
                                        </div>
                                            <div id='name22user' style={ctx.value.data.BirthDate === 'NON' ?  {display:'none'} : { display:'',fontSize:'12px',color:'#1A5491'}}  >
                              <span style={{fontSize:'14px'}}> <i className="fas fa-calendar-alt"></i> </span> <span style={{paddingLeft:'10px'}}  >   {this.state.data1.BirthDate} </span>
                                                   </div>
                                                    <div id='name22user'style={ctx.value.data.experience_months === 0 ?  {display:'none'} : { display:'',fontSize:'12px'}}  >
                                           experience months :     {this.state.data1.experience_months}
                                                   </div>
            
                              
                                </div>
            
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
                     <span style={{color:'#1A5491'}} > University :  </span>     {this.state.data1.University}
                                   </div>
                                   </div>
                                  <div style={ctx.value.data.Collage === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                 
                                     {/* Information and Communication Engineering   */}
                                     <span style={{color:'#1A5491'}} > Collage :  </span>        {this.state.data1.Collage}
                                     </div>
            
                                     <div style={ctx.value.data.Education === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                        
                                     <span style={{color:'#1A5491'}} >        {this.state.data1.Education} </span>
            
                                          </div>
            
                                    <div style={ctx.value.data.DateofGarduation === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                    <span style={{color:'#1A5491'}} >  graduation date  :  </span> {this.state.data1.DateofGarduation}
                                  </div>
            
                                  <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
            
                                </div>
            
            
            
            
            
            
            
                                    <div id='eduction'  style={this.state.data1.experience < 1 ?  {display:'none'} : { display:'',color:'#9400dc'}}     > Experience
                                  
                            
                                  
                                                        </div>
            
                                                        {this.state.data2.map(((item, i) =>
                                                        <div key={i} style={{width:'100%'}}>
                                                        <div id='editesss' >
            
                                                        <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'13px' }}> 
                    
                                                        
                                                        <span style={{color:'rgb(109, 28, 148)'}} >  Company Name: </span>  <span style={{paddingLeft:'8px'}}> {item.CompanyName}</span> 
                    
                    
                     </div>
            
                                                         </div>
                                                         <div style={{ width: '100%', paddingLeft: '15px'}} > 
                                                         <span style={{color:'rgb(109, 28, 148)'}} >     Office Name : </span> <span style={{paddingLeft:'8px'}}>  {item.OfficeName}</span> 
                                                         </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                                        <span style={{color:'rgb(109, 28, 148)'}} >      Position : </span> <span style={{paddingLeft:'8px'}}>  {item.Position}</span> 
                                                         </div>
                                                 
                                                     
                                                         <div  style={item.SpecialityofDoctor.length < 1 ?  {display:'none'} : { display:'',width:'100%',paddingLeft:'15px'}}  >
                                                         <span style={{color:'rgb(109, 28, 148)'}} >       Speciality Of Doctor : </span>
                                                  
                                             <span style={{paddingLeft:'8px'}}>  {item.SpecialityofDoctor[0]} </span>,  
                                             <span> {item.SpecialityofDoctor[1]} </span> ,  <span> {item.SpecialityofDoctor[2]} </span>
                                                    
                                                         </div>
                                                         <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                                         <span style={{color:'rgb(109, 28, 148)'}} >  Phamacuitical Category: </span>  <span style={{paddingLeft:'8px'}}>   {item.PhamacuiticalCategory}</span> 
                                                         </div>
                                                         <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                                         <span style={{color:'rgb(109, 28, 148)'}} >      Time Of Work:  </span> <span style={{paddingLeft:'8px'}}>  {item.TimeofWork}</span> 
                                                         </div>
            
            
                                                 
                                                        <div style={item.EndWork==="in Work"?{ display:'none' }:{width: '100%', paddingLeft: '15px'}}  >   {item.Startingwork} - {item.EndWork}  </div>
                                            <div style={item.EndWork!=="in Work"?{ display:'none' }:{width: '100%', paddingLeft: '15px'}}  >   {item.Startingwork} - Present  </div>
            
            
                               
            
                                                        <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                                  
                                                      </div>
                                                             </div>
                                                    ))} 
            
                                                      <div id='eduction'  style={this.state.data1.training < 1 ?  {display:'none'} : { display:'',color:'#108863'}}   > Training
                                  
                               
                                  
                                                        </div>
                                                        {this.state.data3.map(((item, i) =>
                                                        <div key={i} style={{width:'100%'}} >
                                                        <div id='editesss' >
                                                        <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'15px' }}> 
                                                        <span style={{color:'rgb(59, 130, 81)'}} >  Place :  </span>   
                                                        <span style={{paddingLeft:'8px'}}>    {item.place} </span>
              
                                                        
                                                        
                                                         </div>
                                                         </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }} >        <span style={{color:'rgb(59, 130, 81)'}} >  Subject :  </span>   
                                                        <span style={{paddingLeft:'8px'}}>     {item.subject}  </span> </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }}  > {item.date} </div>
            
            
                                                     
            
            
                                  
                                                        <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                                  
                                                      </div>
                                                      </div>
                                                        ))}
            
            <div  style={this.state.data1.Notes === 'NON' ?  {display:'none'} : { display:'',fontSize:'14px',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                             {this.state.data1.Notes}
                                                                    </div>
                                                                    <div  style={this.state.data1.cv === 'NON' ?  {display:'none'} : { display:'',color:'blue',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                                                    <div  style={{cursor:'pointer',zIndex:'3'}}   onClick={() => {
                                        window.open( `https://sky-link.herokuapp.com/` + this.state.data1.cv,'_blank');
                                     
                
                                    }}>
                                           CV     
                                                   </div></div>
            
                                                      </div>
            
            
            
            
                                      </Col>
            
                            </Row>
            
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
        width={300}
        height={300}
      />
        </div>
          )
        }
      
      
      
      
      
      
      
      
      }}

      </Context.Consumer>
    );

  }
}
export default Accept;