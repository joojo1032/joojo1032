import React from 'react';
import './Login.css'
import { Form, Input, Button} from 'antd';
import { Head } from './Header';
import {Link} from 'react-router-dom';
import {LockOutlined, UserOutlined} from '@ant-design/icons';




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
                        /*initialValues={{
                        remember: true,
                        }}*/
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
                        <Input prefix={<UserOutlined/>} placeholder="Username" />
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
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                
                        <Form.Item>
                        <Link to="/Edit">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Link>
                        
                        </Form.Item>
                    </Form>
                    </div>
                </div>
            </div>
        );
      }
    }


 
