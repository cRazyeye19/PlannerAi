"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-maroon-800 font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-800 to-gold-700">
          <TypewriterComponent
            options={{
              strings: [
                "Productivity.",
                "Voice Assistance.",
                "Chat Assistance.",
                "Code Generation.",
                "Photo Generation.",
                "Music Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-200">
        Level up your Productivity.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-200 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
