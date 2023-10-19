import {RestaurantTabContainer} from "../restaurant-tab/container.jsx";

export const RestaurantTabs = ({restaurantsIds, onSelect, selectedId}) => {
  return (
    <div>
      {restaurantsIds.map((id) => {
        return (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => onSelect(id)}
            active={id === selectedId}/>
        );
      })}
    </div>
  )
};
