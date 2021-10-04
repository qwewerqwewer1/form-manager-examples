import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

export default function Form() {
  //all Hooks
  const { register, handleSubmit } = useForm();

  const [nameInput, setNameInput] = React.useState(false);
  const [mobileInput, setMobileInput] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const [btnEnabled, setBtnEnabled] = React.useState(false);
  // all Functions
  const changeCheckbox = () => {
    setBtnEnabled(mobileInput && nameInput && !isClicked);
    setIsClicked(!isClicked);
    console.log(!isClicked);
  };

  const changeNameInput = (e) => {
    setNameInput(e.target.value.length > 0);
    setBtnEnabled(e.target.value.length > 0 && mobileInput && isClicked);
  };

  const changeMobileInput = (e) => {
    setMobileInput(e.target.value.length > 0);
    setBtnEnabled(e.target.value.length > 0 && nameInput && isClicked);
  };

  const onSubmit = (data) => {
    console.log(data);
    alert(
      JSON.stringify(
        'Вы ввели: ' + data.topping + ' ' + data.name + ' ' + data.mobile
      )
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* SELECT ↓*/}
      <select {...register('topping')} className="form__input">
        <option value="chocolate">Chocolate</option>
        <option value="strawberry">Strawberry</option>
        <option value="vanilla">Vanilla</option>
      </select>
      {/* INPUTS ↓*/}
      <input
        {...register('name')}
        className="form__input"
        type="text"
        placeholder="Ваше имя на стаканчике"
        onChange={(e) => changeNameInput(e)}
      />
      <input
        {...register('mobile')}
        className="form__input"
        type="number"
        placeholder="Номер мобильного"
        onChange={(e) => changeMobileInput(e)}
      />
      {/* CHECKBOX ↓*/}
      <div className="form__container">
        <p className="form__container-text">Деньги хотя бы есть?</p>
        {/* <p className='form__container-text'>{all.toString()}</p> */}
        <label className="checkbox-ios">
          <input onChange={changeCheckbox} type="checkbox" />
          <span className="checkbox-ios-switch"></span>
        </label>
      </div>
      {/* SUBMIT */}
      <button
        type="submit"
        disabled={!btnEnabled}
        className={
          btnEnabled ? 'form__button' : 'form__button form__button-disabled'
        }
      >
        {btnEnabled
          ? 'Отправить'
          : 'Подтвердите свой возраст и заполните поля ↑'}
      </button>
    </form>
  );
}
