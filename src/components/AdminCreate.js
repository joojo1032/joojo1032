import React from 'react';
import {Card, Popconfirm, message} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';
import {Redirect} from 'react-router';




export class AdminCreate extends React.Component{
    state={
        redirect: false
    }

    confirm = (e) => {
        message.success('Clicked on Yes')
        this.setState({
            redirect: true
        });
    }
    
    cancel = (e) => {
        message.error('Clicked on No')
    }

    render(){
        const {redirect} = this.state;

        if(redirect){
            return (<Redirect to='/Admin'/>); 
        }

        return(
            <div>
                <Popconfirm
                    title="Are you an administrator?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >

                <Card hoverable style={{width: '500px', textAlign: 'center'}}>
                    <PlusCircleTwoTone style={{fontSize: '300px'}}/>
                    <h1 style={{marginTop: '20px', color: 'grey'}}>Add Community</h1>
                </Card>
                </Popconfirm>
            </div>
        )
    }
} 
