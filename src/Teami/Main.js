import React, { Component } from 'react';
import Navmain from './Navmain';
import Foot1 from '../component/Foot1';
import Context from '../component/context';
import { Row, Col } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <Context.Consumer>{ctx => {
                // if ((ctx.value.auth === true || ctx.value.auth === false) && ctx.value.spin === false && ctx.value.spin1 === false
                //     && ctx.value.spin2 === false && ctx.value.spin3 === false && ctx.value.spin4 === false) {
                    return (
                        <div>
   <div id="apfot">
                            <Navmain />

                            <div style={{
                                width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                paddingTop: '3%', backgroundColor: '#F4F4F4'
                            }}>
                                <Row style={{ marginRight: '0px', width: '90%',paddingBottom:'12%',paddingTop:'2%' }}>
                                    <Col xs={12} lg={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} id='maincolte1'  >
                                        <h4 style={{ color: '#6078B3', paddingBottom: '2%' }}>Professional Identity</h4>
                                        <img src={require('../assets/img/3.webp')} alt='img' />
                                        <div style={{
                                            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                                            justifyContent: 'center', paddingTop: '2%',textAlign:'center'
                                        }}  >Build your professional identity online and stay connected with opportunities.</div>
                                    </Col>
                                    <Col xs={12} lg={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} id='maincolte1'  >
                                        <h4 style={{ color: '#6078B3', paddingBottom: '2%' }}>Your Personal Page</h4>
                                        <img src={require('../assets/img/2.jpg')} alt='img' />
                                        <div style={{
                                            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                                            justifyContent: 'center', paddingTop: '2%',textAlign:'center'
                                        }}  >Log in to your personal page and view jobs that match you.</div>
                                    </Col>
                                    <Col xs={12} lg={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} id='maincolte1'  >
                                        <h4 style={{ color: '#6078B3', paddingBottom: '2%' }}>Richer Job Ads</h4>
                                        <img src={require('../assets/img/1.jpg')}  alt='img'/>
                                        <div style={{
                                            width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                                            justifyContent: 'center', paddingTop: '2%',textAlign:'center'
                                        }}  >Get Job Matching , Location and Company Insights.</div>
                                    </Col>
                                </Row>

                            </div>


                            </div>

<Foot1 />


                        </div>
                    )
           
            }}

            </Context.Consumer>
        );
    }

}

export default Main;
