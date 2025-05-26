const Header = () => {
	return (
		<header className="fixed right-0 top-0 flex w-full justify-center bg-white py-3">
			<div className="mx-auto flex w-11/12 items-center justify-between gap-52">
				<div>
					<a>
						<img
							src="http://localhost:5173/public/assets/logo.png"
							alt="Shop Logo"
							className="max-w-36"
						></img>
					</a>
				</div>
				<div className="w-4/5">
					<input
						placeholder="Procurar..."
						className="w-full rounded bg-gray-200 p-2 outline-none"
					></input>
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};

export { Header };
