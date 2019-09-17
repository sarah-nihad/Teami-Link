import React from 'react';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
// import StarRatings from 'react-star-ratings';
import {  Button, Dialog, Pane, toaster} from 'evergreen-ui';
import Component from '@reactions/component';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();


class Alladvertise extends React.Component{
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

    console.log('p',p)
    // const {page} = this.state
    const {limit} = this.state
    // this.setState({
    //     data:[],
    //     // loading:true
    // })
    axios.get( host+`api/v1/admin/ads?page=${pageckeck}&limit=${limit}` ,{headers:{ token: cookies.get("token_admin") }}   )
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

delete(_id) {
  let formData = new FormData();
  var headers = {
    "Content-Type": "application/json",
    token: cookies.get("token_admin")
  };
axios({
    url: host + `api/v1/admin/ads/${_id}`,
    method: "DELETE",
    data: formData,
    headers: headers
  })
    .then(response => {
      toaster.success('Advertisment has been deleted successfully');
    
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
<div id='tabss'  >
<Table  striped bordered hover responsive   >
  <thead>
    <tr>
      <th>company_name</th>
      <th>Office Name</th>
      <th>title</th>
      <th>Text</th>
      <th>Date</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
  {this.state.data.map(((item, i) =>
    <tr key={i} >
      <td>{item.company_id.company_name}</td>
      <td>{item.company_id.OfficeName}</td>

      <td>{item.title}</td>
     

      <td>
   

                        <Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
      
        onCloseComplete={() => setState({ isShown: false })}
        hasFooter={false}
      >
        {item.body}
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>Show </Button>
    </Pane>
  )}
</Component>

      </td>
      <td>{item.uptime}  </td>

   
      <td>    <i className="fas fa-trash" style={{ color: '#9A281C', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
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
   

export default Alladvertise;
