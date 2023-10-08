import {Button} from "../button/component.jsx";

export const Tab = ({tab, onClick}) => {
  return (
    <Button
      title={tab.title}
      onClick={onClick}
      disabled={tab.disabled}
    />
  );
}
