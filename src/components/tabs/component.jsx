import {Tab} from "../tab/component.jsx";

export const Tabs = ({tabs, onSelect, selectedId}) => {
  return (
    <div>
      {tabs.map((tab) => {
        return (
          <Tab key={tab.id} tab={tab} onClick={() => onSelect(tab.id)} active={tab.id === selectedId}/>
        );
      })}
    </div>
  );
}
