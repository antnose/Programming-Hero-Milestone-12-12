import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle heading={"Featured Item"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where i can get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            labore quod ducimus officia architecto minima Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur nam placeat modi est
            tenetur assumenda. Voluptatum distinctio aut laudantium nobis.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
