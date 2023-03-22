function Card(card) {
	function handleClick() {
		card.onCardClick(card)
	}

	return (
		<div className="elements__card">
			<button className="elements__trash" type="button"></button>
			<img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
			<div className="elements__header">
				<h2 className="elements__title">{card.name}</h2>
				<div className="elements__like">
					<button className="elements__like__button" type="button"></button>
					<p className="elements__like__count">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card
