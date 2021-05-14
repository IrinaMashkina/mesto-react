import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    // Подписка на контекст
const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__form-section">
        <input
          className="popup__input popup__input_type_name"
          id="input-name"
          name="name"
          type="text"
          required
          minLength="2"
          maxLength="40"
          defaultValue={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error" id="input-name-error"></span>
      </section>
      <section className="popup__form-section">
        <input
          className="popup__input popup__input_type_job"
          id="input-job"
          name="about"
          type="text"
          required
          minLength="2"
          maxLength="200"
          defaultValue={description}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error" id="input-job-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditProfilePopup;