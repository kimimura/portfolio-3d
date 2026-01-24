"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaPython,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiFastapi,
  SiPytorch,
  SiJupyter,
  SiDigitalocean,
  SiSupabase,
  SiMysql,
  SiFlask,
  SiOpencv,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";
import { File, Sparkles } from "lucide-react";
import Link from "next/link";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "brian04teo@gmail.com",
    href: "mailto:brian04teo@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Python programming language",
    icon: <FaPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "React.js",
    content: "React is a JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "Next.js is a React framework for production",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    content: "Tailwind CSS is a utility-first CSS framework",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "FastAPI",
    content: "FastAPI is a modern, fast web framework for building APIs with Python",
    icon: <SiFastapi size={"50px"} color="#009688" />,
    color: "#009688",
  },
  {
    name: "Flask",
    content: "Flask is a lightweight WSGI web application framework",
    icon: <SiFlask size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "PostgreSQL is a powerful, open source object-relational database",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MySQL",
    content: "MySQL is an open-source relational database management system",
    icon: <SiMysql size={"50px"} color="#4479a1" />,
    color: "#4479a1",
  },
  {
    name: "Supabase",
    content: "Supabase is an open source Firebase alternative",
    icon: <SiSupabase size={"50px"} color="#3ecf8e" />,
    color: "#3ecf8e",
  },
  {
    name: "PyTorch",
    content: "PyTorch is an open source machine learning framework",
    icon: <SiPytorch size={"50px"} color="#ee4c2c" />,
    color: "#ee4c2c",
  },
  {
    name: "OpenCV",
    content: "OpenCV is an open source computer vision library",
    icon: <SiOpencv size={"50px"} color="#5c3ee8" />,
    color: "#5c3ee8",
  },
  {
    name: "Docker",
    content: "Docker is a platform for developing, shipping, and running applications",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Jupyter",
    content: "Jupyter Notebook is an open-source web application",
    icon: <SiJupyter size={"50px"} color="#f37726" />,
    color: "#f37726",
  },
  {
    name: "Git",
    content: "Git is a distributed version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "GitHub is a platform for version control and collaboration",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "DigitalOcean",
    content: "DigitalOcean is a cloud infrastructure provider",
    icon: <SiDigitalocean size={"50px"} color="#0080ff" />,
    color: "#0080ff",
  },
  {
    name: "Vercel",
    content: "Vercel is a platform for frontend frameworks and static sites",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Firebase",
    content: "Firebase is Google's mobile platform",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Linux",
    content: "Linux is an open-source operating system",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Terminal is a command-line interface",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

const AboutSection = () => {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isFlipped) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isFlipped]);

  return (
    <SectionWrapper id="about" className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <aside className="w-full lg:basis-1/4 lg:max-w-[400px]">
            <div
              className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
              style={{
                backdropFilter: "blur(2px)",
              }}
            >
              <div className="flex flex-row lg:flex-col items-center">
                <div 
                  className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5 cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >
                  <div 
                    className="relative w-[100px] md:w-[150px] lg:w-[200px] aspect-square perspective-1000"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div 
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      <div 
                        className="absolute w-full h-full backface-hidden rounded-full overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        }}
                      >
                        <img
                          className="w-full h-full object-cover"
                          alt="Teo Kah Hien"
                          src="/assets/me2.jpg"
                        />
                      </div>
                      <div 
                        className="absolute w-full h-full backface-hidden rounded-full overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src="/assets/me4.mp4" type="video/mp4" />
                          {/* Fallback image if video doesn't load */}
                          <img
                            className="w-full h-full object-cover"
                            alt="Teo Kah Hien"
                            src="/assets/me2.jpg"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                  <p className="text-center text-xl">Teo Kah Hien</p>
                  <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                    Backend Developer
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <hr className="my-10 border-zinc-600" />
                <ul className="flex flex-col gap-3">
                  {CONTACT_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                        href={link.href}
                      >
                        <div className="w-8">{link.icon}</div>
                        <div className="flex flex-col">
                          <div className="text-sm">{link.name}</div>
                          <div className="text-xs text-zinc-500">
                            {link.content}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row gap-3 mt-6">
                  <Link
                    href="https://drive.google.com/file/d/1jLyfIpkbyIMKdQph1CraJAQB7FcTrvE-/view?usp=drive_link"
                    target="_blank"
                    className="flex-1"
                  >
                    <Button className="w-full border-zinc-700 bg-transparent hover:bg-zinc-800/30 border-[.5px]" variant="outline">
                      Resume
                    </Button>
                  </Link>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild className="flex-1">
                      <Link href="#contact">
                        <Button variant="outline" className="w-full border-zinc-700 bg-transparent hover:bg-zinc-800/30 border-[.5px]">
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </aside>
          <main className="w-full lg:basis-3/4 lg:max-w-[800px]">
            <div
              className="p-10 border-[.5px] rounded-md border-zinc-600 relative"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <div className="absolute top-4 right-4 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <Sparkles size={20} className="text-zinc-400" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>theres something waiting for you in devtools</p>
                </TooltipContent>
              </Tooltip>
              <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
              <p className="mb-10 text-roboto">
                Ni Hao! I&apos;m Teo, but you can call me Brian, a backend developer 
                currently working as a junior AI/ML engineer at Zenara Jaya. I'm the 
                type who learns by copying from the answer sheet and understand it 
                from there. Yes, it works, don't judge me. Please don't stare at me 
                while I'm working, I promise I'll deliver. XOXO
              </p>
              <p className="mb-10">
                When I&apos;m not coding, you can find me heel hooking other white belts 
                at my local gym (I&apos;m a 2 stripe white belt). Pleasure to meet you!
              </p>
              <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
              <div className="mb-5">
                {!toolsLoaded ? (
                  <p className="h-[100px]"></p>
                ) : (
                  <Splide
                    options={{
                      type: "loop",
                      interval: 2000,
                      autoplay: true,
                      pagination: false,
                      speed: 2000,
                      perPage: 5,
                      perMove: 1,
                      rewind: true,
                      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                      arrows: false,
                    }}
                    aria-label="My Favorite Images"
                  >
                    {TOOLS.reverse().map((tool) => (
                      <SplideSlide key={tool.name}>
                        <div
                          key={tool.name}
                          className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                        >
                          {tool.icon}
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
