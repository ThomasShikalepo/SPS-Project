"use client"
import { SignUp, useUser } from "@clerk/nextjs";
import { Darker_Grotesque } from "next/font/google";
import { constrainedMemory } from "process";
import {dark} from "@clerk/themes"
import React from "react";
import { useSearchParams } from "next/navigation";

const SignUpComponent = () => {

    const { user } = useUser();
    const searchParams = useSearchParams(); 
    const isCheckoutPage = searchParams.get("showSignUp") ! == null;
    const courseId = searchParams.get("id");
    
    const signInpUrl =  isCheckoutPage ? `/checkout?step=1&id=${courseId}&showSignUp=false` : "/signin";
    
    const getRedirect = () => {
        if (isCheckoutPage) {
            return `/checkout?step=2&id=${courseId}`
        }
    
        const userType = user?.publicMetadata?.userType as string;
        if (userType === "teacher") {
            return "/teacher/courses"
        }
        return "/user/courses";
    }



    return ( <SignUp
    
    appearance = {{
      baseTheme : dark, 
      elements: {
        rootBox: "flex justify-center items-center",
        cardBox: "shadow-none",
        card:  "bg-customgreys-secondarybg w-full shadow-none",
        footer: {
            background: "#25262F",
            padding : "0rem 2.5rem",
            "& > div > div:nth-child(1)" : {
                background: "25262F",
            }
        },
        formFieldLabel: "text-white-50 font-normal",
        formButtonPrimary: "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none"   ,
        formFieldInput: "bg-customegreys-primarybg text-white-50 !shadow-none",
         footerActionLink : "text-primary-750 hover:text-primary-600"
    },     
    }}
    signInUrl={signInpUrl}
    forceRedirectUrl={getRedirect()}
    routing = "hash"
    afterSignOutUrl="/"
    />
)
}

export default SignUpComponent;