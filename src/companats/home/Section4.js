import React from 'react';
import './section4.css';
import { Col, Container, Row } from "react-bootstrap";
import mobile from "../../aswets/1.png23.png";
import girl from "../../aswets/1.png24.png";
import heart from "../../aswets/1.png28.png";
import trues from "../../aswets/1.png27.png";
import lockation from "../../aswets/1.png26.png";
import seting from "../../aswets/1.png25.png";



const Section4 = () => {
  return (
    <>
    <section className="sec-parent">
        <Container>
          <Row className="d-flex align-items-center">
           <Col lg={5} md={6} sm={12}>
            <div className='parent'>
              <div className='child-head'>
                <h2>Book Appointment</h2>
              </div>
              <div className='child-boxs'>
              <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="your name"/>
               <input type="number" placeholder="phone number" />
               <input type="date" className="date"/>
               <a className='link' href='#'>appointment now</a>
              </div>
            </div>
           </Col>
            <Col lg={7} md={6} sm={12} className='animate'>
              <img src={heart} alt='' className='img-animate img-animate-1'/>
              <img src={trues} alt='' className='img-animate img-animate-2'/>
              <img src={lockation} alt='' className='img-animate img-animate-3'/>
              <img src={seting} alt='' className='img-animate img-animate-4'/>

              <div className="box-imges">
                <img src={mobile} className="mobile" alt=''/>
                <img src={girl} className="girl" alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section4