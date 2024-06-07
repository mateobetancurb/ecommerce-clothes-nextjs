"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./slide.css";

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const SlideMobile = ({ images, title, className }: Props) => {
	return (
		<div className={className}>
			<Swiper
				style={
					{
						width: "100vw",
						height: "500px",
						"--swiper-pagination-color": "#000",
					} as React.CSSProperties
				}
				pagination
				autoplay={{
					delay: 4000,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="mySwiper2"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							width={600}
							height={500}
							src={`/products/${image}`}
							alt={title}
							className="object-fill"
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
