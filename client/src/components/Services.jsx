import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Special Services
              </h1>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Discover the wide range of Special services we offer to keep
                your furry friends happy and healthy during boarding.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Personalized Playtime
                </div>
                <h3 className="text-2xl font-bold">Playtime Adventures</h3>
                <p className="text-muted-foreground">
                  We cater to all personalities! From social butterflies who
                  thrive in group play sessions to shy pets who prefer
                  one-on-one attention, our staff will create a personalized
                  playtime experience for your furry friend. Leash walks for
                  exercise enthusiasts are also available.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Pricing:</span>
                    <span className="font-bold">$5/day</span>
                  </div>
                  <Link
                    to={"/booking"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Grooming
                </div>
                <h3 className="text-2xl font-bold">Professional Grooming</h3>
                <p className="text-muted-foreground">
                  Our experienced groomers use the latest techniques and
                  high-quality products to ensure your pet looks and feels their
                  best. From a simple bath and brush to a full-service spa
                  treatment, we'll have your furry friend looking
                  picture-perfect.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Pricing:</span>
                    <span className="font-bold">$35+</span>
                  </div>
                  <Link
                    to={"/booking"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Training
                </div>
                <h3 className="text-2xl font-bold">Obedience Training</h3>
                <p className="text-muted-foreground">
                  Our certified trainers use positive reinforcement methods to
                  help your pet develop good manners and become a well-behaved
                  companion. From basic commands to advanced tricks, we'll work
                  with you and your furry friend to achieve your training goals.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Pricing:</span>
                    <span className="font-bold">$50/session</span>
                  </div>
                  <Link
                    to={"/booking"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-muted px-8 text-sm font-medium text-muted-foreground shadow transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Hear from our satisfied customers about their experiences with
                our services.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Boarding</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-muted-foreground">
                  "The boarding facility was clean, comfortable, and the staff\n
                  was so attentive to my dog's needs. I felt completely at\n
                  ease leaving my furry friend in their care."
                </blockquote>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Grooming</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-muted-foreground">
                  "The grooming service was exceptional. My dog looked and\n
                  smelled amazing after their visit. The groomers were\n
                  patient, gentle, and really took the time to make sure my\n
                  pet was comfortable."
                </blockquote>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Tom Wilson</p>
                    <p className="text-sm text-muted-foreground">Training</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-muted-foreground">
                  "The training sessions were incredibly helpful. The trainer\n
                  was knowledgeable and patient, and my dog learned so many\n
                  new tricks and commands. I'm amazed at the progress we've\n
                  made."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center mb-5">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Find answers to the most common questions about our services.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background px-4 py-3 text-left font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  What are the requirements for boarding?
                  <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  All pets must be up-to-date on their vaccinations and
                  flea/tick prevention. We also require a temperament evaluation
                  to ensure your pet's safety and the safety of other guests.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background px-4 py-3 text-left font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  How often should I groom my pet?
                  <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  The frequency of grooming depends on your pet's breed and coat
                  type. We generally recommend a full grooming every 4-6 weeks,
                  with regular brushing and bathing in between.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background px-4 py-3 text-left font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  What does the training program cover?
                  <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  Our training program covers a wide range of topics, from basic
                  obedience commands to advanced tricks and socialization. We
                  work closely with you and your pet to develop a customized
                  training plan based on your specific needs and goals.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
