import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Separator } from "../components/ui/separator";
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "../components/ui/tabs";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "../components/ui/select";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AddPetProfile() {
	const { role, isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/login");
		} else if (role === "admin") {
			navigate("/adminDashboard");
		}
	}, []);
	const [formData, setFormData] = useState({
		name: "",
		breed: "",
		age: "",
		gender: "",
		color: "",
		weight: "",
		description: "",
		owner: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3000/api/pets/add",
				formData,
				{
					headers: {
						Authorization: `${window.localStorage.getItem("token")}`,
					},
				}
			);
			console.log("Pet added successfully:", response.data);
			// Handle success (e.g., show a success message, redirect, etc.)
		} catch (error) {
			console.error("Error adding pet:", error);
			// Handle error (e.g., show an error message)
		}
	};

	return (
		<div className="flex flex-col md:flex-row items-start gap-8 bg-muted pb-3">
			<div className="flex-1">
				<Tabs defaultValue="info" className="w-full">
					<TabsList className="grid grid-cols-2 gap-2">
						<TabsTrigger value="info">Info</TabsTrigger>
						<TabsTrigger value="medical">Medical</TabsTrigger>
					</TabsList>
					<TabsContent value="info" className="bg-card shadow mx-24 p-10">
						<form onSubmit={handleSubmit} className="grid gap-6">
							<div className="grid gap-2">
								<h2 className="text-lg font-semibold">Pet Information</h2>
								<div className="grid sm:grid-cols-2 gap-4">
									<div className="grid gap-1">
										<Label htmlFor="name">Name</Label>
										<Input
											id="name"
											value={formData.name}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="breed">Breed</Label>
										<Input
											id="breed"
											value={formData.breed}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="age">Age</Label>
										<Input
											id="age"
											value={formData.age}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="gender">Gender</Label>
										<Input
											id="gender"
											value={formData.gender}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="weight">Weight</Label>
										<Input
											id="weight"
											value={formData.weight}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="color">Color</Label>
										<Input
											id="color"
											value={formData.color}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="description">Description</Label>
										<Input
											id="description"
											value={formData.description}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<Button type="submit" className="mt-4">
								Submit
							</Button>
						</form>
					</TabsContent>
					<TabsContent value="medical" className="bg-card shadow mx-24 p-10">
						<div className="grid gap-6">
							<div className="grid gap-2">
								<h2 className="text-lg font-semibold">Medical Records</h2>
								<div className="grid gap-4">
									<div className="flex items-center gap-4">
										<div className="bg-muted rounded-md p-2 flex-shrink-0">
											<FileIcon className="w-6 h-6 text-muted-foreground" />
										</div>
										<div className="flex-1">
											<div className="font-medium">Vaccination Record</div>
											<div className="text-sm text-muted-foreground">
												Last updated: June 15, 2023
											</div>
										</div>
										<Button variant="outline" size="icon">
											<DownloadIcon className="w-5 h-5" />
											<span className="sr-only">Download</span>
										</Button>
									</div>
									<div className="flex items-center gap-4">
										<div className="bg-muted rounded-md p-2 flex-shrink-0">
											<FileIcon className="w-6 h-6 text-muted-foreground" />
										</div>
										<div className="flex-1">
											<div className="font-medium">Dietary Preferences</div>
											<div className="text-sm text-muted-foreground">
												Last updated: April 20, 2023
											</div>
										</div>
										<Button variant="outline" size="icon">
											<DownloadIcon className="w-5 h-5" />
											<span className="sr-only">Download</span>
										</Button>
									</div>
									<div className="flex items-center gap-4">
										<div className="bg-muted rounded-md p-2 flex-shrink-0">
											<FileIcon className="w-6 h-6 text-muted-foreground" />
										</div>
										<div className="flex-1">
											<div className="font-medium">Veterinary Exam</div>
											<div className="text-sm text-muted-foreground">
												Last updated: September 12, 2022
											</div>
										</div>
										<Button variant="outline" size="icon">
											<DownloadIcon className="w-5 h-5" />
											<span className="sr-only">Download</span>
										</Button>
									</div>
								</div>
							</div>
							<div className="grid gap-2">
								<h2 className="text-lg font-semibold">Upload New Record</h2>
								<div className="grid gap-4">
									<div className="grid sm:grid-cols-2 gap-4">
										<div className="grid gap-1">
											<Label htmlFor="record-type">Record Type</Label>
											<Select id="record-type">
												<SelectTrigger>
													<SelectValue placeholder="Select record type" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="vaccination">
														Vaccination
													</SelectItem>
													<SelectItem value="diet">
														Dietary Preferences
													</SelectItem>
													<SelectItem value="exam">Veterinary Exam</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div className="grid gap-1">
											<Label htmlFor="record-date">Date</Label>
											<Input id="record-date" type="date" />
										</div>
									</div>
									<div className="grid gap-1">
										<Label htmlFor="record-file">File</Label>
										<Input id="record-file" type="file" />
									</div>
									<Button>Upload Record</Button>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}

function DownloadIcon(props) {
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
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" x2="12" y1="15" y2="3" />
		</svg>
	);
}

function FileIcon(props) {
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
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		</svg>
	);
}
