import React from "react";

function Main(props) {
    return(
        <main className="main">

        <section className="profile">
          <div className="profile__information">
            <div className="profile__avatar-container">
              <img
                className="profile__avatar-edit"
                src="<%=require('./images/edit-button.svg')%>"
               onClick = {props.onEditAvatar}
              />
            </div>

            <div className="profile__info">
              <div className="profile__wrapper">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button
                  type="button"
                  aria-label="Кнопка открытия попапа"
                  className="profile__edit-button"
                  onClick = {props.onEditProfile}
                ></button>
              </div>
              <p className="profile__profession">Исследователь океана</p>
            </div>
          </div>
          <button
            aria-label="Кнопка добавления фотографий"
            type="button"
            className="profile__add-button"
            onClick = {props.onAddPlace}
          ></button>
        </section>

        <section className="elements">
          <template className="template">
            <figure className="card" data-id="">
              <img src="#" alt="#" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title"></h2>
                <div className="card__like-container">
                  <button
                    aria-label="Кнопка нравится."
                    type="button"
                    className="card__like"
                  ></button>
                  <span className="card__likes-count"></span>
                </div>
              </figcaption>
              <button
                aria-label="Удалить карточку."
                type="button"
                className="card__delete"
              ></button>
            </figure>
          </template>
        </section>

        

        

        
       
      </main>
    )
}

export default Main;