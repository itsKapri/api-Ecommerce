import React, { useState, useEffect } from 'react';

function Slidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change
  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Function to update the active slide index every 2 seconds
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % 3; // Assuming you have 3 slides
      handleSlideChange(newIndex);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <div className="sildbar">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className={`carousel-item${activeIndex === 0 ? ' active' : ''}`}>
              <img
                src="https://cdn.shopify.com/s/files/1/0106/2721/9522/files/slider-1-1_1920x.jpg?v=1614331006"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className={`carousel-item${activeIndex === 1 ? ' active' : ''}`}>
              <img
                src="https://cdn.shopify.com/s/files/1/0106/2721/9522/files/slider-1-2_1920x.jpg?v=1614331006"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className={`carousel-item${activeIndex === 2 ? ' active' : ''}`}>
              <img
                src="https://cdn.shopify.com/s/files/1/0106/2721/9522/files/slider-1-3spf_1920x.jpg?v=1614331006"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            onClick={() => handleSlideChange((activeIndex + 2) % 3)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            onClick={() => handleSlideChange((activeIndex + 1) % 3)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
        