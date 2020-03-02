import React from 'react';
import './Login.css'
import { Form, Input, Button, Icon } from 'antd';
import { Head } from './Header';




export class Login extends React.Component{
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
        return (
            <div className="container">
                <Head/>
                <div className="login-container">
                    <div className="form-container">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Username!',
                            },
                        ]}
                        >
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Password!',
                            },
                        ]}
                        >
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        
                        </Form.Item>
                    </Form>
                    </div>
                </div>
            </div>
        );
      }
    }


 
