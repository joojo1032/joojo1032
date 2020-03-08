import React from 'react';
import {Card, Modal, Form, Input, InputNumber, Upload, Button, message} from 'antd';
import {PlusCircleTwoTone, UploadOutlined} from '@ant-design/icons';


const {TextArea} = Input;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    headers: {
        authorization: 'authorization-text'
    },
    onChange(info){
        if(info.file.status !== 'uploading'){
            console.log(info.file, info.fileList);
        }
        if(info.file.status === 'done'){
            message.success(`${info.file.name} file uploaded successfully`);
        }else if(info.file.status === 'error'){
            message.error(`${info.file.name} file upload failed`);
        }
    }
}

export class Create extends React.Component{
    state={
        visible: true
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    onCancel = () => {
        this.setState({
            visible: false
        })
    }

    render(){
        return(
            <div>
                <Card hoverable style={{ textAlign: 'center'}} onClick={this.showModal}>
                    <PlusCircleTwoTone style={{fontSize: '16vw'}}/>
                    <h1 style={{marginTop: '20px', color: 'grey'}}>Add Community</h1>
                </Card>
                <Modal
                title="Create a new community"
                visible={this.state.visible}
                onCancel={this.onCancel}
                okText="Submit"
                
                >
                    <Form colon={false} >
                        <Form.Item
                        name="townName"
                        label="Town"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the name of the town!',
                            },
                        ]}
                        >
                            <Input placeholder="Name of town" allowClear/>
                        </Form.Item>
                        <Form.Item
                        name="townDescription"
                        label="Town Description"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the description of the town!',
                            },
                        ]}
                        >
                            <TextArea placeholder="Description of town" allowClear/>
                        </Form.Item>
                        <Form.Item
                        name="population"
                        label="Population"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the population!',
                            },
                        ]}
                        >
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item
                        name="houses"
                        label="Number of Houses"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the number of houses!',
                            },
                        ]}
                        >
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item
                        name="location"
                        label="Location"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the location!',
                            },
                        ]}
                        >
                            <Input allowClear placeholder="Location of town"/>
                        </Form.Item>
                        <Form.Item
                        name="upload"
                        label="Upload picture of town"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the location!',
                            },
                        ]}
                        >
                            <Upload {...props}>
                                <Button>
                                    <UploadOutlined/> Upload
                                </Button>
                            </Upload>
                        </Form.Item>
                    </Form>
                </Modal>            
            </div>
        )
    }
} 
