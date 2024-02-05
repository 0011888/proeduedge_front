import React, {FC, useEffect, useState} from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Button,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
} from '@/components/ui';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import {useAppSelector} from '@/redux/hooks';
import {StateType} from '@/redux/root-reducer';
export const Header: FC = () => {
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	const {user} = useAppSelector((state: StateType) => state.users);
	const {data, errors, isLoading} = user;
	const handleScroll = () => {
		const offset = window.scrollY;
		const headerHeight = 100; // Replace with the actual height of your header
		if (offset > headerHeight) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
	];

	const handleMenuClick = (item: string) => {
		switch (item) {
			case 'profile':
				navigate('/dashboard/profile');
				break;
			case 'dashboard':
				console.log('Dashboard');
				navigate('/dashboard');
				break;
			case 'settings':
				navigate('/dashboard/settings');
				console.log('Settings');
				break;
			case 'log-out':
				// TODO: Implement logout functionality
				navigate('/login');
				console.log('Log out');
				break;
			default:
				console.log('default');
		}
	};
	return (
		<nav
			className={`py-3 z-50 nav w-full shadow-md mx-auto ${
				isScrolled ? 'nav-scrolled' : 'nav-top'
			}`}
		>
			<div className="w-8/12 flex items-center justify-between mx-auto">
				<div className="flex h-[40px] w-56  items-center gap-2">
					{/*<Image src={logo} alt="logo" />*/}
					<strong className="text-2xl font-bold">
						<Link to="/">
							<img src={logo} alt="logo" className="w-full h-full" />
						</Link>
					</strong>
				</div>
				<ul className="hidden sm:flex gap-4">
					<li>
						<NavLink
							className={({isActive}) =>
								isActive
									? 'text-black font-bold'
									: 'relative inline-flex items-center tap-highlight-transparent\n' +
									  '\t\t\t\t\t\toutline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2\n' +
									  '\t\t\t\t\t\tdata-[focus-visible=true]:outline-focus font-bold data-[focus-visible=true]:outline-offset-2\n' +
									  '\t\t\t\t\t\ttext-medium text-orange-400 no-underline hover:opacity-80 active:text-orange-400 active:opacity-disabled transition-opacity'
							}
							to={'/'}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) =>
								isActive
									? 'text-black font-bold'
									: 'relative inline-flex items-center tap-highlight-transparent\n' +
									  '\t\t\t\t\t\toutline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2\n' +
									  '\t\t\t\t\t\tdata-[focus-visible=true]:outline-focus font-bold data-[focus-visible=true]:outline-offset-2\n' +
									  '\t\t\t\t\t\ttext-medium text-orange-400 no-underline hover:opacity-80 active:text-orange-400 active:opacity-disabled transition-opacity'
							}
							to={'/courses'}
						>
							Courses
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) =>
								isActive
									? 'text-black font-bold'
									: 'relative inline-flex items-center tap-highlight-transparent\n' +
									  '\t\t\t\t\t\toutline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2\n' +
									  '\t\t\t\t\t\tdata-[focus-visible=true]:outline-focus font-bold data-[focus-visible=true]:outline-offset-2\n' +
									  '\t\t\t\t\t\ttext-medium text-orange-400 no-underline hover:opacity-80 active:text-orange-400 active:opacity-disabled transition-opacity'
							}
							to={'/about'}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) =>
								isActive
									? 'text-black font-bold'
									: 'relative inline-flex items-center tap-highlight-transparent\n' +
									  '\t\t\t\t\t\toutline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2\n' +
									  '\t\t\t\t\t\tdata-[focus-visible=true]:outline-focus font-bold data-[focus-visible=true]:outline-offset-2\n' +
									  '\t\t\t\t\t\ttext-medium text-orange-400 no-underline hover:opacity-80 active:text-orange-400 active:opacity-disabled transition-opacity'
							}
							to={'/contact'}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div>
					{data && !errors ? (
						<DropdownMenu>
							<DropdownMenuTrigger className="w-[14rem] cursor-pointer" asChild>
								<div className="py-1 px-5">
									<div
										className="flex items-center
								 justify-start gap-2"
									>
										<Avatar>
											<AvatarImage src={data?.avatarUrl} alt="Avatar" />
											<AvatarFallback className="border border-orange-500 bg-orange-500 text-white">
												{data?.firstName[0]}
												{data?.lastName[0]}
											</AvatarFallback>
										</Avatar>
										<div className="flex flex-col justify-center gap-1">
											<span className="text-sm">
												{data?.firstName + ' ' + data?.lastName}
											</span>
											<span className="text-sm text-orange-500">
												{data?.role.toUpperCase()}
											</span>
										</div>
									</div>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem onClick={() => handleMenuClick('profile')}>
										Profile
									</DropdownMenuItem>

									<DropdownMenuItem
										onAbort={() => handleMenuClick('dashboard')}
									>
										Dashboard
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => handleMenuClick('settings')}>
										Settings
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => handleMenuClick('log-out')}>
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<>
							<Button
								variant="outline"
								className="border text-orange-500 mr-3	hover:text-white hover:bg-orange-500 border-orange-500"
							>
								<NavLink to="/register">Be A Contributor</NavLink>
							</Button>
							<Button>
								<NavLink to="/login">Log In</NavLink>
							</Button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
