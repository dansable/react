import {Button} from "../button/component.jsx";

export const Tab = ({tab, onClick, active = false}) => {
  return (
    <Button
      title={tab.title}
      onClick={onClick}
      disabled={tab.disabled}
      size="large"
      type="link"
      active={active}
    />
  );
}
