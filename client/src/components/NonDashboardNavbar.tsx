"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";

  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          {/*link to homepage */}
          <Link href="/" className="nondashboard-navbar__brand">
            SOMA
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              {/*takes to search page*/}
              <Link
                href="/search"
                className="nondashboard-navbar__search-input"
              >
                {/*search courses set to be hidden for small screens*/}
                <span className="hidden sm:inline">Search Courses</span>
                {/*Search hidden for small screens*/}
                <span className="sm:hidden">Search</span>
              </Link>
              {/*Book open is an icon from lucide react*/}
              <BookOpen
                className="nondashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        
      </div>

      {/*right side of screen*/}
      <div className="nondashboard-navbar__actions">
        <button className="nondashboard-navbar__notification-button">
          <span className="nondashboard-navbar__notification-indicator"></span>
          {/*bell icon for notifications*/}
          <Bell className="nondashboard-navbar__notification-icon" />
        </button>

        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                userButtonBox: "scale-90 sm:scale-100",
              },
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </SignedIn>

        <SignedOut>
          <Link
            href="/signin"
            className="nondashboard-navbar__auth-button--login"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="nondashboard-navbar__auth-button--signup"
          >
            Sign Up
          </Link>
        </SignedOut>
      </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
