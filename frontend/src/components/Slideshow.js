import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import gasfitter from '../images/gáz.jpg';
import painter from '../images/szobafestő.jpg';
import electrician from '../images/villany.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';


  export default function Slideshow(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

      return (
        <div className="slide-container">
          <Slider {...settings}>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${gasfitter})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize: 'cover',
                            height : '800px'
            }}>
                <span>slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${painter})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize: 'cover',
                            height : '800px'
            }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${electrician})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize: 'cover',
                            height : '800px'
            }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slider>
        </div>
      )
  }

  