import React, { useContext, useEffect, useState } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
// import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "../lib/utils";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
const specialRequirements = [
  { id: 1, name: "Accessible room", price: 50 },
  { id: 2, name: "Dietary needs", price: 30 },
  { id: 3, name: "Extra bed", price: 20 },
];

export default function Booking() {
  const { role, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role === "admin") {
      navigate("/adminDashboard");
    }
  }, []);
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [guests, setGuests] = useState("");
  const [rooms, setRooms] = useState("");
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  const handleRequirementChange = (id) => {
    setSelectedRequirements((prev) =>
      prev.includes(id) ? prev.filter((reqId) => reqId !== id) : [...prev, id]
    );
  };

  const totalPrice =
    1200 +
    selectedRequirements.reduce((acc, reqId) => {
      const req = specialRequirements.find((r) => r.id === reqId);
      return acc + (req ? req.price : 0);
    }, 0);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 ">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                Booking date range
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>

						<div className="block">
							<label
								htmlFor="guests"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Animals
							</label>
							<Select onValueChange={setGuests}>
								<SelectTrigger>
									<SelectValue placeholder="Select your pet" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1">1 animal</SelectItem>
									<SelectItem value="2">2 animals</SelectItem>
									<SelectItem value="3">3 animals</SelectItem>
									<SelectItem value="4">4 animals</SelectItem>
									<SelectItem value="5">
										5+ animals
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="col-span-2">
							<label
								htmlFor="special-requirements"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Special Services
							</label>
							<ul className="grid w-full gap-6 md:grid-cols-3">
								{specialRequirements.map((req) => (
									<li key={req.id}>
										<input
											type="checkbox"
											id={`req-${req.id}`}
											className="hidden peer"
											checked={selectedRequirements.includes(
												req.id,
											)}
											onChange={() =>
												handleRequirementChange(req.id)
											}
										/>
										<label
											htmlFor={`req-${req.id}`}
											className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
										>
											<div className="block">
												<div className="w-full text-lg font-semibold">
													{req.name}
												</div>
												<div className="w-full text-sm">
													+${req.price}
												</div>
											</div>
										</label>
									</li>
								))}
							</ul>
							<div className="col-span-2">
								<label
									htmlFor="add note"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Any Note:
								</label>
								<Textarea
									id="add note"
									rows={3}
									placeholder="Enter any special requirements (e.g., accessibility, dietary needs)"
								/>
							</div>
						</div>
					</form>
				</div>
				<div className="bg-white shadow-lg rounded-lg p-6 lg:p-8 mt-8">
					<h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Check-in
								</span>
								<span className="text-gray-500">
									{date.from
										? format(date.from, "LLL dd, y")
										: "N/A"}
								</span>
							</div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Check-out
								</span>
								<span className="text-gray-500">
									{date.to
										? format(date.to, "LLL dd, y")
										: "N/A"}
								</span>
							</div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Guests
								</span>
								<span className="text-gray-500">
									{guests ? `${guests} guests` : "N/A"}
								</span>
							</div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Rooms
								</span>
								<span className="text-gray-500">
									{rooms ? `${rooms} rooms` : "N/A"}
								</span>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Special Requirements
								</span>
								<span className="text-gray-500">
									{selectedRequirements.length > 0
										? selectedRequirements
												.map((reqId) => {
													const req =
														specialRequirements.find(
															(r) =>
																r.id === reqId,
														);
													return req ? req.name : "";
												})
												.join(", ")
										: "None"}
								</span>
							</div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-gray-700 font-medium">
									Total Price
								</span>
								<span className="text-gray-700 font-bold">
									<span className="text-gray-700 font-bold">
										${totalPrice}
									</span>
								</span>
							</div>
							<div className="flex justify-end">
								<Button>Confirm Booking</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
