"use client"
import Loading from "@/components/Loading"
import Navbar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";


 


export default function DashboardLayout({ children } : {children: React.ReactNode}) {
const pathname =  usePathname();
const [courseId, setCourseId]=  useState<string | null>(null);
const {user, isLoaded} = useUser();

//Handle use effect isCoursePage

if(!isLoaded) return <Loading/>;
if (!user) return <div>Please sign in to access this page.</div>

return (
    <SidebarProvider>
    <div className = "dashboard">
        <AppSidebar/>
        <div className="dashboard__content">
           {/*chapter sidebar will go*/} 
           <div className={(cn("dashboard__main", ))}
           style={{ height: "100vh"}}>
    <main className="dashboard__body">{children}</main>
    </div>
    </div>
   </div>
   </SidebarProvider>
);   
} 