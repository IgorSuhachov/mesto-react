import Card from './Card'
import Api from '../utils/api'
import { useEffect, useState } from 'react'

function Main({ onEditAvatarPopup, onProfilePopup, onEditPopup, onCardClick }) {
	const api = new Api({
		baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
		headers: {
			authorization: 'deae41f5-41fa-4007-af22-3906d8bef3ad',
			'Content-Type': 'application/json',
		},
	})

	const [userName, setUserName] = useState('')
	const [userDescription, setUserDescription] = useState('')
	const [userAvatar, setUserAvatar] = useState('')
	const [cards, setCards] = useState([])

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialsCards()])
			.then(([data, item]) => {
				setUserName(data.name)
				setUserDescription(data.about)
				setUserAvatar(data.avatar)
				setCards(item)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<main>
			<section className="profile">
				<img alt="аватар" className="profile__avatar" src={userAvatar} />
				<button
					className="profile__edit-avatar"
					type="button"
					onClick={() => {
						onEditAvatarPopup(true)
					}}
				></button>
				<div className="profile__info">
					<div className="profile__container">
						<h1 className="profile__name">{userName}</h1>
						<button
							className="profile__edit"
							type="button"
							onClick={() => {
								onProfilePopup(true)
							}}
						></button>
					</div>
					<p className="profile__description">{userDescription}</p>
				</div>
				<button
					className="profile__add"
					type="button"
					onClick={() => {
						onEditPopup(true)
					}}
				></button>
			</section>

			<section className="elements">
				{cards.map((card) => {
					return <Card key={card._id} name={card.name} link={card.link} likes={card.likes} onCardClick={onCardClick} />
				})}
			</section>
		</main>
	)
}

export default Main
