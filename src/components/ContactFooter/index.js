import React, { PureComponent } from "react";

import './index.css';

export default class ContactFooter extends PureComponent {
  render() {
    return (
      <div className="contact-footer">
        <div className="contact-footer__left">
          <span className="contact-footer__left__span">by Francisco Tomás López</span>
        </div>
        <div className="contact-footer__right">
          <a className="contact-footer__right__link-picture contact-footer__right__link-picture--twitter" rel="noopener noreferrer" href="https://twitter.com/framlopez_" target="_blank"></a>
          <a className="contact-footer__right__link-picture contact-footer__right__link-picture--github" rel="noopener noreferrer" href="https://github.com/framlopez" target="_blank"></a>
          <a className="contact-footer__right__link-picture contact-footer__right__link-picture--instagram" rel="noopener noreferrer" href="https://www.instagram.com/framlopez_" target="_blank"></a>
          <a className="contact-footer__right__link-picture contact-footer__right__link-picture--linkedin" rel="noopener noreferrer" href="https://www.linkedin.com/in/framlopez" target="_blank"></a>
        </div>
      </div>
    );
  }
}
