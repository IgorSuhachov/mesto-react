import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupProfile from './PopupProfile'
import PopupEdit from './PopupAddPlace'
import PopupAvatar from './PopupAvatar'
import ImagePopup from './ImagePopup'

function App() {
	const [isEditProfilePopup, setEditProfilePopup] = React.useState(false)
	const [isAddPlacePopup, setAddPlacePopup] = React.useState(false)
	const [isEditAvatarPopup, setEditAvatarPopup] = React.useState(false)
	const [selectedCard, setSelectedCard] = React.useState({})

	function closeAllPopups() {
		setEditProfilePopup(false)
		setAddPlacePopup(false)
		setEditAvatarPopup(false)
		setSelectedCard({})
	}

	return (
		<div className="root">
			<div className="body">
				<Header />
				<Main
					onProfilePopup={setEditProfilePopup}
					onEditPopup={setAddPlacePopup}
					onEditAvatarPopup={setEditAvatarPopup}
					onCardClick={setSelectedCard}
				/>
				<Footer />
				<PopupProfile isOpen={isEditProfilePopup} onClose={closeAllPopups} />
				<PopupEdit isOpen={isAddPlacePopup} onClose={closeAllPopups} />
				<PopupAvatar isOpen={isEditAvatarPopup} onClose={closeAllPopups} />
				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</div>
		</div>
	)
}

export default App
