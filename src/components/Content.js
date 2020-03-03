import React from 'react';
import {Card} from 'antd';


export class Content extends React.Component{
    render(){
        return(
            <div>
               <Card bordered={false}>
                    <p>Type the SDG info here</p>
               </Card>
            </div>
        )
    }
} 