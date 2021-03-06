import React from 'react';
import {Link} from 'react-router-dom';
import {Card,  Statistic, Col, Row} from 'antd';
import logo from '../images/12.jpg';
import logo2 from '../images/13.jpg';
import logo3 from '../images/14.jpg';
import {TeamOutlined, BankOutlined, EnvironmentOutlined} from '@ant-design/icons';
import { Head } from './Header';
import { Create} from './Create';
import './EditPage.css';

const {Meta} = Card;

export class EditPage extends React.Component{
    render(){
        return(
            <div className="com-box">
                <Head/>
                <div className="card-box">
                    <Row gutter={[64, 64]}>
                        <Col span={8}>
                            <Link to="/map">
                            <Card
                               /* style={{width:500}}*/
                                cover ={ <img alt="logo" src={logo}/>}
                                hoverable
                            >
                                <Meta
                                    title="Boadi"
                                    description="Boadi is a town in Ghana. It is 15 kilometers from the centre of Kumasi. It serves as a residential areas for workers in various companies in Kumasi"
                                />
                                <div style={{marginTop: 10}}>
                                    <Row gutter={8}>
                                        <Col span={8}>
                                            <Statistic title="Population" value={1200} prefix={<TeamOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Houses" value={650} prefix={<BankOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Location" value={ '6.69,-1.55'} prefix={<EnvironmentOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                            
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Card 
                                /*style={{width:500}}*/
                                cover ={ <img alt="logo" src={logo2}/>}
                                hoverable
                            >
                                <Meta
                                    title="Emena"
                                    description="Emena is a town in Ghana. It is 10 kilometers from the centre of Kumasi. It is a dormitory town that serves both inhabitants as well as"
                                />
                                <div style={{marginTop: 10}}>
                                    <Row gutter={8}>
                                        <Col span={8}>
                                            <Statistic title="Population" value={1120} prefix={<TeamOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Houses" value={701} prefix={<BankOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Location" value={1200} prefix={<EnvironmentOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card 
                               /* style={{width:500}}*/
                                cover ={ <img alt="logo" src={logo3}/>}
                                hoverable
                            >
                                <Meta
                                    title="Appiadu"
                                    description="Appiadu is a town in Ashanti region of Ghana, located in the Ejisu-Juaben District. Appiadu is about 27 kilometers northeast of Kumasi"
                                />
                                <div style={{marginTop: 10}}>
                                    <Row gutter={8}>
                                        <Col span={8}>
                                            <Statistic title="Population" value={100} prefix={<TeamOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Houses" value={500} prefix={<BankOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Location" value={1200} prefix={<EnvironmentOutlined style={{color: 'skyblue'}}/>}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Create/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
} 