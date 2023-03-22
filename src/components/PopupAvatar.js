import PopupWithForm from './PopupWithForm'

function PopupAvatar({ isOpen, onClose }) {
	return (
		<PopupWithForm name={'avatarForm'} title={'Обновить аватар'} isOpen={isOpen} onClose={onClose}>
			<input
				type="url"
				placeholder={'Ссылка на картинку'}
				className="popup__input"
				name="avatar"
				id="avatarImage"
				required
			/>
			<span className="popup__error avatarImage-error" />
		</PopupWithForm>
	)
}

export default PopupAvatar
