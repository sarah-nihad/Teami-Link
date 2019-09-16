import React, { Component } from 'react';
import Context from './component/context';
// import NotFound from './component/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Si from './Dashbord/Si';
import Main from './Teami/Main';
import './assets/css/nav1.css';
import './assets/css/task.css';
import './assets/css/teami.css';
import LoginTeam from './Teami/LoginTeam';
import SignupTeam from './Teami/SignupTeam';
import Companysignup from './Teami/Companysignup';
import Profile from './component/Profile';
import Profile1 from './component/Profile1';
import HomeCom from './Teami/HomeCom';
import axios from 'axios';
import HomeUser from './component/HomeUser';
import Candidates from './component/Candidates';
import host from './component/host';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import {toaster } from 'evergreen-ui'
import Cookies from 'universal-cookie';
import UserProfile from './Teami/UserProfile';
import Company_profile from './Teami/Company_profile';
import Advertising from './Teami/Advertising';
import Admin_login from './Teami/Admin_login';
import ComLogin from './Teami/ComLogin';
import Warning from './component/Warning';
import Applidjob from './component/Applidjob';
import Accept from './component/Accept';
import finduser from './component/finduser';
import Forget_password from './Teami/Forget_password';
import Forget_pass from './Teami/Forget_pass';
import Activation from './component/Activation';
import Check_com from './component/Check_com';

const cookies = new Cookies();
class App extends Component {
  constructor() {
    super();
    this.state = {
      pass: '',
      mail: '',
      data: [],
      chech_userLOgin:'',
      chech_compLOgin:'',
      data1: [],
      data2: [],
      data3: [],
      data5: [],
      data4:[],
      data6:[],
      data8:[],
      data9:[],
      data10:[],
      data11:[],
      description: '',
      type_value: '',
      logo: '',
      category_id: '',
      rating: '',
      Image: '',
      ads:'',
      company_id:'',
      status:'',
      fdata1 :'',
      auth: null,
pro:[]
    }

  }
   componentDidMount() {

    if (cookies.get("token_admin")) {
      axios.get(host + 'api/v1/admin/auth/me', { headers: { token: cookies.get("token_admin") } })
      .then(res => {

        this.setState({
          pro: res.data.profile
        })
        // console.log(res.data.profile);
        
        if (res.data.profile.isActive === true) {
          this.setState({ auth: true })
        }
    
        
      })
      .catch(err => {
        this.setState({ auth: false })
       
        console.log('error:' + err);
      })
    }else{
      this.setState({ auth: false })
    }








var token= cookies.get("token") ;
var Usertoken= cookies.get("Usertoken") ;
if (Usertoken) {
  axios.get(host + 'api/v1/auth/profile', { headers: { token: cookies.get("Usertoken") } })
  .then(res => {
  
    this.setState({
      data: res.data.data,
      chech_userLOgin:'login',
    data1:res.data.data.experience,
    data2:res.data.data.training,

    })
 
  })
  .catch(err => {
    this.setState({
      chech_userLOgin:'notlogin',
    })
    console.log('error:' + err);
  })


  axios.get(host + 'api/v1/Advertising/me', { headers: { token: cookies.get("Usertoken") } })
  .then(res => {
  if (res.data.ads) {
    this.setState({
      data3: res.data.ads
    })
  }
 
//  console.log('data3',res.data);
 
  })
  .catch(err => {
    console.log('data3:' ,err);
  })




  axios.get(host + 'api/v1/user/job/', { headers: { token: cookies.get("Usertoken") } })
  .then(res => {
  
    this.setState({
      data8: res.data.result
    })
    // console.log(res.data.result);
  })
  .catch(err => {
    console.log('error:' + err);
  })



 
}
  
if (token) {


  axios.get(host + 'api/v1/Company/profile', { headers: { token: cookies.get("token") } })
  .then(res => {
  
    this.setState({
      data4: res.data.profile,
      chech_compLOgin:'login'

    })
    // console.log(res.data.data);

  })
  .catch(err => {
    console.log('error:' + err);
    this.setState({
      chech_compLOgin:'notlogin',
    })
  })




  axios.get(host + 'api/v1/Company/job/', { headers: { token: cookies.get("token") } })
  .then(res => {
  // console.log(res.data.result);
  let data=res.data.result

  let fdata=data.filter(d=>
    d.status==="Rejected"
    )

    // console.log('fdata',fdata);
    

    this.setState({
      data9:fdata
    })
    let fdata1=data.filter(d=>
      d.status==="Accepted "
      )
      // console.log('fdata1',fdata1);
      // console.log(fdata1);
      
      this.setState({
        data10: fdata1 
      })
      let fdata2=data.filter(d=>
        d.status==="Watting"
        )
     
        // console.log(fdata2);
        
        this.setState({
          data11: fdata2 
        })

  })
  .catch(err => {
    console.log('error:' + err);
  })





  axios.get(host + 'api/v1/Advertising/my', { headers: { token: cookies.get("token") } })
  .then(res => {
  
    this.setState({
      data6: res.data.result
    })
    // console.log(res.data.result);
  })
  .catch(err => {
    console.log('error:' + err);
  })



}
  
// }else
    
    //ckeck user type

    //if user type == user call users reqs

    //else user type== com call comp req







 

  
  



 
   }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Context.Provider value={{
            value: this.state,
            action: {
          
              aplay: (item)=> {
                let formData = new FormData();
                var headers = {
                  "Content-Type": "application/json",
                  token: cookies.get("Usertoken")
                };


                formData.append("company_id", item.company_id._id);
                formData.append("ads_id", item._id);



                axios({
                  url: host + `api/v1/user/job/`,
                  method: "POST",
                  data: formData,
                  headers: headers,

                })
                  .then(response => {
                    if (response.status === 200) {
                      toaster.success(' Done ');
                   this.componentDidMount()
                    }
                 //   window.location.reload();
                  })
                  .catch(function (error) {
                    console.log(error)
                    // if (error.response) {
                    //   console.log(error.response.data);
                    // }
                  });

              }
            }
          }}>
{/* <Ahmed />  */}
              <Route exact path='/' component={Main} />
              <Route path='/LoginTeam' component={LoginTeam} />
              <Route path='/SignupTeam' component={SignupTeam} />
              <Route  path='/Companysignup' component={Companysignup} />
            <Route exact path='/HomeUser' component={HomeUser} />
             <Route path='/UserProfile' component={UserProfile} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Profile1' component={Profile1} />
        <Route path='/HomeCom' component={HomeCom} /> 
        <Route path='/Company_profile' component={Company_profile} /> 
        <Route path='/Advertising' component={Advertising} /> 
        <Route path='/Forget_password' component={Forget_password} /> 
        <Route path='/Forget_pass' component={Forget_pass} /> 
        <Route path='/Applidjob' component={Applidjob} /> 
        <Route path='/Warning' component={Warning} /> 
        <Route path='/ComLogin' component={ComLogin} /> 
        <Route path='/Candidates' component={Candidates} /> 
        <Route path='/finduser' component={finduser} /> 
        <Route path='/Accept' component={Accept} /> 
            <Route path='/Admin_login' component={Admin_login} />   
            <Route path='/Activation' component={Activation} />   
            <Route path='/Check_com' component={Check_com} />  
            <Switch>
            <Route path='/Home' component={Si} />
            <Route path='/Change' component={Si} />
            <Route path='/User' component={Si} />
              <Route path='/Alluser' component={Si} />
              <Route path='/Alladvertise' component={Si} />
              <Route path='/Alljob' component={Si} />
              <Route path='/Addusers' component={Si} />
              <Route path='/Company' component={Si} />
              <Route path='/Allcompany' component={Si} />
           
            </Switch> 
          </Context.Provider>
        </BrowserRouter>



      </div>





    );
  }
}

export default App;
