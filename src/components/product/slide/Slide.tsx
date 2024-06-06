"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const Slide = ({ images, title, className }: Props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
	return (
		<div className={className}>
			<Swiper
				style={
					{
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					} as React.CSSProperties
				}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							width={768}
							height={600}
							src={`/products/${image}`}
							alt={title}
							className="rounded-lg mx-auto"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
