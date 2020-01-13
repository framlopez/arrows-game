import React, { PureComponent, Fragment } from "react";
import { Modal, Checkbox } from 'antd';
import cookie from 'react-cookies';

export default class Onboarding extends PureComponent {
  constructor(props) {
    super(props);
    this.onCancelHandler = this.onCancelHandler.bind(this);
    this.onOkHandler = this.onOkHandler.bind(this);
    this.toggleShowAgainChecbox = this.toggleShowAgainChecbox.bind(this);
    this.state = {
      visible: true,
      showAgain: true,
      setCookie: cookie.load('onboarding'),
    };
  }

  onCancelHandler() {
    this.setState({
      visible: false,
    });
  }

  onOkHandler() {
    const { showAgain } = this.state;
    this.onCancelHandler();
    if(!showAgain) {
      cookie.save('onboarding', true);
    }
  }

  toggleShowAgainChecbox() {
    this.setState(state => ({
      showAgain: !state.showAgain,
    }));
  }

  get content() {
    const { showAgain } = this.state;
    return (
      <Fragment>
        <p>Para comenzar a jugar, tentrás que utlizar el teclado.</p>
        <img src="/arrows-keyboard-onboarding.png" alt="" width="100%" />
        <Checkbox checked={!showAgain} onChange={this.toggleShowAgainChecbox}>No volver a mostrar este mensaje</Checkbox>
      </Fragment>
    );
  }
  
  render() {
    const { visible, setCookie } = this.state;
    const modalProps = {
      className: 'app-onboarding',
      title: 'Bienvenid@ a arrow game',
      okText: 'Comenzar',
      visible: visible && !setCookie,
      centered: true,
      closable: false,
      onOk: this.onOkHandler,
      onCancel: this.onCancelHandler,
    };
    return (
      <Modal {...modalProps}>
        {this.content}
      </Modal>
    );
  }
}
