import PopupWithForm from './PopupWithForm'

function PopupProfile({ isOpen, onClose }) {
	return (
		<PopupWithForm name="profileForm" title="Редактировать профиль" isOpen={isOpen} onClose={onClose}>
			<input
				type="text"
				placeholder={'Введите имя'}
				className="popup__input"
				id="profileName"
				name="name"
				required
				minLength="2"
				maxLength="40"
			/>
			<span className="popup__error profileName-error" />
			<input
				type="text"
				placeholder={'Введите описание'}
				className="popup__input"
				id="profileDescription"
				name="description"
				required
				minLength="2"
				maxLength="200"
			/>
			<span className="popup__error profileDescription-error" />
		</PopupWithForm>
	)
}

export default PopupProfile
