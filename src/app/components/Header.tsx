import Input from "./Input";

const Header = () => {
	return (
		<header className="fixed right-0 top-0 flex w-full justify-center bg-white py-3">
			<div className="mx-auto flex w-11/12 items-center justify-between gap-52">
				<div>
					<a href="/">
						<img
							src="/public/assets/logo.png"
							alt="Shop Logo"
							className="max-w-36"
						></img>
					</a>
				</div>
				<div className="w-4/5">
					<Input />
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};

export default Header;
