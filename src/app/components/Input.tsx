import { tv } from "tailwind-variants";

const inputVariants = tv({
	base: "w-full rounded bg-gray-200 p-2 outline-none",
});

const Input = () => {
	return (
		<div>
			<input placeholder="Procurar..." className={inputVariants.base}></input>
		</div>
	);
};

export default Input;
