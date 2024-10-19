import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Carousel/carousel.css"


function Carousell() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2399/sayt-cover-4-0.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2385/sayt-cover-3.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2404/sayt-cover-7.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2400/sayt-cover-6.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2344/sayt-cover-8.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2381/sayt-cover-2-3.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://irshad.az/cdn-cgi/image/width=876/storage/pages/2337/sayt-cover-3.png" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;