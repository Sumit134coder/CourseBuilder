"use client";

import React from "react";
import Image from "next/image";
import heroLogoLight from "@/assets/images/heroIcon_light.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-800 text-white-500">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <Image
            src={heroLogoLight}
            alt="TOTC"
            className=""
            height={83}
            width={144}
          />
          <div
            className="h-10 w-px bg-muted-foreground/40"
            role="separator"
            aria-hidden="true"
          />
          <p className="text-body-200 font-600 leading-tight">
            Virtual Class
            <br />
            for Zoom
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-center mb-10">
          <h2 className="text-body-600 text-dark-400 font-600 mb-4">
            Subscribe to get our Newsletter
          </h2>
          <form
            className="mx-auto flex max-w-md items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter subscription"
          >
            <label htmlFor="footer-email" className="sr-only">
              Your Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="btn btn-primary btn-pill"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation" className="mb-4 text-dark-400">
          <ul className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <li>
              <a
                href="#"
                className="hover:text-white-500 transition-colors"
              >
                Careers
              </a>
            </li>
            <li aria-hidden="true" className="text-white-500">
              |
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white-500 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li aria-hidden="true" className="text-primary-foreground/40">
              |
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white-500 transition-colors"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-center text-xs text-dark-400">
          &copy; 2026 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
