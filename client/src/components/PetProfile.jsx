import React from "react";
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

export default function PetProfile() {
  return (
    <div className="w-full  mx-auto p-4 md:p-6 lg:p-8 bg-[#f0f7ff]">
      <div className="flex flex-col md:flex-row items-start gap-8 ">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-muted w-24 h-24 flex items-center justify-center text-6xl">
              🐶
            </div>
            <div>
              <h1 className="text-2xl font-bold">Buddy</h1>
              <p className="text-muted-foreground">
                Golden Retriever, 5 years old
              </p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="grid gap-4">
            <div>
              <h2 className="text-lg font-semibold">About Buddy</h2>
              <p>
                Buddy is a friendly and energetic Golden Retriever who loves to
                play fetch and go for long walks. He's great with kids and other
                pets, and he has a gentle, affectionate personality.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Characteristics</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <PawPrintIcon className="w-5 h-5" />
                  Hypoallergenic
                </li>
                <li className="flex items-center gap-2">
                  <PawPrintIcon className="w-5 h-5" />
                  Loves to swim
                </li>
                <li className="flex items-center gap-2">
                  <PawPrintIcon className="w-5 h-5" />
                  Playful
                </li>
                <li className="flex items-center gap-2">
                  <PawPrintIcon className="w-5 h-5" />
                  Obedient
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid grid-cols-2 gap-2">
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h2 className="text-lg font-semibold">Pet Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" value="Buddy" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="breed">Breed</Label>
                      <Input id="breed" value="Golden Retriever" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" value="5 years" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" value="Male" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="gender">weight</Label>
                      <Input id="gender" value="Male" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="gender">color</Label>
                      <Input id="gender" value="Male" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="gender">description</Label>
                      <Input id="gender" value="Male" disabled />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <h2 className="text-lg font-semibold">Owner Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="owner-name">Owner Name</Label>
                      <Input id="owner-name" value="John Doe" disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="owner-phone">Owner Phone</Label>
                      <Input
                        id="owner-phone"
                        value="+1 (555) 555-5555"
                        disabled
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="owner-email">Owner Email</Label>
                      <Input
                        id="owner-email"
                        value="john@example.com"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="medical">
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
                            <SelectItem value="exam">
                              Veterinary Exam
                            </SelectItem>
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
    </div>
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
