import { Parallax } from 'react-parallax'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './styles.css'

export default function PageTwo() {
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
				bgImage="./img/climbingWall.jpg"
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
									<h1>My Backgrouond</h1>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Tech background</h1>
								</div>
								<div className="textBox">
									<p>
										My journey into tech started only recently. In July of last
										year, after not really knowing what to do with life, a
										friend convinced me to do the same development course he had
										done previously.
									</p>
									<p>
										It was at this point that I discovered my love for front end
										development and design. The course I did with Enspiral Dev
										Academy was one of the most challenging and rewarding
										experiences of my life. In 4 months I went from knowing
										almost nothing about coding, to helping design and build an
										entire web app MVP. Every day was spent coding and pushing
										myself to learn something new.
									</p>
									<p>
										At the end of the course I realised just how much I had
										learnt about being curious, about what I loved doing and
										most importantly, about what I didn't know. I also learnt a
										whole lot about myself, how it's ok to not know everything
										and to always ask questions.
									</p>
									<p>
										Even with less than a year's worth of experience, I can
										already see this is something I will want to do for a long
										time. I am always curious to see the next leap in technology
										or see the next big design trend. The feeling of something
										coming together, that piece of code finally working, or that
										concept finally clicking into place is just the best and
										something I want to keep chasing as long as I can.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Teaching background</h1>
								</div>
								<div className="textBox">
									<p>
										I first started teaching dance when I was 16, just as an
										assistant teacher. At first I was just doing it for the
										money and exercise but after a while I found I was really
										starting to enjoy it. With tap dance especially the mix of
										the technical skill required along with the creative aspect
										was a real driving force to always keep me pushing my
										students and myself to get that next hard step.
									</p>
									<p>
										I had the opportunity to teach in a different way when I was
										managing a cafe in central Wellington. Getting to teach
										coffee was another hugely rewarding experience, again mixing
										the technical with the creative really made me realise how
										much I enjoyed teaching itself. I was managing a team of up
										to 10 people and getting to see each of them progress in
										their various ways was always an amazing and rewarding
										experience.
									</p>
									<p>
										Over the course of 2021 I again got the opportunity to teach
										advanced tap dance at my local studio and found that my
										teaching had come a long way since the original classes I
										had taught. Though each teaching situation had its own
										challenges and rewards, it is always something I will enjoy
										doing and hope to continue in the future, in whatever role I
										hold.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>Hospitality background</h1>
								</div>
								<div className="textBox">
									<p>
										For most of my working life I have worked in hospitality.
										This is definitely not an industry for the faint hearted and
										has taught me many skills as well as teaching me a lot of
										things about myself.
									</p>
									<p>
										An industry like hospitality very quickly teaches you to
										have both thick skin and to be able to deal with pressure.
										When you’re dealing with high volume service and something
										goes wrong, you just have to roll with it and make the best
										of what you have.
									</p>
									<p>
										One of the most valuable things I have learnt from
										hospitality though is how to work with people. When you have
										such high turnover, you quickly adapt to new people coming
										in and out and how to use the skills they bring to make sure
										everyone is bringing their best and working together.
									</p>
									<p>
										I have always enjoyed working with other people, getting to
										know them, getting to see them grow in the roles they have.
										I find I begin to thrive when the pressure is on but you can
										still have fun with the people you work with, which is the
										most important thing about working with others. Even though
										things might get tough, as long as you can still have a team
										that wants to come to work and have fun, that’s the most
										important part.
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
