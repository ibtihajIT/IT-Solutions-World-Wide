import React from "react";
import imageUrl1 from "../../assets/desinging_assets/logo-design 1.png";
import imageUrl2 from "../../assets/desinging_assets/branding 1.png";
import imageUrl3 from "../../assets/desinging_assets/digital-marketing 1.png";
import imageUrl4 from "../../assets/desinging_assets/employee training and empowerment 1.png";
import imageUrl5 from "../../assets/desinging_assets/social-media 1.png";
import imageUrl6 from "../../assets/desinging_assets/digital-drawing 2.png";

function Imagetext() {
  return (
    <div className="flex flex-col md:flex-col justify-between gap-4 md:gap-12 md:px-[150px] items-center mx-4 py-12">
      {/* Box 1 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl1}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Logo Design
            </h3>
            <p>
              We create unique logos that represent your brand well. Whether you
              need a new logo or want to update your current one, we can help.
            </p>
          </div>
        </div>
      </div>
      {/* Box 2 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl2}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Brand Identity
            </h3>
            <p>
              We'll develop a consistent look for your brand, including colors,
              fonts, and style, so everything matches and looks professional.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat the above structure for additional boxes */}
      {/* Box 3 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl3}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Marketing Materials
            </h3>
            <p>
              From brochures to business cards, we design eye-catching materials
              that grab attention and get your message across.
            </p>
          </div>
        </div>
      </div>
      {/* Box 4 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl4}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Website Design
            </h3>
            <p>
              We'll design a user-friendly website that reflects your brand and
              makes a good impression on visitors.
            </p>
          </div>
        </div>
      </div>
      {/* Box 5 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl5}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Social Media Graphics
            </h3>
            <p>
              We create custom graphics for your social media pages to help you
              stand out online.
            </p>
          </div>
        </div>
      </div>
      {/* Box 6 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl6}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Illustrations and Infographics{" "}
            </h3>
            <p>
              Need visuals for your content? We can create custom illustrations
              and info-graphics to make your ideas come to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagetext;
