import React from 'react';
import { withTranslation } from 'react-i18next';
import Button from '../Button';
import Label from '../Label';
import Input from '../Input';

import './styles.css';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      const { t } = this.props;
      return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mzbevydp"
          method="POST"
          className="i18n-blog-app-contact-form"
        >
          <Label>{t('name') + ':'}</Label>
          <Input type="text" name="name" />
          <Label>Email:</Label>
          <Input required type="email" name="email" />
          <Label>{t('message') + ':'}</Label>
          <Input  pattern=".{3,}" required title={t('threeCharsMin')} type="text" name="message" />
            {status === "SUCCESS" ? <p>{t('success')}</p> : <Button className="i18n-blog-app-contact-form__button">{t('send')}</Button>}
            {status === "ERROR" && <p>{t('error')}</p>}
        </form>
      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }

export default withTranslation('common')(ContactForm);
