import {Tab} from "../tab/component.jsx";

export const Tabs = ({tabs, onSelect, selectedIndex}) => {
  return (
    <div>
      {tabs.map((tab) => {
        return (
          <Tab key={tab.id} tab={tab} onClick={() => onSelect(tab.index)} active={tab.index === selectedIndex}/>
        );
      })}
    </div>
  );
}
