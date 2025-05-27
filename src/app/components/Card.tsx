import Button from "./Button";

const Card = () => {
	return (
		<div className="w-60 rounded-2xl bg-white p-4">
			<div>
				<img src="/public/assets/produtos/tenis.jpg"></img>
			</div>
			<div className="p-4">
				<div className="mb-2 flex items-center justify-center">
					<h3>Nome Produto</h3>
				</div>
				<div className="flex items-center justify-center">
					<span>Valor produto</span>
				</div>
			</div>
			<Button>Adicionar ao Carrinho</Button>
		</div>
	);
};

export default Card;
