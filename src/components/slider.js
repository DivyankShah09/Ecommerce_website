import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import Carousel from 'react-bootstrap/Carousel';

export const Slider = () =>{
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    src={img3}
                    height="600px"
                    width="100%"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img1}
                    height="600px"
                    width="100%"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img2}
                    height="600px"
                    width="100%"
                />
            </Carousel.Item>
        </Carousel>
    );
}