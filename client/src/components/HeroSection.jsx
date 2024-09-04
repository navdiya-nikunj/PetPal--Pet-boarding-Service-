import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import dog from "../assets/br_logo.png";
import dog2 from "../assets/png1.png";

import Footer from "./Footer";
import { Link } from "react-router-dom";

// Dummy Link component to replace Next.js Link

const Hero = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] object-fill">
        <img
          src={dog}
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Exceptional Pet Care, Anytime
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our pet care service provides personalized attention, live video
              streaming, and virtual vet consultations to keep your furry
              friends happy and healthy.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              to={"/services"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Book Now
            </Link>
            <Link
              to={"/signup"}
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">
            Key Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tailored Pet Care Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our pet care service offers a range of features to ensure your furry
            friends receive the best possible care, anytime.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Live Video Streaming</h3>
                <p className="text-muted-foreground">
                  Check in on your pets anytime with our live video streaming
                  feature.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Personalized Care Plans</h3>
                <p className="text-muted-foreground">
                  Our team of experts will create a customized care plan for
                  your pet's unique needs.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Virtual Vet Consultations</h3>
                <p className="text-muted-foreground">
                  Connect with our veterinary team for virtual consultations and
                  advice.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src={dog2}
          alt="Features"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our
            pet care service.
          </p>
        </div>
      </div>

      <div className="mx-auto flexitems-center gap-6 py-12  max-w-2xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            autoplay: true,
            autoplayInterval: 5000,
          }}
          className="mt-12 mx-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <Card className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Dog Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Paw Care has been a game-changer for my family. The\n
                  personalized care plans and 24/7 access to vets have\n given
                  me peace of mind knowing my pup is in good\n hands."
                </p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Sarah Miller</h4>
                    <p className="text-sm text-muted-foreground">Cat Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I was hesitant to try a virtual vet service, but Paw\n Care
                  has exceeded my expectations. The vets are\n knowledgeable,
                  and the convenience is unbeatable."
                </p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Tom Wilson</h4>
                    <p className="text-sm text-muted-foreground">Bird Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Paw Care has been a lifesaver for my feathered friend.\n The
                  personalized care plans and 24/7 access to vets\n have been
                  invaluable. I highly recommend this service!"
                </p>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
);

const PawPrintIcon = (props) => (
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

const HeroSection = () => (
  <div className="flex flex-col min-h-[100dvh] w-full">
    <main className="flex-1">
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
    <Footer />
  </div>
);

export default HeroSection;
