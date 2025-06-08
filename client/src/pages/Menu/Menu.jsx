import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      {/* main cover */}
      <SectionTitle heading={`Today's Offer`} subHeading={`Don't Miss`} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={`dessert`} coverImg={dessertImg} />

      <MenuCategory items={pizza} title={`pizza`} coverImg={pizzaImg} />

      <MenuCategory items={soup} title={`soup`} coverImg={soupImg} />

      <MenuCategory items={salad} title={`salad`} coverImg={saladImg} />

      <MenuCategory items={drinks} title={`drinks`} coverImg={saladImg} />
    </div>
  );
};

export default Menu;
