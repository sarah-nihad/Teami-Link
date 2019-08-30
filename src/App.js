import React, { Component } from 'react';
import Context from './component/context';
import NotFound from './component/notfound';
import Si from './Dashbord/Si';
import Main from './Teami/Main';
import './assets/css/nav1.css';
import './assets/css/task.css';
import './assets/css/teami.css';
import LoginTeam from './Teami/LoginTeam';
import SignupTeam from './Teami/SignupTeam';
import Companysignup from './Teami/Companysignup';
import Profile from './component/Profile';
import HomeCom from './Teami/HomeCom';
import axios from 'axios';
import HomeUser from './component/HomeUser';
import host from './component/host';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import UserProfile from './Teami/UserProfile';
import Company2 from './Teami/Company2';
import Benefits from './Teami/Benefits';
import Filter from './Teami/Filter';
import ComLogin from './Teami/ComLogin';
const cookies = new Cookies();
class App extends Component {
  constructor() {
    super();
    this.state = {
      pass: '',
      mail: '',
      data: [],
      datas: [],
      data2: [],
      data3: [],
      data5: [],
      description: '',
      type_value: '',
      logo: '',
      category_id: '',
      rating: '',
      Image: '',
      auth: null,
      spin: true,
      spin1: true,
      spin2: true,
      spin3: true,
      spin4: true,
      redirect: false,
    }

  }
  // componentDidMount() {

  //   if (cookies.get("token")) {
  //     axios.get(host + 'api/v1/admin/checkadmin', { headers: { token: cookies.get("token") } })
  //     .then(res => {

  //       if (res.data.isAdmin === true) {
  //         this.setState({ auth: true })
  //       }
  //     })
  //     .catch(err => {
  //       this.setState({ auth: false })
       
  //       console.log('error:' + err);
  //     })
  //   }else{
  //     this.setState({ auth: false })
  //   }


  //   axios.get(host + 'api/v1/banner/')
  //     .then(res => {
  //     //  console.log(res.data.banner)
  //       if (res.status === 200) {
  //         this.setState({
  //           datas: res.data.banner,
  //           spin: false
  //         })
  //       }
  //     }).catch(err => {
  //       console.log('error:' + err)
  //       this.setState({
  //         spin: false
  //       });
  //     })


  //   axios.get(host + 'api/v1/card/new')
  //     .then(res => {
  //       this.setState({
  //         data: res.data.new,
  //         spin1: false
  //       })

  //     })
  //     .catch(err => {
  //       console.log('error:' + err);
  //       this.setState({

  //         spin1: false
  //       })
  //     })

  //   axios.get(host + 'api/v1/card/special')
  //     .then(res => {
  //       // console.log(res.data.hot_deal)
  //       this.setState({
  //         data3: res.data.hot_deal,
  //         spin2: false
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error:' + err);
  //       this.setState({

  //         spin2: false
  //       })
  //     })


  //   axios.get(host + 'api/v1/recommend/')
  //     .then(res => {
  //       // console.log(res.data.rec)
  //       this.setState({
  //         data2: res.data.rec,
  //         spin3: false
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error:' + err);
  //       this.setState({

  //         spin3: false
  //       })
  //     })


  //   axios.get(host + 'api/v1/cat/visited')
  //     .then(res => {
  //       // console.log(res.data.visited)
  //       this.setState({
  //         data5: res.data.visited,
  //         spin4: false
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error:' + err);
  //       this.setState({

  //         spin4: false
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Context.Provider value={{
            value: this.state,
            action: {
            }
          }}>

<Route exact path='/' component={Main} />
<Route path='/LoginTeam' component={LoginTeam} />
<Route path='/SignupTeam' component={SignupTeam} />
          <Route  path='/Companysignup' component={Companysignup} />
            <Route exact path='/HomeUser' component={HomeUser} />
             <Route path='/UserProfile' component={UserProfile} />
            <Route path='/Profile' component={Profile} />
        <Route path='/HomeCom' component={HomeCom} /> 
        <Route path='/Company2' component={Company2} /> 
        <Route path='/Benefits' component={Benefits} /> 
        <Route path='/Filter' component={Filter} /> 
        <Route path='/ComLogin' component={ComLogin} /> 
            {/* <Route path='/NotFound' component={NotFound} />    */}
            {/* <Switch> */}
              {/* <Route path='/Home' component={Si} /> */}
              {/* <Route path='/Addsection' component={Si} />
              <Route path='/Addcompany' component={Si} />
              <Route path='/Addbanner' component={Si} />
              <Route path='/Addrecomnd' component={Si} />
              <Route path='/Addprofile' component={Si} />
              <Route path='/Addcard' component={Si} />
              <Route path='/Resturant' component={Si} />
              <Route path='/Section1' component={Si} />
              <Route path='/Category1' component={Si} />
              <Route path='/Addusers' component={Si} />
              <Route path='/Allcard' component={Si} />
              <Route path='/Allbanner' component={Si} />
              <Route path='/Description' component={Si} />
              <Route path='/Ratingdescription' component={Si} />
              <Route path='/Addpos' component={Si} />
              <Route path='/Allrecomnd' component={Si} />
            </Switch> */}
          </Context.Provider>
        </BrowserRouter>



      </div>





    );
  }
}

export default App;
