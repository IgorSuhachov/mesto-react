function Main() {
	return (
		<main>
			<section className="profile">
				<img alt="аватар" className="profile__avatar" />
				<button className="profile__edit-avatar" type="button"></button>
				<div className="profile__info">
					<div className="profile__container">
						<h1 className="profile__name">Жак Фресков</h1>
						<button className="profile__edit" type="button"></button>
					</div>
					<p className="profile__description">А?</p>
				</div>
				<button className="profile__add" type="button"></button>
			</section>
		</main>
	)
}

export default Main
