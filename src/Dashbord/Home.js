import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{

    render(){
        return(

            <div >
<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'80vh',width:'100%',backgroundColor:'#1A5491'}}>
<Link to='/'>
<img src={require('../assets/img/link.png')} id='dashimgl' alt='img'   />
</Link>
</div>

            </div>
        )
    }
    
}

export default Home;