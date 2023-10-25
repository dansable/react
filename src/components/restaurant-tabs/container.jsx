import {NavLink} from "react-router-dom";
import {Tab} from "../tab/component.jsx";
import {createRestaurantTabs} from "../../utils/restaurant-tabs.js";

export const RestaurantTabsContainer = ({restaurants}) => {
  const tabs = createRestaurantTabs(restaurants);

  return (
    <div>
      {tabs?.map((tab) => {
        return (
          <NavLink key={tab.id}
                   to={tab.id}>
            {({isActive}) => (
              <Tab
                tab={tab}
                active={isActive}
              />
            )}
          </NavLink>
        );
      })}
    </div>
  )
};
