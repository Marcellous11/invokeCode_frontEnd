import Link from "next/link";
import Image from "next/image";
export default function MenuOption({ iconImage, iconName, path }) {
	return (
		//landing page icons
		<Link className="relative h-60 w-60 module-icons" href={path}>
			<Image
				className="absolute mt-2 ml-5 "
				style={{ "border-radius": "20%" }}
				src={iconImage}
				width={200}
				height={0}
				alt={"Screen shot of Code Name Generator pags"}
			></Image>
			<div
				className="relative z-50 transition-all bg-green-300 opacity-0 hover:opacity-100 h-60"
				style={{ "border-radius": "20%" }}
			>
				<p className="text-center pt-28">{iconName}</p>
			</div>
		</Link>
	);
}
