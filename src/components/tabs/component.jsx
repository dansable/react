import {Tab} from "../tab/component.jsx";

export const Tabs = ({tabs, onSelect}) => {
  return (
    tabs.map((tab) => {
      return (
        <Tab tab={tab} onClick={() => onSelect(tab.index)}/>
      );
    })
  );
}
