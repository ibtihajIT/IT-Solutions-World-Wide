import React from "react";
import imageUrl1 from "../../assets/digital_marketing_assests/seo 1.png";
import imageUrl2 from "../../assets/digital_marketing_assests/content-marketing 1.png";
import imageUrl3 from "../../assets/digital_marketing_assests/social media 1.png";
import imageUrl4 from "../../assets/digital_marketing_assests/email-marketing 1.png";

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
              Search Engine Optimization (SEO)
            </h3>
            <p>
              Improve your website's visibility on search engines like Google.
              We use keywords and other strategies to help your site appear
              higher in search results.
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
              Content Marketing
            </h3>
            <p>
              Create valuable content such as blogs, videos, and infographics to
              attract and educate your audience. Good content builds trust and
              loyalty.
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
              Social Media Marketing (SMM)
            </h3>
            <p>
              Connect with your customers on platforms like Facebook, Instagram,
              and Twitter. We manage your social media presence and run ads to
              reach more people.
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
              Email marketing
            </h3>
            <p>
              Send personalized emails to your customers to keep them engaged
              and interested in your products or services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagetext;
