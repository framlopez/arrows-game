import React, { PureComponent } from "react";
import { Button, Icon } from 'antd';

export default class ActionButton extends PureComponent {
  render() {
    const { type, disabled, size, onClickHandler, iconType, text } = this.props;
    const buttonProps = {
      type,
      disabled,
      size,
      onClick: onClickHandler,
    };
    return (
      <Button {...buttonProps}>
        <Icon type={iconType} />
        {text}
      </Button>
    );
  }
}
