import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAnthropic,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiRender,
  SiRoboflow,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  anthropic: {
    title: "Anthropic Claude",
    bg: "black",
    fg: "white",
    icon: <SiAnthropic />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  yolov8: {
    title: "YOLOv8",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">YOLO</span>,
  },
  roboflow: {
    title: "Roboflow",
    bg: "black",
    fg: "white",
    icon: <SiRoboflow />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  llama: {
    title: "Llama 3.1",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">🦙</span>,
  },
  render: {
    title: "Render",
    bg: "black",
    fg: "white",
    icon: <SiRender />,
  },
  doctr: {
    title: "docTR",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-sm">OCR</span>,
  },
  geopy: {
    title: "Geopy",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">📍</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "quanta8-ats",
    category: "AI-Powered HR System",
    title: "Applicant Tracking System (Quanta8)",
    src: "/assets/projects-screenshots/quanta8-ats/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.doctr,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://quanta8-applicant-tracking-system.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An intelligent Applicant Tracking System designed for Quanta8's sister company, 
            automating the entire recruitment workflow with AI-powered resume parsing, 
            OCR document processing, and facial recognition capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">AI Resume Parsing</TypographyH3>
          <p className="font-mono mb-2">
            Integrated Anthropic's Claude API to automatically extract and structure 
            candidate information from resumes. The system intelligently parses names, 
            contact details, work experience, education, and skills with high accuracy.
          </p>
          
          <TypographyH3 className="my-4 mt-8">OCR Document Processing</TypographyH3>
          <p className="font-mono mb-2">
            Implemented docTR (Document Text Recognition) for optical character recognition, 
            enabling the system to extract text from scanned documents and images. This 
            ensures no candidate information is lost, regardless of document format.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Facial Recognition</TypographyH3>
          <p className="font-mono mb-2">
            Leveraged OpenCV and face_recognition libraries to verify candidate identities 
            during the interview process. The system can match candidate photos with 
            uploaded identification documents, enhancing security and authenticity.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Backend Infrastructure</TypographyH3>
          <p className="font-mono mb-2">
            Built a robust backend with FastAPI and PostgreSQL, implementing secure RESTful 
            API endpoints and efficient data pipelines. The system handles concurrent 
            requests and processes large volumes of application data seamlessly.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            This internal system significantly reduced manual screening time and improved 
            the overall quality of candidate evaluation, making the recruitment process 
            more efficient and data-driven.
          </p>
        </div>
      );
    },
  },
  {
    id: "nametag-detection",
    category: "Computer Vision | Object Detection",
    title: "Name Tag Detection System (YOLOv8)",
    src: "/assets/projects-screenshots/nametag-detection/demo.png",
    screenshots: ["demo.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.yolov8,
        PROJECT_SKILLS.roboflow,
        PROJECT_SKILLS.opencv,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A computer vision system developed for FootfallCam that detects name tags in 
            video footage using a fine-tuned YOLOv8 model. The project involved custom 
            dataset creation, annotation, model training, and real-time video inference.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Dataset Preparation</TypographyH3>
          <p className="font-mono mb-2">
            Extracted 268 frames from the provided video sample and manually annotated 
            44 images in Roboflow. The dataset was split into 70% training, 20% testing, 
            and 10% validation sets to ensure robust model performance.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Model Fine-Tuning</TypographyH3>
          <p className="font-mono mb-2">
            Fine-tuned YOLOv8 on the custom dataset, optimizing for name tag detection in 
            various lighting conditions and angles. The training process involved careful 
            hyperparameter tuning to balance precision and recall.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Performance Metrics</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>mAP@0.5:</strong> 90.7% - High accuracy in object detection</li>
            <li><strong>Precision:</strong> 86.4% - Minimal false positives</li>
            <li><strong>Recall:</strong> 87.5% - Excellent detection rate</li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">Video Inference</TypographyH3>
          <p className="font-mono mb-2">
            Re-processed the original video with the trained model, generating an annotated 
            output with bounding boxes around detected name tags. The system runs in 
            real-time, making it suitable for live video streams.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            This project demonstrates practical application of deep learning in retail 
            analytics and visitor management systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "math-chatbot",
    category: "AI Education Tool",
    title: "Mathematics Chatbot (FYP)",
    src: "/assets/projects-screenshots/math-chatbot/chat.png",
    screenshots: ["chat.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.llama,
        PROJECT_SKILLS.jupyter,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered educational chatbot designed as my Final Year Project to assist 
            Malaysian secondary school students (Form 1-3) with mathematics problems. 
            The system uses fine-tuned open-source LLMs to provide conversational 
            problem-solving guidance based on the KSSM syllabus.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Model Selection & Training</TypographyH3>
          <p className="font-mono mb-2">
            Experimented with multiple LLMs including Llama 3.1-8B, TinyLlama, and Mistral 7B. 
            Used the unsloth library and FastLanguageModel for efficient 4-bit quantization 
            training on limited hardware. The training process involved careful 
            dataset curation and hyperparameter tuning to balance model size and performance.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Technical Challenges</TypographyH3>
          <p className="font-mono mb-2">
            Faced significant hardware constraints while fine-tuning large language models. 
            Dealt with both underfitting (insufficient training) and overfitting (memorization) 
            issues. This hands-on experience deepened my understanding of tokenization, 
            context windows (max_seq_length: 2048), parameter optimization, and model 
            quantization techniques.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Development Environment</TypographyH3>
          <p className="font-mono mb-2">
            Built and trained the model on Ubuntu using Jupyter Notebook. The development 
            involved extensive configuration of CUDA drivers, PyTorch, and transformer 
            libraries to optimize GPU utilization for training.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Curriculum Coverage</TypographyH3>
          <p className="font-mono mb-2">
            Trained on Malaysia's official KSSM mathematics syllabus for Form 1-3, covering 
            topics from basic arithmetic to algebraic equations. The chatbot provides 
            step-by-step explanations tailored to the Malaysian education system.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            While not perfect, this project was presentable and demonstrated the practical 
            application of LLMs in education. It laid the foundation for my interest in 
            AI/ML engineering and working with large language models.
          </p>
        </div>
      );
    },
  },
  {
    id: "attendance-system",
    category: "Location-Based System",
    title: "Geolocation Attendance System (BITC)",
    src: "/assets/projects-screenshots/attendance-system/login.png",
    screenshots: ["login.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.geopy,
        PROJECT_SKILLS.render,
      ],
    },
    live: "https://www.attendance.borneoinspire.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A location-based attendance tracking system built for Borneoinspire Training 
            & Consultancy. My first hands-on Python project, focusing on backend development 
            with Flask while collaborating with a frontend developer to create a complete 
            attendance management solution.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Geolocation Verification</TypographyH3>
          <p className="font-mono mb-2">
            Implemented geopy for precise location tracking and verification. The system 
            uses IP-based geolocation to determine user position and enforces a 100-meter 
            radius restriction around the office. Employees can only check in when physically 
            present at the workplace, preventing remote clock-ins.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Real-Time Check-In</TypographyH3>
          <p className="font-mono mb-2">
            The check-in button becomes active only when the user is within the designated 
            geofence. The system captures timestamp, location coordinates, and user details 
            for each attendance record, ensuring accurate tracking and accountability.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Backend Development</TypographyH3>
          <p className="font-mono mb-2">
            My primary responsibility was building the Flask backend, which handles 
            authentication, location verification, attendance logging, and report generation. 
            This was my introduction to Python web frameworks and RESTful API design.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Team Collaboration</TypographyH3>
          <p className="font-mono mb-2">
            Worked alongside my colleague Aiman, who developed the frontend using React. 
            This collaboration taught me the importance of API documentation, version 
            control, and effective communication in a team environment.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Deployment</TypographyH3>
          <p className="font-mono mb-2">
            Deployed on Render, ensuring reliable uptime and scalability. This was my 
            first experience with cloud deployment, environment variables, and production 
            server management.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            This project marked the beginning of my backend development journey and 
            solidified my passion for building practical, real-world solutions.
          </p>
        </div>
      );
    },
  },
  {
    id: "dynasty-restaurant",
    category: "Responsive Web Design",
    title: "Dynasty Chinese Restaurant Landing Page",
    src: "/assets/projects-screenshots/dynasty-restaurant/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://www.dynastychineserestaurant.com.my/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern, responsive landing page for Dynasty Chinese Restaurant, built during 
            my internship at Zenara Jaya. This project pushed me outside my comfort zone 
            as a backend developer, challenging me to create an elegant, mobile-friendly 
            design that showcases the restaurant's ambiance and menu.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Design Challenge</TypographyH3>
          <p className="font-mono mb-2">
            As someone who specializes in backend development, designing an aesthetically 
            pleasing website was initially intimidating. However, I embraced the challenge 
            with a "you'll never know if you never try" attitude. The result is a clean, 
            modern interface that effectively represents the restaurant's brand.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Responsive Design</TypographyH3>
          <p className="font-mono mb-2">
            The toughest challenge was making the site fully responsive. I learned about 
            responsive design principles, mobile-first approach, and CSS breakpoints while 
            working on this project. The site now looks great on devices of all sizes, 
            from smartphones to desktop monitors.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js and Tailwind CSS for optimal performance and maintainability. 
            The static site generation ensures fast load times, which is crucial for 
            user experience and SEO.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Responsive navigation menu</li>
            <li>Image gallery showcasing restaurant ambiance</li>
            <li>Mobile-optimized menu display</li>
            <li>Contact information and location map</li>
            <li>Social media integration</li>
          </ul>
          
          <p className="font-mono mb-2 mt-8">
            This project taught me that stepping outside your specialty area can lead to 
            valuable growth. While backend remains my strength, I now have a better 
            appreciation for frontend development and can build complete full-stack solutions 
            when needed.
          </p>
        </div>
      );
    },
  },
];
export default projects;
