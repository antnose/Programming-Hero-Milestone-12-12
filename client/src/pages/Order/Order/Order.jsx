import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title={`Order Food`} />

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
        }}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={drink} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
