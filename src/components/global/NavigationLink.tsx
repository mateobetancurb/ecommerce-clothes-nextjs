import Link from "next/link";
import { NavLink } from "@/interfaces";

interface Props {
	linkInfo: NavLink;
}

export const NavigationLink = ({ linkInfo }: Props) => {
	return (
		<Link
			href={linkInfo.url}
			className={`flex items-center gap-4 py-5 px-3 hover:bg-gray-100 rounded transition-all ${linkInfo.styles}`}
		>
			{linkInfo.icon}
			{linkInfo.text}
		</Link>
	);
};
