"use client"
import { TechIcon } from "@/components/TechIcon";
import Html from "@/assets/icons/html5.svg"
import CSS from "@/assets/icons/css3.svg"
import Javascript from "@/assets/icons/square-js.svg"
import React from "@/assets/icons/react.svg"
import Github from "@/assets/icons/github.svg"
import Chrome from "@/assets/icons/chrome.svg"
import Next from "@/assets/icons/icons8-nextjs.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import Prisma from "@/assets/icons/Prisma.svg";
import Image from "next/image";
import pfp from "@/assets/images/book.webp"
import newton from "@/assets/images/newton.webp"
import map from "@/assets/images/map.png"
import solana from "@/assets/icons/solana.svg"
import ethereum from "@/assets/icons/ethereum.svg"
import webrtc from "@/assets/icons/webrtc.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import Websocket from "@/assets/icons/websocket.svg"
import tailwind from "@/assets/icons/tailwind.svg"
import typescript from "@/assets/icons/typescript.svg"
import Docker from "@/assets/images/docker.svg"
import Turbo from "@/assets/images/turborepo-seeklogo.svg"
import ToolBox from "@/components/ToolBox";
import Rust from "@/assets/images/rust.svg"
import Solidity from "@/assets/images/solidity.svg"

export const AboutSection = () => {
  // const languages = ["Html", "CSS", "Javascript", "React.js", "NEXT.js", "MongoDB", "PostgreSQL", "Prisma(ORM)", "AceternityUI", "DaisyUI", "Python", "ShadcnUI"]
  const languages = [
    { name: "Html", iconType: Html  },
    { name: "CSS", iconType: CSS  },
    { name: "Javascript", iconType: Javascript  },
    {name: "Docker", iconType: Docker},
    {name: "TurboRepo", iconType: Turbo},
    { name: "React.js", iconType: React  },
    { name: "PostgreSQL", iconType: PostgreSQL  },
    { name: "Prisma", iconType: Prisma  },
    { name: "NEXT.js", iconType: Next  },
    { name: "Websockets", iconType: Websocket  },
    { name: "Typescript", iconType: typescript  },
    { name: "Tailwind", iconType: tailwind  },
    { name: "Rust", iconType: Rust  },
    { name: "Solidity", iconType: Solidity  },
    
  ]



  const learnings = [
    { name: "Solana", iconType: solana  },
    { name: "Ethereum", iconType: ethereum  },
    { name: "WebRTC", iconType: webrtc  },

  ]
  
  return (
    <section id="about" className="p-5 flex flex-col items-center">
      <div className="max-w-6xl">
        <SectionHeader eyebrow="About Me" title="A Glimpse" description="Learn more about me, my Tech, my Toolbox!"/>
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid gap-8 md:grid-cols-5 md:gap-8">
            <Card className="border-2 md:mb-0 mb-6 h-[360px] md:col-span-2 border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-8 text-emerald-300"/>
                    <h2 className="font-serif text-3xl">My Reads</h2>
                  </div>
                    <p className="text-sm text-white/60">Explore the Book which is My favourite</p>
                </div>
                <div className="flex justify-center">
                  <Image className="object-contain w-40 mt-2 rounded-lg" src={pfp} alt="me"></Image>
                </div>
            </Card>
            <Card className="h-[500px] md:h-[360px] md:mb-0 mb-8 md:col-span-3 border-2 border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-8 text-emerald-300"/>
                    <h2 className="font-serif text-3xl">My ToolBox</h2>
                  </div>
                    <p className="text-sm text-white/60">Explore my tool and tech stack I use to create Web Apps</p>
                </div>
                <div>
                  <ToolBox languages={languages} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
                  <ToolBox languages={languages} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]"/>
                </div>
            </Card>
            <Card className="border-2 flex flex-col col-span-3 md:flex-none h-[360px] border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-8 text-emerald-300"/>
                    <h2 className="font-serif text-3xl">Education and Social Media</h2>
                  </div>
                    <p className="text-sm text-white/60">Explore my education institutions</p>
                </div>
                <div className="md:flex mt-3 relative">
                 <Image className="size-32 opacity-70 rounded-xl" src={map} alt="map"></Image>
                 <Image className="size-10 absolute top-9 left-9" src={newton} alt="map"></Image>
                  <div className="grid grid-cols-6 m-2">
                    <a className="inline-flex col-span-4 h-10 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg" href="https://www.newtonschool.co/newton-school-of-technology-nst/home"> 
                        <span>Newton School of Technology</span>
                    </a>
                    <a className="inline-flex col-span-2 gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg" href="https://github.com/GIT-Marquestra">
                      <TechIcon component={Github}/>
                      <span>github</span>
                    </a>
                    <a className="inline-flex col-span-2 gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg" href="https://www.linkedin.com/in/abhishek-verma-6803b1309/">
                      <TechIcon component={linkedin}/>
                      <span>LinkedIn</span>
                    </a>
                    <a className="inline-flex col-span-3 h-10 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg" href="https://rishihood.edu.in/">
                        <span>Rishihood University</span>
                    </a>
                    <div className="inline-flex h-10 col-span-3 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg"> 
                        <span>JEE main - 97%ile</span>
                    </div>
                    
                  </div>
                </div>
            </Card>
            <Card className="border-2 flex flex-col mt-8 md:mt-0 md:flex-none h-[360px] col-span-2 border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-8 text-emerald-300"/>
                    <h2 className="font-serif text-3xl">Interests</h2>
                  </div>
                    <p className="text-sm text-white/60">Explore my core interests!</p>
                </div>
                <div className="md:flex mt-3 relative">
                  <div className="grid grid-cols-10">
                  <div>
                    
                  {learnings.map((item) => ( 
                    <div key={item.name} className="inline-flex gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg"> 
                      <TechIcon component={item.iconType}/>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                  </div>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
