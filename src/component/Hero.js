import { Carousel } from "react-bootstrap";
import hero1 from './../assets/23.jpg'
import hero2 from './../assets/12.jpg'
import hero3 from './../assets/22.jpg'

const Hero = () =>{
    return(
        <Carousel id="home">
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={hero1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Sistem Informasi kelautan</h1>
                <p>Universitas Pendidikan Indonesia Kampus Serang</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hero2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1>Pelopor dan Unggul</h1>
                <p>Ilmiah | Edukatif | Religion</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hero3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>Berprestasi dan Berinovasi</h1>
                <h1> di Masa Pandemi</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Hero;