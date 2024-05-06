import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageUrl1 from "../../assets/clients/Group 142.png";
import imageUrl2 from "../../assets/clients/Group 143.png";
import imageUrl3 from "../../assets/clients/Group 144.png";
import imageUrl4 from "../../assets/clients/Group 145.png";
import imageUrl5 from "../../assets/clients/Group 146.png";
import imageUrl6 from "../../assets/clients/Group 147.png";
import imageUrl7 from "../../assets/clients/Group 148.png";
import imageUrl8 from "../../assets/clients/Group 149.png";
import imageUrl9 from "../../assets/clients/Group 150.png";

// Assuming you have client logo images in the assets folder
const clientImages = [
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  imageUrl5,
  imageUrl6,
  imageUrl7,
  imageUrl8,
  imageUrl9,
  // Add more client image URLs as needed
];

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000, // Set a lower value for continuous movement
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false, // Prevent slider from pausing on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-4xl mb-2 font-bold text-center">
          Our Clients
        </h2>
        <div className="w-full mb-12 flex justify-center items-center">
          {/* SVG below Our Clients */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="257"
            height="24"
            viewBox="0 0 257 24"
            fill="none"
          >
            <path
              d="M256.547 12L245 0.452994L233.453 12L245 23.547L256.547 12ZM0 14H245V10H0V14Z"
              fill="url(#paint0_linear_26179_451)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_26179_451"
                x1="0"
                y1="14.5"
                x2="245"
                y2="14.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#278083" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Slider {...settings} className="gap-8 mb-12">
          {clientImages.map((imageUrl, index) => (
            <div key={index} className="px-4">
              <img
                src={imageUrl}
                alt={`Client ${index + 1}`}
                className="mx-auto max-w-[300px] h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
