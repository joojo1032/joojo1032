import React from 'react';
import {Card} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';




export class AdminCreate extends React.Component{
    render(){
        return(
            <div>
                <Link to="/Admin">
                    <Card hoverable style={{ textAlign: 'center'}}>
                        <PlusCircleTwoTone style={{fontSize: '16vw'}}/>
                        <h1 style={{marginTop: '20px', color: 'grey'}}>Add Community</h1>
                    </Card>
                </Link>    
            </div>
        )
    }
} 
