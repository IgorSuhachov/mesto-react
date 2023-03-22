import React from 'react'

function PopupWithForm({ isOpen, onClose, name, title, children }) {
	return (
		<section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__container">
				<button className="popup__close" type="button" onClick={onClose}></button>
				<form className="popup__form" name={`${name}-form`}>
					<h2 className="popup__title">{title}</h2>
					{children}
					<button className="popup__save" onClick={onClose}>
						{'Сохранить'}
					</button>
				</form>
			</div>
		</section>
	)
}

export default PopupWithForm
