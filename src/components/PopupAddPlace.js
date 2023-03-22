import PopupWithForm from './PopupWithForm'

function PopupEdit({ isOpen, onClose }) {
	return (
		<PopupWithForm name={'cardForm'} title={'Новое место'} isOpen={isOpen} onClose={onClose}>
			<input
				type="text"
				placeholder={'Название'}
				className="popup__input"
				name="title"
				id="elementTitle"
				required
				minLength="2"
				maxLength="30"
			/>
			<span className="popup__error elementTitle-error" />
			<input
				type="url"
				placeholder={'Ссылка на картинку'}
				className="popup__input"
				name="link"
				id="elementImage"
				required
			/>
			<span className="popup__error elementImage-error" />
		</PopupWithForm>
	)
}

export default PopupEdit
