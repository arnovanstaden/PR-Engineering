'use client';

import { MutableRefObject, useRef } from 'react';
import styles from './contact.module.scss';
import Button from '@components/UI/Button/Button';
import Icon from '@components/UI/Icon/Icon';


const Contact = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const submitForm = (e) => {
    e.preventDefault()
    const form = formRef.current;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/myyleyll', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        form.reset()
        alert('Thanks for your submission. We\'ll get back to you soon.');
      });
  }

  return (
    <div className={styles.contact}>
      <div className={styles.details}>
        <h1>Get in Touch</h1>
        <p>For more information on our services, please contact us and experience the value we can add.</p>
        <ul className={styles.links}>
          <li>
            <Icon name="phone" />
            <a href="tel:0210125393">
              021 012 5393
            </a>
          </li>
          <li>
            <Icon name="email" />
            <a href="mailto:info@engpr.com">
              info@engpr.com
            </a>
          </li>
          <li>
            <Icon name="location_on" />
            <a href="https://g.page/Fire-Engineers?share" target="blank">
              Building A2, Devonbosch, <br />
              Bottelary Rd, Stellenbosch, 7600
            </a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
            <Icon name="instagram" size={20} />
          </a>
          <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
            <Icon name="linkedin" size={20} />
          </a>
        </div>
      </div>
      <div className={styles.form}>
        <h1>Send us a Message</h1>
        <form ref={formRef}>
          <div className={styles.group}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="Phone">Phone</label>
            <input type="tel" name="Phone" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="Company">Company</label>
            <input type="text" name="Company" />
          </div>
          <div className={`${styles.group} ${styles.row}`}>
            <label htmlFor="Message">Message</label>
            <textarea name="Message"></textarea>
          </div>
          <div className={styles.button}>
            <Button click={submitForm} >Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
