import {Tabs} from "../../components/tabs/component.jsx";
import {useState} from "react";
import {restaurants} from "../../constants/mock.js";
import {Restaurant} from "../../components/restaurant/component.jsx";
import {createRestaurantTabs} from "../../utils/restaurant-tabs.js";
import {Header} from "../../components/header/component.jsx";
import {Footer} from "../../components/footer/component.jsx";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantsPage = () => {
  const restaurantTabs = createRestaurantTabs(restaurants);
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);
  const selectedRestaurant = restaurants[selectedRestaurantIndex];

  return (
    <div className={styles.restaurants}>
      <Header className={styles.header}/>
      <div className={classNames('container', styles.container)}>
        <Tabs tabs={restaurantTabs} onSelect={setSelectedRestaurantIndex} selectedIndex={selectedRestaurantIndex}/>
        <Restaurant restaurant={selectedRestaurant}/>
      </div>
      <Footer/>
    </div>
  );
};
