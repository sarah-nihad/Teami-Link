import React, { Component } from 'react';
import Context from './context';
import { Row, Col,} from 'react-bootstrap';
import axios from 'axios';
import host from '../component/host';
import NavCom from '../Teami/NavCom';
import { Redirect} from 'react-router-dom';
// import { TextInput, Button} from 'evergreen-ui';
import Cookies from 'universal-cookie';
import '../assets/css/teami.css';
const cookies = new Cookies();
class finduser extends Component {
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
    const myParam = urlParams.get('Education');
    const myParam1 = urlParams.get('car');
    const myParam2 = urlParams.get('speciality');
    const myParam3 = urlParams.get('position');
    const myParam4 = urlParams.get('category');
    const myParam5 = urlParams.get('gender');
    const myParam6 = urlParams.get('ctiy');
console.log(myParam);

    axios.get(host + `api/v1/Company/users?Education=${myParam}&car=${myParam1}&speciality=${myParam2}&position=${myParam3}&category=${myParam4}&gender=${myParam5}&ctiy=${myParam6}`
     , { headers: { token: cookies.get("token") } }  )
      .then(res1 => {
       
        this.setState({
          data1: res1.data
       

        })
        console.log(res1.data)
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
            <div >
        
        <div>
<NavCom />



<div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>


{this.state.data1.map(((item, i) =>
                      <Row  key={i}   style={{ marginRight: '0px', width: '80%',boxShadow:'rgba(140, 140, 255, 0.9) 0px 0px 3px 1px',minHeight:'130px',marginBottom:'2%',cursor:'pointer',marginTop:'5%' }}
                       id='user_row'  onClick={() => {
                        window.location.href = `/Accept?id=${item._id}`;

                      }}  >

                        <Col  xs={12}    lg={2} id='colusercc'  >
                      <div id='imguse1'  >   <img src={host + item.File} style={{ width: '100px', height: '100px', borderRadius: '300px' }} alt='img'  /></div> 
                        </Col>



                        <Col  xs={12}    lg={4} id='colusercc' >
                          <div  key={i} style={{ width: '100%' }}   >


                            <div id='name22user2'  > Name :       {item.name}  </div>
                            <div id='name22user2' style={{ color: '#1A5491' }} >
                              <i className="fas fa-envelope" style={{ fontSize: '15px' }}></i>   <span style={{ paddingLeft: '10px', width: '100%' }}  >{item.email}</span>
                            </div>
                          </div>


                        </Col>

                        <Col id='colusercc'  xs={12}    lg={3}  >
                        <div  key={i} style={{ width: '100%' }}   >
                          <div id='name22user2' style={{ color: '#1A5491' }} >
                            <i className="fas fa-phone-volume"></i> <span style={{ paddingLeft: '10px', width: '100%' }}  > {item.phone} </span>
                          </div>
                          <div id='name22user2' style={{ color: '#1A5491' }} >
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '14px' }} ></i>  <span style={{ paddingLeft: '10px', width: '100%' }}  >  {item.ctiy} </span>
                          </div>   </div>
                        </Col>

                        <Col  id='colusercc' xs={12}   lg={3}  >
                        <div  key={i} style={{ width: '100%' }}   >
                          <div id='name22user2' style={{ color: '#1A5491' }} >
                            <span style={{ width: '100%' }}  >  Education  :   {item.Education} </span>
                          </div> 
                          <div id='name22user2' style={{ color: '#1A5491' }} >
                            <span style={{ width: '100%' }}  >  gender  :   {item.gender} </span>
                          </div> 
                           </div>
                        </Col>

                      </Row>
                    ))}


        


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
export default finduser;