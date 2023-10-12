import {Button} from "../button/component.jsx";

export const Tab = ({tab, onClick, active = false}) => {
  return (
    <Button
      onClick={onClick}
      disabled={tab.disabled}
      size="large"
      type="link"
      active={active}
    >{tab.title}</Button>
  );
}
