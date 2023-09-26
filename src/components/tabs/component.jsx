import {Button} from "../button/component.jsx";

export const Tabs = ({tabs, onSelect}) => {
  return (
    tabs.map((tab) => {
      return (
        <Button
          title={tab.title}
          onClick={() => onSelect(tab.index)}
          disabled={tab.disabled}
        />
      );
    })
  );
}
