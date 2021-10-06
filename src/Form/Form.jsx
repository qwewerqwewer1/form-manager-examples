// React
import React from 'react';
import './Form.css';
// Modules
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
// Data's
import dataToppings from '../data/data';

export default function Form() {
  //all Hooks
  const { register, handleSubmit, control } = useForm();

  const [nameInput, setNameInput] = React.useState(false);
  const [mobileInput, setMobileInput] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  //Здесь будет 3 булевых состояния (2ух инпутов и 1 чекбокса)
  const [btnEnabled, setBtnEnabled] = React.useState(false);

  // Functions
  const changeCheckbox = () => {
    setBtnEnabled(mobileInput && nameInput && !isClicked);
    setIsClicked(!isClicked);
  };

  const changeNameInput = (e) => {
    setNameInput(e.target.value.length > 0);
    setBtnEnabled(e.target.value.length > 0 && mobileInput && isClicked);
  };

  const changeMobileInput = (e) => {
    setMobileInput(e.target.value.length > 0);
    setBtnEnabled(e.target.value.length > 0 && nameInput && isClicked);
  };
  // func Submit form
  const onSubmit = (data) => {
    console.log(data);
    alert(
      JSON.stringify(
        `Ваш кофе ${
          data.topping.label === undefined
            ? 'без топпинга'
            : 'с топпингом ' + data.topping.label
        } готов, уважаемый гость ${
          data.name
        }. Кэш-бек будет осуществлен по номеру ${data.mobile}`
      )
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* SELECT ↓*/}
      <Controller
        name="topping"
        control={control}
        defaultValue={'withoutTopping'}
        render={({ field }) => (
          <Select
            {...field}
            className="form__input-select"
            placeholder="choose your topping if u want =)"
            options={dataToppings}
          />
        )}
      />
      {/* INPUTS ↓*/}
      <input
        {...register('name')}
        className="form__input"
        type="text"
        minLength="3"
        maxLength="8"
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
        <p className="form__container-text">Деньги хотя бы есть на кофе?</p>
        <label className="checkbox-ios">
          <input onChange={changeCheckbox} type="checkbox" />
          <span className="checkbox-ios-switch"></span>
        </label>
      </div>
      {/* SUBMIT */}
      <button
        type="submit"
        disabled={!btnEnabled}
        className={btnEnabled ? 'form__button' : 'form__button-disabled'}
      >
        {btnEnabled
          ? 'Купить кофе'
          : 'Подтвердите что есть чем платить и заполните поля ↑'}
      </button>
    </form>
  );
}
