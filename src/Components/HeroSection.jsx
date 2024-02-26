/* eslint-disable react/prop-types */
import "./herosection.css";
import user_img from "../Store/e.svg";
const HeroSection = ({data}) => {
  return (
    <section className="self" id="a">
      <div className="log_self">
        <img src={user_img} className="svgImg" />
      </div>

      <div className="description">
        <h1>{data.header.h}</h1>
        <div className="medescription">
          <p>
            {
              data.header.title
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
