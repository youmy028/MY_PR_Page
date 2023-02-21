import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { Container } from "@mui/material";



export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 70px auto;
`;
const DIV = styled.div`
        height:720px;
    `;

  return (
    <Container>
        <DIV>
          <Slider {...settings}>
            <div>
              <Image  src="/img/img_1.jpg"></Image>
            </div>
            <div>
              <Image  src="/img/img_2.jpg"></Image>
            </div>
            <div>
              <Image  src="/img/img_3.jpg"></Image>
            </div>
            <div>
              <Image  src="/img/img_4.jpg"></Image>
            </div>
          </Slider>
      </DIV>
    </Container>
  );

}