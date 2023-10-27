"use client";

import { SectionHeader } from "../SectionHeader";
import { MotionProvider } from "../MotionProvider";

export function Newsletter() {
  return (
    <section
      className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full items-center justify-center">
          <SectionHeader
            pretitle="Get in touch"
            title="Sign up to our newsletter"
          />

          <MotionProvider
            delay={0.4}
            amount={0.3}
            className="relative flex items-center w-full max-w-xl"
          >
            <input
              name="email"
              type="email"
              placeholder="Email address"
              autoComplete="on"
              className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
            />
            <button
              type="submit"
              className="bg-accent-default absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all duration-300 px-6 focus:bg-accent-focus"
            >
              Subscribe
            </button>
          </MotionProvider>
        </div>
      </div>
    </section>
  );
}
