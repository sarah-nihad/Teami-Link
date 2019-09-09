import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{

    render(){
        return(

            <div >
<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'90vh',width:'100%',backgroundColor:'#1A5491'}}>
<Link to='/'>
<img src={require('../assets/img/link.png')} style={{height:'300px'}} alt='img'   />
</Link>
</div>

            </div>
        )
    }
    
}

export default Home;