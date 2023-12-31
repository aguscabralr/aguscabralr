"use client";
import Link from "next/link";
import { useState } from "react";
import Contact from "@/public/icons/home/contact.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const ContactLink = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={"/"} onMouseMove={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="w-[50px] h-10 flex-center" >
      {isHover ? (
        <Player
          autoplay
          keepLastFrame={true}
          src={Contact}
          style={{ width: '40px', height: '40px' }}
        />
      ) : "Contact"}
    </Link >
  );
};
