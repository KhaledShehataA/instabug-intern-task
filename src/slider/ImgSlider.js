import React, { useState } from 'react';
import { SliderData } from './SliderData';

const ImgSlider = () => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	return (
		<section className='slider'>
			{SliderData.map((slide, index) => {
				return <img src={slide.image} alt='InstaBug' />;
			})}
		</section>
	);
};

export default ImgSlider;
