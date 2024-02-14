'use client';

import styles from './contact.module.scss';
import Button from '@components/UI/Button/Button';
import Icon from '@components/UI/Icon/Icon';
import { FieldErrors, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { TContactMessage } from '@types';
import { buildContactEmail } from '@lib/email/client';
import { sendEmail } from '@lib/email/server';
import { useState } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email' | 'tel';
  register: UseFormRegisterReturn;
  errors: FieldErrors<TContactMessage>
}

const Input: React.FC<InputProps> = ({ name, errors, register }) => (
  <>
    <label htmlFor={name}>{name}</label>
    <input
      type="text"
      name={name}
      autoComplete={name}
      {...register}
    />
    {errors[name]?.type === 'required' && <small>{name} is required</small>}
  </>
);

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TContactMessage>();

  // Handlers
  const handleSubmitContactForm = async (data: TContactMessage) => {
    try {
      await sendEmail({
        subject: 'Website Contact Message',
        body: buildContactEmail(data),
      });
      reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
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
      {!success
        ? (
          <div className={styles.form}>
            <h1>Send us a Message</h1>
            <form onSubmit={handleSubmit(handleSubmitContactForm)}>
              <div className={styles.group}>
                <Input
                  name="name"
                  type="text"
                  register={{ ...register('name', { required: true }) }}
                  errors={errors}
                />
              </div>
              <div className={styles.group}>
                <Input
                  name="email"
                  type="text"
                  register={{ ...register('email', { required: true }) }}
                  errors={errors}
                />
              </div>
              <div className={styles.group}>
                <Input
                  name="phone"
                  type="tel"
                  register={{ ...register('phone', { required: true }) }}
                  errors={errors}
                />
              </div>
              <div className={styles.group}>
                <Input
                  name="company"
                  type="text"
                  register={{ ...register('company', { required: true }) }}
                  errors={errors}
                />
              </div>
              <div className={`${styles.group} ${styles.row}`}>
                <label htmlFor="Message">Message</label>
                <textarea
                  name="Message"
                  {...register('message', { required: true })}
                >
                </textarea>
                {errors.message?.type === 'required' && <small>message is required</small>}
              </div>
              <div className={styles.button}>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        )
        : (
          <div className={styles.success}>
            <h1>Thanks for submitting your message. We'll get back to you soon</h1>
          </div>
        )}
    </div>
  )
}

export default Contact
