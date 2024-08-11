export const Footer = () => {
	return (
		<footer className="bg-black text-white py-2 w-full mt-auto">
			<div className="container mx-auto flex items-center justify-center text-xs">
				<span>
					Desarrollado por{" "}
					<a
						href="https://www.linkedin.com/in/mateobetancurb/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mateo |
					</a>
				</span>
				<p className="ml-1">Derechos reservados © {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};
