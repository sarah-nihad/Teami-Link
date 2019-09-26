import React, { Component } from 'react'
// import { Redirect} from 'react-router-dom';
import axios from 'axios';
import host from '../component/host';
// import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';
import {Button} from 'evergreen-ui';

// import Cookies from 'universal-cookie';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      data2: [],
      email: '',
      password: '',
      phone: '',
      description: '',
      File:'',
      

    }
  }
  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');


    axios.get(host + `api/v1/user/${myParam}`)
      .then(res1 => {
       
        this.setState({
          data: res1.data.data,
          data1:res1.data.data.experience,
          data2:res1.data.data.training,

        })
        console.log(res1.data.data)
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }

 


  render() {
    // return (

    //   <Context.Consumer>{ctx => {

  return (
    <div >
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
                                  
                                         <img src={host + this.state.data.File} id='img123user'alt='img' />
                                         </div>
                 
                                  <div id='name1user' >
                                 
                                    {this.state.data.name}
                               
                                     </div>
                                  <div id='name22user' style={{color:'#1A5491'}} >
                                  <i className="fas fa-envelope"style={{fontSize:'15px'}}></i>   <span style={{paddingLeft:'10px',width:'100%'}}  >{this.state.data.email}</span>  
                                      </div>
                                    <div id='name22user'style={this.state.data.phone === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                    <i className="fas fa-phone-volume"></i> <span style={{paddingLeft:'10px',width:'100%'}}  > {this.state.data.phone} </span> 
                                        </div>
                                <div id='name22user'style={this.state.data.ctiy === 'NON' ?  {display:'none'} : { display:'',color:'#1A5491'} } >
                                <i className="fas fa-map-marker-alt" style={{fontSize:'14px'}} ></i>  <span style={{paddingLeft:'10px',width:'100%'}}  >  {this.state.data.ctiy} </span>
                                        </div>
                                            <div id='name22user' style={this.state.data.BirthDate === 'NON' ?  {display:'none'} : { display:'',fontSize:'12px',color:'#1A5491'}}  >
                              <span style={{fontSize:'14px'}}> <i className="fas fa-calendar-alt"></i> </span> <span style={{paddingLeft:'10px'}}  >   {this.state.data.BirthDate} </span>
                                                   </div>
                                                    <div id='name22user'style={this.state.data.experience_months === 0 ?  {display:'none'} : { display:'',fontSize:'12px'}}  >
                                           experience months :     {this.state.data.experience_months}
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
                                  <div style={this.state.data.University === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px', fontWeight: '500',paddingRight:'15px',fontSize:'16px'}}>
                               
                                   {/* Al-Nahrain University  */}
                     <span style={{color:'#1A5491'}} > University :  </span>     {this.state.data.University}
                                   </div>
                                   </div>
                                  <div style={this.state.data.Collage === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                 
                                     {/* Information and Communication Engineering   */}
                                     <span style={{color:'#1A5491'}} > College :  </span>        {this.state.data.Collage}
                                     </div>
            
                                     <div style={this.state.data.Education === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                        
                                     <span style={{color:'#1A5491'}} >        {this.state.data.Education} </span>
            
                                          </div>
            
                                    <div style={this.state.data.DateofGarduation === 'NON' ?  {display:'none'} : { display:'', width: '100%', paddingLeft: '15px'}}>
                                    <span style={{color:'#1A5491'}} >  graduation date  :  </span> {this.state.data.DateofGarduation}
                                  </div>
            
                                  <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
            
                                </div>
            
            
            
            
            
            
            
                                    <div id='eduction' style={this.state.data.experience < 1 ?  {display:'none'} : { display:''}}   > Experience
                                  
                            
                                  
                                                        </div>
            
                                                        {this.state.data1.map(((item, i) =>
                                                        <div key={i} style={{width:'100%'}}>
                                                        <div id='editesss' >
            
                                                        <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'13px' }}> 
                    
                                                        
                                                        <span style={{color:'#1A5491'}} >  Company Name: </span>  <span style={{paddingLeft:'8px'}}> {item.CompanyName}</span>    </div>
            
                                                         </div>
                                                         <div style={{ width: '100%', paddingLeft: '15px'}} > 
                                                         <span style={{color:'#1A5491'}} >     Office Name : </span> <span style={{paddingLeft:'8px'}}>  {item.OfficeName}</span> 
                                                         </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }} > 
                                                        <span style={{color:'#1A5491'}} >      Position : </span> <span style={{paddingLeft:'8px'}}>  {item.Position}</span> 
                                                         </div>
                                                 
                                                     
                                                         <div style={{width: '100%', paddingLeft: '15px'}}>
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
            
            
                                                        <div style={{ width: '100%', paddingLeft: '15px' }}  >   {item.Startingwork} -  {item.EndWork}  </div>
            
            
            
                               
            
                                                        <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                                  
                                                      </div>
                                  </div>
                                                    ))} 
            
                                                      <div id='eduction' style={this.state.data.training < 1 ?  {display:'none'} : { display:''}}     > Training
                                  
                               
                                  
                                                        </div>
                                                       {this.state.data2.map(((item, i) =>
                                                        <div key={i} style={{width:'100%'}} >
                                                        <div id='editesss' >
                                                        <div style={{ width: '100%', paddingLeft: '15px', fontSize: '16px', fontWeight: '500',paddingRight:'15px' }}> 
                                                        <span style={{color:'#1A5491'}} >  Place :  </span>   
                                                        <span style={{paddingLeft:'8px'}}>    {item.place} </span>
              
                                                        
                                                        
                                                         </div>
                                                         </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }} >        <span style={{color:'#1A5491'}} >  Subject :  </span>   
                                                        <span style={{paddingLeft:'8px',wordBreak:'break-all'}}>     {item.subject}  </span> </div>
                                                        <div style={{ width: '100%', paddingLeft: '15px' }}  > {item.date} </div>
            
            
                                                     
            
            
                                  
                                                        <div style={{width:'100%',borderBottom:'1px solid #efe2e2',paddingTop:'5%'}} >
                                  
                                                      </div>
                                                      </div>
                                                        ))} 
            
            <div  style={this.state.data.Notes === 'NON' ?  {display:'none'} : { display:'',fontSize:'14px',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                             {this.state.data.Notes}
                                                                    </div>
                                                                    <div  style={this.state.data.cv === 'NON' ?  {display:'none'} : { display:'',color:'blue',width:'100%',paddingLeft:'15px',paddingTop:'1%',paddingBottom:'1%'}} >
                                                                    <div  style={{cursor:'pointer',zIndex:'3'}}   onClick={() => {
                                        window.open( host + this.state.data.cv,'_blank');
                                     
                
                                    }}>
                                     <Button marginRight={12} iconBefore="manual" intent="none" style={{background:'#47a684',color:'#fff'}} >Show CV</Button>
                                                   </div></div>
            
                                                      </div>
            
            
            
            
                              </Col>
            
                            </Row>
            
                          </div>


    
    </div>

//   )
// }


      
    //   }}

    //   </Context.Consumer>
    );

  }
}
export default User;