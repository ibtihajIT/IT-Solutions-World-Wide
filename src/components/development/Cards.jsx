import React from "react";
import imageUrl1 from "../../assets/development_assets/webdevelopment 1.png";
import imageUrl2 from "../../assets/development_assets/mobile-development 1.png";
import imageUrl3 from "../../assets/development_assets/software-development 1.png";

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
              Web Development
            </h3>
            <p>
              We create user-friendly websites that look great and work well.
              Whether you need a simple site or a complex online store, we use
              the latest tech to make your website stand out.
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
              Mobile App Development
            </h3>
            <p>
              Apps are crucial for engaging with today's tech-savvy customers.
              Our team builds easy-to-use mobile apps for both iPhone and
              Android. No matter your target audience, we'll create an app that
              enhances user experience.
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
              Software Development
            </h3>
            <p>
              Efficient workflows are key to success. We build custom software
              that streamlines your processes and boosts productivity. From
              managing resources to customer relationships, our solutions help
              your business thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagetext;
