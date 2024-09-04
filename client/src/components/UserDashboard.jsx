import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "../components/ui/card";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function UserDashboard() {

	const [activeSection, setActiveSection] = useState("dashboard");

	return (
		<div className="grid min-h-screen w-full grid-cols-[200px_1fr] bg-secondary">
			<aside className="flex flex-col border-r bg-background">
				<div className="flex  h-14 items-center justify-between border-b px-4">
					<Button className="flex items-center gap-2 font-semibold">
						<PawPrintIcon className="h-6 w-6" />
						<span>Paw Prints</span>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full"
							>
								<img
									src="/placeholder.svg"
									width={32}
									height={32}
									alt="Avatar"
									className="rounded-full"
								/>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<nav className="flex flex-col gap-2 px-4 py-6">
					<Button
						className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${activeSection === "dashboard" ? "bg-accent text-accent-foreground" : ""}`}
						onClick={() => setActiveSection("dashboard")}
					>
						<HomeIcon className="h-5 w-5" />
						Dashboard
					</Button>
					<Button
						className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${activeSection === "petProfiles" ? "bg-accent text-accent-foreground" : ""}`}
						onClick={() => setActiveSection("petProfiles")}
					>
						<DogIcon className="h-5 w-5" />
						Pet Profiles
					</Button>
					<Button
						className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${activeSection === "bookings" ? "bg-accent text-accent-foreground" : ""}`}
						onClick={() => setActiveSection("bookings")}
					>
						<CalendarIcon className="h-5 w-5" />
						Bookings
					</Button>
					<Button
						className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${activeSection === "payments" ? "bg-accent text-accent-foreground" : ""}`}
						onClick={() => setActiveSection("payments")}
					>
						<CreditCardIcon className="h-5 w-5" />
						Payments
					</Button>
				</nav>
			</aside>
			<main className="flex flex-col gap-4 p-4 sm:p-6">

				{/* Dashboard */}
				{activeSection === "dashboard" && (
					<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
						{/* Upcoming Bookings */}
						<Card>
							<CardHeader>
								<CardTitle>Upcoming Bookings</CardTitle>
								<CardDescription>
									View your upcoming pet care appointments.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eec3e8] text-black">
											<CalendarIcon className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">
												Grooming Appointment
											</div>
											<div className="text-sm text-muted-foreground">
												June 15, 2023 - 10:00 AM
											</div>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eec3e8] text-black">
											<CalendarIcon className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">
												Vet Checkup
											</div>
											<div className="text-sm text-muted-foreground">
												June 20, 2023 - 2:30 PM
											</div>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="text-primary bg-[#eec3e8] hover:bg-accent hover:text-accent-foreground text-[#d254c1]">
									View all bookings
								</Button>
							</CardFooter>
						</Card>

						{/* Recent Activity */}
						<Card>
							<CardHeader>
								<CardTitle>Recent Activity</CardTitle>
								<CardDescription>
									See your latest pet-related activities.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
											<PawPrintIcon className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">
												Bella's Vet Visit
											</div>
											<div className="text-sm text-muted-foreground">
												June 10, 2023
											</div>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
											<PawPrintIcon className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">
												Grooming for Max
											</div>
											<div className="text-sm text-muted-foreground">
												June 5, 2023
											</div>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="text-primary bg-[#eec3e8] hover:bg-accent hover:text-accent-foreground text-[#d254c1]">
									View all activity
								</Button>
							</CardFooter>
						</Card>

						{/* Notifications */}
						<Card>
							<CardHeader>
								<CardTitle>Notifications</CardTitle>
								<CardDescription>
									Stay up-to-date with important alerts.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="flex gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-blue-500-foreground">
											<BellIcon className="h-5 w-5" />
										</div>
										<div>
											<div className="font-medium">
												Appointment Reminder
											</div>
											<div className="text-sm text-muted-foreground">
												Your grooming appointment is
												tomorrow at 10 AM.
											</div>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-blue-500-foreground">
											<BellIcon className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">
												Medication Refill
											</div>
											<div className="text-sm text-muted-foreground">
												Max's medication is due for a
												refill. Order now.
											</div>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="text-primary bg-[#eec3e8] hover:bg-accent hover:text-accent-foreground text-[#d254c1]">
									View all notifications
								</Button>
							</CardFooter>
						</Card>
					</section>
				)}

				{/* Pet Profiles */}
				{activeSection === "petProfiles" && (
					<section>
						<div className="flex items-center justify-between">
							<div>
								<h2 className="flex text-2xl font-bold items-start">
									Pet Profiles
								</h2>
								<p className="text-muted-foreground items-start">
									Quick access to your pet's information.
								</p>
							</div>
							<Link
								to={"/pet/add"}
								className="p-2 rounded-lg bg-[#eec3e8] text-black"
							>
								Add Pet
							</Link>
						</div>
						<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<Card>
								<CardContent className="flex flex-col items-center gap-4">
									<Avatar className="h-20 w-20 border">
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback className="text-6xl">
											🐶
										</AvatarFallback>
									</Avatar>
									<div className="text-center">
										<div className="font-medium">Bella</div>
										<div className="text-sm text-muted-foreground">
											Golden Retriever
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											<Link to={"/pet/view"}>View</Link>
										</Button>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center gap-4">
									<Avatar className="h-20 w-20 border">
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback className="text-6xl">
											🐱
										</AvatarFallback>
									</Avatar>
									<div className="text-center">
										<div className="font-medium">Max</div>
										<div className="text-sm text-muted-foreground">
											Persian Cat
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											<Link to={"/pet/view"}>View</Link>
										</Button>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center gap-4">
									<Avatar className="h-20 w-20 border">
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback className="text-6xl">
											🐰
										</AvatarFallback>
									</Avatar>
									<div className="text-center">
										<div className="font-medium">Daisy</div>
										<div className="text-sm text-muted-foreground">
											Dwarf Rabbit
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center gap-4">
									<Avatar className="h-20 w-20 border">
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback className="text-6xl">
											🐦
										</AvatarFallback>
									</Avatar>
									<div className="text-center">
										<div className="font-medium">Chirpy</div>
										<div className="text-sm text-muted-foreground">
											Cockatiel
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</section>
				)}

				{/* Bookings */}
				{activeSection === "bookings" && (
					<section>
						<div className="flex items-center justify-between">
							<div>
								<h2 className="flex items-start text-2xl font-bold">
									Bookings
								</h2>
								<p className="text-muted-foreground">
									View and manage your pet care appointments.
								</p>
							</div>
							<Button className="bg-[#eec3e8] text-black">
								New Booking
							</Button>
						</div>
						<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<Card>
								<CardContent>
									<div className="flex items-center gap-4">
										<Avatar className="h-12 w-12 border mt-2">
											<AvatarImage src="/placeholder-user.jpg" />
											<AvatarFallback className="text-3xl">
												🐶
											</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">Bella</div>
											<div className="text-sm text-muted-foreground">
												Grooming Appointment
											</div>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between mb-4">
										<div className="text-sm text-muted-foreground">
											June 15, 2023 - 10:00 AM
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="outline" size="sm">
											Cancel
										</Button>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div className="flex items-center gap-4 mt-2">
										<Avatar className="h-12 w-12 border">
											<AvatarImage src="/placeholder-user.jpg" />
											<AvatarFallback className="text-3xl">
												🐱
											</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">Max</div>
											<div className="text-sm text-muted-foreground">
												Vet Checkup
											</div>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between mb-4">
										<div className="text-sm text-muted-foreground">
											June 20, 2023 - 2:30 PM
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="outline" size="sm">
											Cancel
										</Button>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<div className="flex items-center gap-4 mt-2">
										<Avatar className="h-12 w-12 border">
											<AvatarImage src="/placeholder-user.jpg" />
											<AvatarFallback className="text-3xl">
												🐰
											</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">Daisy</div>
											<div className="text-sm text-muted-foreground">
												Boarding
											</div>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between">
										<div className="text-sm text-muted-foreground">
											June 25, 2023 - June 30, 2023
										</div>
										<div className="flex gap-2" />
									</div>
								</CardContent>
							</Card>
						</div>
					</section>
				)}
			</main>
		</div>
	);
}

function BellIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

function CalendarIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}

function CreditCardIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="14" x="2" y="5" rx="2" />
			<line x1="2" x2="22" y1="10" y2="10" />
		</svg>
	);
}

function DogIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
			<path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
			<path d="M8 14v.5" />
			<path d="M16 14v.5" />
			<path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
			<path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
		</svg>
	);
}

function HomeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function PawPrintIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="4" r="2" />
			<circle cx="18" cy="8" r="2" />
			<circle cx="20" cy="16" r="2" />
			<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
		</svg>
	);
}
