import MenuOption from "./MenuOption";
export default function GridOptions({ name }) {
	return (
		<div className="relative flex justify-center f-full top-20 ">
			<div className="grid grid-cols-2 gap-6 gap-x-10">
				<MenuOption
					iconImage="/Screenshot_codeName.png"
					iconName="Code Name Generator"
					path={"codeNames"}
				/>
				<MenuOption
					iconImage="/Screenshot 2023-11-19 at 12.03.33 PM.png"
					iconName="User Data"
					path={"userData"}
				/>
			</div>
		</div>
	);
}
