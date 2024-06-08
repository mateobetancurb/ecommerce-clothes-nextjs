export const Footer = () => {
	return (
		<div className="bg-black h-10 text-white flex items-center gap-1 w-full justify-center text-xs">
			<span>
				Desarrollado por{" "}
				<a href="https://www.linkedin.com/in/mateobetancurb/" target="_bank">
					Mateo |
				</a>
			</span>
			<p>Derechos reservados © {new Date().getFullYear()}</p>
		</div>
	);
};
