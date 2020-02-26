import React from 'react';
import {Card, Col, Row} from 'antd';
import logo from '../images/10.jpg';
import logo2 from '../images/7.jpg';
import logo3 from '../images/9.jpg';

export class CardInfo extends React.Component{
    render(){
        return(
            <div style={{marginTop: 10}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card cover={<img alt="info" src={logo}/>} bordered={false}></Card>
                    </Col>
                    <Col span={8}>
                        <Card cover={<img alt="info" src={logo2}/>} bordered={false}></Card>
                    </Col>
                    <Col span={8}>
                        <Card cover={<img alt="info" src={logo3}/>} bordered={false}></Card>
                    </Col>
                </Row>
            </div>
        )
    }
} 