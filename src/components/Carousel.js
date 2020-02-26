import React from 'react';
import {Carousel, Button} from 'antd';
import './Carousel.css';


export class Slider extends React.Component{
    render(){
        return(
            <Carousel autoplay effect="fade">
                <div className="image-box">
                    <div className="content-box">
                        <h2 className="slider-content">Sustainable Development Goals</h2>
                        <Button type="primary" size="large">Learn More</Button>
                    </div>
                </div>
                <div className="image-box2">
                    <div className="content-box">
                        <h2 className="slider-content">Clean Water And Sanitation</h2>
                        <Button type="primary">Learn More</Button>
                    </div>
                </div>
                <div className="image-box3">
                    <div className="content-box">
                        <h2 className="slider-content">17 Sustainable Development Goals</h2>
                        <Button type="primary">Learn More</Button>
                    </div>
                </div>
            </Carousel>
        )
    }
}