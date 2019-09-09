import React from 'react';
import { Row,} from 'react-bootstrap';

import {  Button, toaster,TextInput} from 'evergreen-ui';

import axios from 'axios';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Addpos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      description: '',
      file: [],
      date: '',
      startDate: new Date(),
      rest: '',
      location: '',
      section_id: '',
      category_id: '',
      cards_id: '',
      allCate: [],
      wait: true,
      evals: '',
      image: '',
      menu_id: '',
      pos_id: ''
    }

  }



 
  change() {
    var password = this.state.password;
    var passwordNew = this.state.passwordNew;
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token_admin")
    };
    formData.append("password", password);
    formData.append("passwordNew", passwordNew);
    axios({
      url: host+`api/v1/admin/auth/chnagepassword`,
      method: "PUT",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Password has been changed successfully');
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
        }
      });

  }

  












  render() {
    return (




      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'80vh'}} >



        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">


                                 <div id='dd'>
                                  <div>Old password :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="old password" required
                                    value={this.state.password} onChange={(e) => {
                                      this.setState({ password: e.target.value })
                                    }} />
                                    </div>

                                    <div id='dd'>
                                  <div>New password :</div>
<TextInput id='width'
                                    name="text-input-name"
                                    placeholder="New password" required
                                    value={this.state.passwordNew} onChange={(e) => {
                                      this.setState({ passwordNew: e.target.value })
                                    }} />
          </div>
  
          <Button variant="outline-danger" id='blogin'
                onClick={() => this.change()}>Change</Button>


      
            </Row>
        
        </div>

  







    );
  }
}

export default Addpos;

