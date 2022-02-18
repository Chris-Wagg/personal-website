import { Parallax } from 'react-parallax'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './styles.css'

export default function PageThree() {
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
				bgImage="./img/tapShoes.JPEG"
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
									<h1>My Projects</h1>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>
										<a
											href="https://github.com/Chris-Wagg/KIND"
											style={{ color: 'black' }}
										>
											KIND
										</a>
									</h1>
								</div>
								<div className="textBox">
									<p>
										The final project from my Full Stack Development course.
										Myself and 4 others tackled the problem of how to grow
										people's awareness of the environment and what each person
										could do to help combat climate change. This project allows
										people to create lists of small tasks they can do everyday
										to help in their own small way.
									</p>
									<p>
										This project was our first real taste of a development
										environment and was a real test of our problem solving and
										interpersonal skills. Having to solve problems on the go
										while working with and around the other people on our team.
										This entire project was completed in 6 days.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>
										<a
											href="https://github.com/Chris-Wagg/danceFinder-next"
											style={{ color: 'black' }}
										>
											danceFinder
										</a>
									</h1>
								</div>
								<div className="textBox">
									<p>
										A personal project of mine. Since travelling I have
										discovered there is now way to easily find dance classes.
										Google does part of this job, but there is no way to easily
										see what places offer what kinds of classes. Here I am
										hoping to eventually solve this problem.
									</p>
									<p>
										While this is still a work in progress, I have learnt a lot
										about the Next.js framework, Material UI components as well
										as started looking into Prisma databases as well.
									</p>
								</div>
							</div>
							<div className="keen-slider__slide number-slide">
								<div className="textBox">
									<h1>
										<a
											href="https://github.com/Chris-Wagg/complete-javascript-course/tree/development/13-Advanced-DOM-Bankist/starter"
											style={{ color: 'black' }}
										>
											Bankist landing page
										</a>
									</h1>
								</div>
								<div className="textBox">
									<p>
										In the course of my personal project and throughout the time
										of the development course I took late last year, I never
										really felt all that comfortable with Javascript. This
										project is apart of an online JS course that is really
										helping to expand my knowlede of JS and help me feel a lot
										more comfortable in using it. This project delt with a lot
										of the interface comonents such as click events, scroll
										events and picture slider functionality.
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
