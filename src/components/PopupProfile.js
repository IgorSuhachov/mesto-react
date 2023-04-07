import PopupWithForm from './PopupWithForm'
import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

function PopupProfile({ isOpen, onClose, onUpdateUser }) {
	const currentUser = React.useContext(CurrentUserContext)
	const [name, setName] = React.useState('')
	const [description, setDescription] = React.useState('')

	React.useEffect(() => {
		setName(currentUser.name)
		setDescription(currentUser.about)
	}, [currentUser])

	function handleSubmit(e) {
		e.preventDefault()
		onUpdateUser({
			name: name,
			description: description,
		})
	}

	function handleChangeName(e) {
		setName(e.target.value)
	}

	function handleChangeDescription(e) {
		setDescription(e.target.value)
	}

	return (
		<PopupWithForm
			name="profileForm"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder={'Введите имя'}
				className="popup__input"
				id="profileName"
				name="name"
				required
				minLength="2"
				maxLength="40"
				value={name || ''}
				onChange={handleChangeName}
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
				value={description || ''}
				onChange={handleChangeDescription}
			/>
			<span className="popup__error profileDescription-error" />
		</PopupWithForm>
	)
}

export default PopupProfile
