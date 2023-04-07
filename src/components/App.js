import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupProfile from './PopupProfile'
import PopupEdit from './PopupAddPlace'
import PopupAvatar from './PopupAvatar'
import ImagePopup from './ImagePopup'
import CurrentUserContext from '../contexts/CurrentUserContext'
import Api from '../utils/api'

function App() {
	const [isEditProfilePopup, setEditProfilePopup] = React.useState(false)
	const [isAddPlacePopup, setAddPlacePopup] = React.useState(false)
	const [isEditAvatarPopup, setEditAvatarPopup] = React.useState(false)
	const [selectedCard, setSelectedCard] = React.useState({})
	const [currentUser, setCurrentUser] = React.useState({})
	const [cards, setCards] = React.useState([])

	const api = new Api({
		baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
		headers: {
			authorization: 'deae41f5-41fa-4007-af22-3906d8bef3ad',
			'Content-Type': 'application/json',
		},
	})

	React.useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialsCards()])
			.then(([data, item]) => {
				setCurrentUser(data)
				setCards(item)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	function closeAllPopups() {
		setEditProfilePopup(false)
		setAddPlacePopup(false)
		setEditAvatarPopup(false)
		setSelectedCard({})
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id)

		api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
			setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
		})
	}

	function handleCardDelete(card) {
		api
			.deleteCard(card._id)
			.then(() => {
				setCards((state) => state.filter((c) => c._id !== card._id))
			})
			.catch((err) => console.log(err))
	}

	function handleUpdateUser(data) {
		api
			.setUserInfo(data)
			.then((data) => {
				setCurrentUser(data)
				closeAllPopups()
			})
			.catch((err) => console.log(err))
	}

	function handleUpdateAvatar(data) {
		api
			.setAvatar(data)
			.then((data) => {
				setCurrentUser(data)
				closeAllPopups()
			})
			.catch((err) => console.log(err))
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="root">
				<div className="body">
					<Header />
					<Main
						cards={cards}
						onProfilePopup={setEditProfilePopup}
						onEditPopup={setAddPlacePopup}
						onEditAvatarPopup={setEditAvatarPopup}
						onCardClick={setSelectedCard}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete}
					/>
					<Footer />
					<PopupProfile isOpen={isEditProfilePopup} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
					<PopupEdit isOpen={isAddPlacePopup} onClose={closeAllPopups} />
					<PopupAvatar isOpen={isEditAvatarPopup} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
				</div>
			</div>
		</CurrentUserContext.Provider>
	)
}

export default App
