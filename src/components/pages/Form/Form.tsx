import React, { useState } from 'react';
import styles from './Form.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import cat2 from "./../../assets/animation/Cat2.json"

interface IForm {
  name: string;
  email: string;
  phone: string;
  preferredBreed: string;
  customBreed: string;
  colorPreference: string;
  temperament: string;
  additionalNotes: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<IForm>({
    name: '',
    email: '',
    phone: '',
    preferredBreed: '',
    customBreed: '',
    colorPreference: '',
    temperament: '',
    additionalNotes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, ''); // Убираем всё, кроме цифр
    let formattedPhone = '+7';

    if (input.length > 1) {
      formattedPhone += ` (${input.substring(1, 4)}`;
    }
    if (input.length >= 5) {
      formattedPhone += `) ${input.substring(4, 7)}`;
    }
    if (input.length >= 8) {
      formattedPhone += `-${input.substring(7, 9)}`;
    }
    if (input.length >= 10) {
      formattedPhone += `-${input.substring(9, 11)}`;
    }

    setFormValues({ ...formValues, phone: formattedPhone });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formValues);
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <h2 className={styles.answer}>Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.</h2>;
  }

  return (
    <div className={styles.root} id='Заполните форму'>
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.heading}>Заполните форму</h2>
      <label htmlFor="name" className={styles.label}>
        Ваше имя:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <label htmlFor="email" className={styles.label}>
        Ваш email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
     <div className={styles.inputs}>
        Ваш телефон:
      <label htmlFor="phone" className={styles.label}>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={handlePhoneChange}
          required
          className={styles.input}
          placeholder="Номер телефона (+7)"
          maxLength={18}
        />
      </label>
    </div>
      <label htmlFor="preferredBreed" className={styles.label}>
        Предпочитаемая порода:
      </label>
      <select
        id="preferredBreed"
        name="preferredBreed"
        value={formValues.preferredBreed}
        onChange={handleChange}
        required
        className={styles.select}
      >
        <option value="">Выберите породу</option>
        <option value="british">Британская короткошёрстная</option>
        <option value="maine-coon">Мейн-кун</option>
        <option value="bengal">Бенгальская</option>
        <option value="scottish-fold">Шотландская вислоухая</option>
        <option value="sphynx">Сфинкс</option>
        <option value="other">Другое</option>
      </select>

      {formValues.preferredBreed === 'other' && (
        <div className={styles.div}>
          <label htmlFor="customBreed" className={styles.label}>
            Укажите свою породу:
          </label>
          <input
            type="text"
            id="customBreed"
            name="customBreed"
            value={formValues.customBreed}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
      )}

      <label htmlFor="colorPreference" className={styles.label}>
        Предпочитаемый цвет:
      </label>
      <input
        type="text"
        id="colorPreference"
        name="colorPreference"
        value={formValues.colorPreference}
        onChange={handleChange}
        className={styles.input}
      />

      <label htmlFor="temperament" className={styles.label}>
        Характер котёнка:
      </label>
      <input
        type="text"
        id="temperament"
        name="temperament"
        value={formValues.temperament}
        onChange={handleChange}
        className={styles.input}
      />


      <label htmlFor="additionalNotes" className={styles.label}>
        Дополнительные пожелания:
      </label>
      <textarea
        id="additionalNotes"
        name="additionalNotes"
        value={formValues.additionalNotes}
        onChange={handleChange}
        className={styles.textarea}
      ></textarea>

      <button type="submit" className={styles.button}>
        Отправить заявку
      </button>
    </form>
      <div className={styles.playerContainer}>
        <Player
          className={styles.player}
          autoplay
          loop 
          src={cat2}
        />
    </div>
    </div>
  );
};

export default Form;
