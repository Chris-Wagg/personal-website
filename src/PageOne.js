import { Parallax } from 'react-parallax'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './styles.css'

const image1 =
	'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'

export default function PageOne() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	return (
		<div className="App">
			<Parallax
				bgImage="./img/snow.JPEG"
				blur={{ min: 0, max: 6 }}
				strength={500}
			>
				<div style={{ height: '940px' }}>
					<div className="navigation-wrapper">
						<div ref={sliderRef} className="keen-slider">
							<div className="keen-slider__slide number-slide">
								<div
									className="overlayText"
									style={{ top: '10%', left: '20%' }}
								>
									<h1>About me</h1>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Travel</h1>
								</div>
								<div className="textBox">
									<p>
										It's fairly well known around the world that Kiwi's love to
										travel. Being from a small country in the middle of the
										ocean, with the nearest next place being at least 3 hours on
										a plane, the idea of being able to simply drive from one
										country to another is pretty mind blowing.
									</p>
									<p>
										Don't get me wrong, New Zealand is an amazing place, but
										there's just something about the freedom of travel in Europe
										that brings you back every time.
									</p>
									<p>
										Travelling to Europe for the first time in 2016 made me fall
										in love with it. The places, the people, the cultures, all
										of it. Also, who doesn't love how cheap the plane tickets
										are!?
									</p>
									<p>
										In January of this year I took the plunge to move back to
										Sweden, in the middle of a global pandemic, not really
										speaking the language. Some would probably call that pretty
										crazy. But life is rarely simple and sometimes the hardest
										things to do are actually the best things for us.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Bouldering</h1>
								</div>
								<div className="textBox">
									<p>
										A friend of mine introduced me to bouldering back in 2019. I
										have never really been one for traditional sports so this
										instantly had my attention. 3 years later (with a bit of a
										break in the middle) and I'm still loving it.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Dancing</h1>
								</div>
								<div className="textBox">
									<p>
										Dancing has always been a huge part of my life. Starting
										when I was 5 it's always been a constant in my life. The
										technical skill required mixed with the creativity and
										musicality always just spoke to me. Tap dancing specifically
										has always been my go to and I have been lucky enough to
										also attend festivals in both Australia and Sweden.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Snow sports</h1>
								</div>
								<div className="textBox">
									<p>
										I still have vivid memories of my first week skiing,
										ploughing my way down the learner slope in my power blue
										overalls. Skip ahead about 10 years and I'm leaving home for
										the first time to move to Canada to do a working holiday on
										a ski hill. 18 months later I had been skiing at 6 different
										resorts in BC. By the end of that next year I had added 5
										more resorts now in 3 different continents and could now say
										I had now skied across the border from France to
										Switzerland.
									</p>
								</div>
							</div>
						</div>
						{loaded && instanceRef.current && (
							<>
								<Arrow
									left
									onClick={(e) =>
										e.stopPropagation() || instanceRef.current?.prev()
									}
									disabled={currentSlide === 0}
								/>

								<Arrow
									onClick={(e) =>
										e.stopPropagation() || instanceRef.current?.next()
									}
									disabled={
										currentSlide ===
										instanceRef.current.track.details.slides.length - 1
									}
								/>
							</>
						)}
					</div>
					{loaded && instanceRef.current && (
						<div className="dots">
							{[
								...Array(
									instanceRef.current.track.details.slides.length
								).keys(),
							].map((idx) => {
								return (
									<button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx)
										}}
										className={'dot' + (currentSlide === idx ? ' active' : '')}
									></button>
								)
							})}
						</div>
					)}
				</div>
			</Parallax>
		</div>
	)
}

function Arrow(props) {
	const disabeld = props.disabled ? ' arrow--disabled' : ''
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	)
}
