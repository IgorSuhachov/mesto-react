import PopupWithForm from './PopupWithForm'
import React from 'react'

function PopupEdit({ isOpen, onClose, onEditPopup }) {
	const [title, setTitle] = React.useState('')
	const [link, setLink] = React.useState('')

	function handleSubmit(e) {
		e.preventDefault()

		onEditPopup({
			title: title,
			link: link,
		})
	}
	function handleTitleChange(e) {
		setTitle(e.target.value)
	}

	function handleLinkChange(e) {
		setLink(e.target.value)
	}

	return (
		<PopupWithForm name={'cardForm'} title={'Новое место'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder={'Название'}
				className="popup__input"
				name="title"
				id="elementTitle"
				required
				minLength="2"
				maxLength="30"
				value={title}
				onChange={handleTitleChange}
			/>
			<span className="popup__error elementTitle-error" />
			<input
				type="url"
				placeholder={'Ссылка на картинку'}
				className="popup__input"
				name="link"
				id="elementImage"
				required
				value={link}
				onChange={handleLinkChange}
			/>
			<span className="popup__error elementImage-error" />
		</PopupWithForm>
	)
}

export default PopupEdit
