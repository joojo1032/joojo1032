import React from 'react';
import {Carousel, Button} from 'antd';
import './Carousel.css';


export class Slider extends React.Component{
    render(){
        return(
            <Carousel autoplay effect="fade">
                <div className="image-box">
                    <div className="content-box">
                        <h1 className="slider-content">Sustainable Development Goals</h1>
                        <Button type="primary" size="large" href="https://www.undp.org/content/undp/en/home/sustainable-development-goals/background/">Learn More</Button>
                    </div>
                </div>
                <div className="image-box2">
                    <div className="content-box">
                        <h2 className="slider-content">Clean Water And Sanitation-Goal 6</h2>
                        <Button type="primary" size="large" href="https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-6-clean-water-and-sanitation.html">Learn More</Button>
                    </div>
                </div>
                <div className="image-box3">
                    <div className="content-box">
                        <h2 className="slider-content">17 Sustainable Development Goals</h2>
                        <Button type="primary" size="large" href="https://www.undp.org/content/undp/en/home/sustainable-development-goals.html">Learn More</Button> 
                    </div>
                </div>
            </Carousel>
        )
    }
}