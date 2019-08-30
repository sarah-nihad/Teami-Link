import React, { Component } from 'react'
import host from '../component/host';
import axios from 'axios';
// import Foot1 from './Foot1';
import NavCom from './NavCom';
import Context from '../component/context';
import Cookies from 'universal-cookie';
import MainCom from './MainCom';
import { Link} from 'react-router-dom';
const cookies = new Cookies();
class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      password: '',
      phone: '',
      description: ''

    }
  }


  componentDidMount() {

    axios.get(host + 'api/v1/admin/pos', { headers: { token: cookies.get("token") } })
      .then(res1 => {
        this.setState({
          data: res1.data.pos
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })


  }


  render() {
    return (

      <Context.Consumer>{ctx => {
        return (
          <div >
      
              <NavCom />

        




          </div>

        )
      }}

      </Context.Consumer>
    );

  }
}
export default Benefits;