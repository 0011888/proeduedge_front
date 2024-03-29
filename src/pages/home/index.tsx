import React from 'react';
import {Hero} from '../../components/hero';
import svg from '../../assets/images/Helped Students.svg';
import svg1 from '../../assets/images/Expert Teacher.svg';
import svg2 from '../../assets/images/Learn Anywhere.svg';
import svg3 from '../../assets/images/build-portfolio.svg';
import svg4 from '../../assets/images/Registered Students.svg';
import svg5 from '../../assets/images/Rank.svg';
import svg6 from '../../assets/images/Visits.svg';
import {FaCircleCheck} from 'react-icons/fa6';
import {Button, Image} from '@nextui-org/react';
import {CourseList} from '../../components/courseList';
import './style.css';
export const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<section className="md:w-8/12 w-7/12 px-6 mx-auto" id="about">
				<div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
					<div className="flex flex-col justify-center items-center sm:px-10">
						<Image src={svg} width={120} height={120} />
						<h3 className="text-2xl font-semibold">Unlimited Access</h3>
						<p className="text-gray-500 text-xs text-center">
							One subscription unlimited access
						</p>
					</div>
					<div className="flex flex-col justify-center items-center sm:px-10">
						<Image src={svg1} width={120} height={120} />
						<h3 className="text-2xl font-semibold">Expert Teachers</h3>
						<p className="text-gray-500 text-xs text-center	">
							Learn from industry experts who are passionate about teaching
						</p>
					</div>
					<div className="flex flex-col justify-center items-center sm:px-10">
						<Image src={svg2} width={120} height={120} />
						<h3 className="text-2xl font-semibold">Learn Anywhere</h3>
						<p className="text-gray-500 text-xs text-center">
							Switch between your computer, tablet, or mobile device.
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center mt-24 flex-wrap gap-2">
					<div className="flex flex-col justify-start w-6/12 md:mx-auto ">
						<h1 className="text-5xl font-extralight  text-amber-400">
							Learn A Skill. Build Your Portfolio.
							<strong className="font-extrabold">Get Hired!</strong>
						</h1>
						<p className="text-xl font-light text-gray-500 mt-4">
							lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<Button
							radius="full"
							size="lg"
							className="text-white bg-gradient-to-tr from-amber-500 to-amber-400 mt-4 px-12"
						>
							Discover Courses
						</Button>
					</div>
					<div className="md:mx-auto">
						<Image removeWrapper src={svg3} width={500} height={500} />
					</div>
				</div>
			</section>
			<CourseList />
			<section className="px-12">
				<div className="md:w-8/12 w-7/12 px-6 mx-auto py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 ">
					<div className="flex flex-col justify-between items-center sm:px-10">
						<Image className="py-5" src={svg4} width={120} height={120} />
						<div>
							<h3 className="text-5xl text-gray-700 font-semibold">10000+</h3>
							<p className="text-gray-500 text-xs text-center">
								Registered Students
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between items-center sm:px-10">
						<Image className="py-5" src={svg} width={120} height={120} />
						<div>
							<h3 className="text-5xl text-gray-700 text-center font-semibold">
								2168
							</h3>
							<p className="text-gray-500 text-xs text-center">
								Students Helped each other
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between items-center sm:px-10">
						<Image className="py-5" src={svg5} width={120} height={120} />
						<div>
							<h3 className="text-5xl text-gray-700 font-semibold">120+</h3>
							<p className="text-gray-500 text-xs text-center">
								Registered Students
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between	 items-center sm:px-10">
						<Image className="py-5" src={svg6} width={120} height={120} />
						<div>
							<h3 className="text-5xl text-gray-700  font-semibold text-center">
								10000
							</h3>
							<p className="text-gray-500 text-xs text-center	">
								More than 10,000 visits
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="pricing" className="py-20 ">
				<div className="md:w-8/12 w-7/12 mx-auto flex gap-4 items-center">
					<div className="md:w-5/12 text-left flex flex-col gap-3 justify-start items-start py-8">
						<h2 className="text-5xl font-bold text-amber-400 mb-2">
							Our Pricing Plans
						</h2>
						<p className="text-gray-600 mb-8">
							ProEduEdge is an online education platform that delivers video
							courses, programs and resources for students looking for a career
							in the tech industry.
						</p>
						<Button
							radius="full"
							size="lg"
							className="text-white bg-gradient-to-tr from-amber-500 to-amber-400"
						>
							Start Free Trial
						</Button>
					</div>
					<div className="flex justify-center space-x-6 px-6">
						<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:-translate-y-2 transition-transform">
							<div className="px-4 py-4 ">
								<div className="text-xl mb-2">Basic</div>
								<p className="text-gray-700 text-base">
									$
									<span className="text-8xl font-extrabold text-amber-400">
										15
									</span>
									<span className="text-tiny text-gray-500">/Monthly</span>
								</p>
								<p className="text-gray-600 text-sm my-4">
									ProEduEdge is an online education platform that delivers video
									courses, programs and resources for students looking for a
									career in the tech industry.
								</p>
								<ul className="list-none space-y-2">
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Unlimited
										Download
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Offline
										Accessibility
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> 24/7 Supports
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Jobs
										Opportunity
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> 2.0%
										Transaction Fee
									</li>
								</ul>
							</div>
						</div>

						<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:-translate-y-2 transition-transform">
							<div className="px-4 py-4">
								<div className=" text-xl mb-2">Premium</div>
								<p className="text-gray-700 text-base">
									$
									<span className="text-8xl font-bold text-amber-400">120</span>
									<span className="text-tiny text-gray-500">/Annually</span>
								</p>
								<p className="text-gray-600 text-sm my-4">
									ProEduEdge is an online education platform that delivers video
									courses, programs and resources for students looking for a
									career in the tech industry.
								</p>
								<ul className="list-none space-y-2">
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Unlimited
										Download
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Offline
										Accessibility
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> 24/7 Supports
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> Jobs
										Opportunity
									</li>
									<li className="flex gap-2 items-center text-gray-500 font-light text-sm">
										<FaCircleCheck className="text-amber-400" /> 2.0%
										Transaction Fee
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
