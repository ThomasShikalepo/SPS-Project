"use client"
import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page"
import Footer from "@/components/Footer";
import {useState, useEffect, useRef} from "react";

import { Button } from "@/components/ui/button";



import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from "lucide-react";


import {motion, AnimatePresence} from "framer-motion";




export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);

const chatIconRef = useRef<HTMLButtonElement>(null);

useEffect( ()=> {
  const handleScroll = () => {
    if(window.scrollY > 200){
      setShowChatIcon(true);
    }else{
      setShowChatIcon(false);
      setIsChatOpen(false);
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);


  return () => {
    window.removeEventListener("scroll", handleScroll);
  }
}, []);


const toggleChat = () =>{
  setIsChatOpen(!isChatOpen);
}



  return (
    <div className="nondashboard-layout">
     <NonDashboardNavbar/>
     <main className="nondashboard-layout__main" >
      <Landing />
      <AnimatePresence>
{showChatIcon && (
<motion.div
initial= {{opacity:0, y:100}}
animate={{opacity: 1, y:0}}
exit={{opacity:0, y:100}}
transition={{duration:0.2}}
className="fixed bottom-10 right-4 z-50"
>
  <Button
    ref={chatIconRef}
    onClick={toggleChat}
    size="icon"
    className="rounded-full size-14 p-2 shadow-lg">
      {!isChatOpen ?(
        <MessageCircle className="size-12"/>
      ): (
        <ArrowDownCircleIcon/>
      )}
  </Button>
</motion.div>

)}

      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen &&(
          <motion.div
          initial= {{opacity:0, y:100}}
          animate={{opacity: 1, y:0}}
          exit={{opacity:0, y:100}}
          transition={{duration:0.2}}
          className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px]"
          >
            < Home />
            </motion.div>
        )}
      </AnimatePresence>
     </main>
     <Footer/>
    </div>
  );
}
