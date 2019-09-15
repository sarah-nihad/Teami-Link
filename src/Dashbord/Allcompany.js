import React from 'react';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
// import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie';
import DatePicker from "react-datepicker";
import {  Button, Dialog, Pane, toaster} from 'evergreen-ui';
import Component from '@reactions/component';
import moment from 'moment';
 const cookies =new Cookies();


class Allcompany extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      name:'',
      email:'',
      phone:'',
      licenseDate:'',
      address:'', 
      uptime:'',
      page_name:'',
      location:'',
      description:'',
      starts:'',
      category_id:'',
      rating:'',
      has_more:false,
      startDate: new Date(),
      page:1,
      limit:50

    }
    this.getData =this.getData.bind(this)
    this.btnClick =this.btnClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(date) {
    this.setState({
      startDate: date,
      date,
   
    });
  
  
  }


  getData(p){
    var pageckeck;
if (p) {
  pageckeck=p;
} else {
  pageckeck=this.state.page;
}

    console.log('p',pageckeck)
    // const {page} = this.state
    const {limit} = this.state

    axios.get( host+`api/v1/admin/companies?page=${pageckeck}&limit=${limit}` ,{headers:{ token: cookies.get("token_admin") }}   )
    .then(res =>{
        console.log(res.data)
        this.setState({
            data:res.data.data,
            has_more:res.data.has_more,
            // loading:false
        })
        if (res.data.has_more) {
          document.getElementById('nextBtm').disabled=false
       
        }
        if (this.state.page===1) {
          document.getElementById('prevBtm').disabled=true
        }
        if (this.state.page!==1) {
          document.getElementById('prevBtm').disabled=false
        }
    })
    .catch(e =>{
        console.error(e);
        this.setState({
            data:[],
            // loading:false
        })
    })
}



edit(_id) {
  var date=moment(this.state.date).format("YYYY-MM-DD");
  let formData = new FormData();
  var headers = {
    "Content-Type": "application/json",
    token: cookies.get("token_admin")
  };
  formData.append("license",date);

  axios({
    url: host+`api/v1/admin/companies/${_id}`,
    method: "PUT",
    data: formData,
    headers: headers
  })
    .then(response => {
      toaster.success('info has been edit successfully');
    })
    .catch(function (error) {
      if (error.response) {
      }
    });

}



btnClick(e){
  const page =e
  console.log(this.state.has_more);
  var pageINc=page+1;
if (this.state.has_more) {
  this.setState({
    page:pageINc
  })
  console.log(page)
  this.getData(pageINc)
}else{
  document.getElementById('nextBtm').disabled=true

}

}

dicbtnClick(e){
  //const page =this.state.page
  const page =e
  console.log(page);
  
if (page>1) {
  var pageCkeck=page-1;
  this.setState({
    page:pageCkeck
  })

  this.getData(pageCkeck)
}

}




componentDidMount(){
  this.getData()
}










    render(){
      // const theData=this.state.data.map((d) =>{
        return(
            // <li key={d.id} >
            //     <h3>{d.name}</h3>
             
            // </li>
<div id='tabss'    >
<Table striped bordered hover responsive  >
  <thead>
    <tr  >
      <th>company_name </th>
      <th>email</th>
      <th> phone</th>
      <th>name</th>
      <th>OfficeName</th>
      <th>Position</th>
      <th>ctiy</th>
      <th>numberOfTeam</th>
      <th>licenseDate</th>
      <th> Edit licenseDate</th>
    </tr>
  </thead>
  <tbody>
  {this.state.data.map(((item, i) =>
    <tr key={i}  >
      <td style={{cursor:'pointer'}}  onClick={() => {
      window.location.href = `/Company?id=${item._id}`;
    }}   >{item.company_name}</td>
      <td style={{cursor:'pointer'}}  onClick={() => {
      window.location.href = `/Company?id=${item._id}`;
    }}  >  {item.email}</td>
      <td>{item.phone}</td>
      <td>{item.name}</td>
      <td>{item.OfficeName}</td>
      <td>{item.Position}</td>
      <td>{item.ctiy}</td>
      <td>{item.numberOfTeam}</td>
      <td>{item.licenseDate}</td>
      <td>              <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title="Edit licenseDate"
                                width={'60%'}
                                confirmLabel="Edit"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.edit(item._id) }} 
                                   > 

                                  <div id='dd'>
                               
                                  <div> license Date </div>

                                  <DatePicker id='width'
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                  />
                                </div>
                                

                              </Dialog>

                              <Button style={{width:'100%'}}  onClick={() => { setState({ isShown: true }) }}> Edit  </Button>
                            </Pane>
                          )}
                        </Component> </td>
    </tr>
 ))}
  
  </tbody>
</Table>
{/* 
<UserIdComponent  name="1" onClick={this.btnClick} /> */}
            <button  className='botons'  id="nextBtm" onClick={()=>{
              this.btnClick(this.state.page)
            }} >next</button>
                     <button  className='botons'  id="prevBtm" onClick={()=>{
              this.dicbtnClick(this.state.page)
            }} >prev</button>

</div>



        )
    }}
    // if(this.state.loading){
    //     return(
    //         <p>loading...</p>
    //     )
    // }
    // return(
    //     <div>
    //         <ul>
    //         {theData}
    //         </ul>
         
          

        // </div>
    // )
// }
   
// }







export default Allcompany;
