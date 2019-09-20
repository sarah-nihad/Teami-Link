import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
import {toaster} from 'evergreen-ui';
// import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();


class Resturant extends Component{
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
      page:1,
      limit:50

    }
    this.getData =this.getData.bind(this)
    this.btnClick =this.btnClick.bind(this)
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
    // this.setState({
    //     data:[],
    //     // loading:true
    // })
    axios.get( host+`api/v1/admin/users?page=${pageckeck}&limit=${limit}` ,{headers:{ token: cookies.get("token_admin") }}   )
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
 
if (page>1   ) {
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
delete(_id) {
  let formData = new FormData();
  var headers = {
    "Content-Type": "application/json",
    token: cookies.get("token_admin")
  };
axios({
    url: host + `api/v1/admin/user/${_id}`,
    method: "DELETE",
    data: formData,
    headers: headers
  })
    .then(response => {
      toaster.success('user has been deleted successfully');
    
    })
    .catch(function (error) {
    });
}

    render(){
      // const theData=this.state.data.map((d) =>{
        return(
            // <li key={d.id} >
            //     <h3>{d.name}</h3>
             
            // </li>
<div id='tabss'   >
<Table striped bordered hover responsive  >
  <thead>
    <tr>
      <th>Name</th>
      <th>E-mail</th>
      <th>Phone</th>
    
      <th>Gender</th>
      <th>City</th>
      <th>Education</th>
      <th>College</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {this.state.data.map(((item, i) =>
    <tr key={i}     >
      <td style={{cursor:'pointer'}}  onClick={() => {
      window.location.href = `/User?id=${item._id}`;
    }}   >{item.name}</td>
      <td style={{cursor:'pointer'}}  onClick={() => {
      window.location.href = `/User?id=${item._id}`;
    }}   >{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.gender} </td>
      <td>{item.ctiy} </td>
      <td>{item.Education} </td>
      <td>{item.Collage} </td>
      <td>    <i className="fas fa-trash" style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                onClick={(e) => { this.delete(item._id) }} />   </td>
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

// const UserIdComponent =(props) =>{
//   return(
//       <button id='botons'
//       onClick={props.onClick}
//       value={props.name}
//       >
//           {props.name}
       
//       </button>
//   )
// }





export default Resturant;
