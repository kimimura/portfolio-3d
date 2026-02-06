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
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-bold text-purple-500">V</span>
    ),
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
    icon: <span className="font-bold text-purple-600">RF</span>,
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
  ongoing?: boolean;
};
const projects: Project[] = [
  {
    id: "quanta8-ats",
    category: "AI-Powered HRM System",
    title: "Applicant Tracking System",
    src: "/assets/projects-screenshots/quanta8-ats/3.png",
    screenshots: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
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
    ongoing: true,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My biggest challenge yet. An AI-powered Applicant Tracking System (ATS) 
            for one of our sister companies, Quanta8, built solo and currently in active 
            development. This full-stack HRM system automates recruitment workflows with 
            AI resume parsing, OCR document processing, and facial recognition.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/quanta8-ats/1.png`,
              `${BASE_PATH}/quanta8-ats/2.png`,
              `${BASE_PATH}/quanta8-ats/3.png`,
              `${BASE_PATH}/quanta8-ats/4.png`,
              `${BASE_PATH}/quanta8-ats/5.png`,
              `${BASE_PATH}/quanta8-ats/6.png`,
              `${BASE_PATH}/quanta8-ats/7.png`,
              `${BASE_PATH}/quanta8-ats/8.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">Project Roadmap</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Phase 0:</strong> Minimum Viable Product (MVP) ✅</li>
            <li><strong>Phase 1:</strong> Internal use for Quanta8 (Current) ⚠️</li>
            <li><strong>Phase 2:</strong> Public launch (similar to Jobstreet, Indeed) 🎯</li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <p className="font-mono mb-2">
            <strong>AI Resume Parsing:</strong> Integrated Anthropic's Claude API to automatically 
            extract and structure candidate information from their resume, including names, contact 
            details, experience, education, and skills.
          </p>
          
          <p className="font-mono mb-2 mt-4">
            <strong>OCR Document Processing:</strong> Implemented docTR for optical character 
            recognition, extracting text from scanned documents and images regardless of format.
          </p>
          
          <p className="font-mono mb-2 mt-4">
            <strong>Facial Recognition:</strong> Leveraged OpenCV and face_recognition libraries 
            to verify candidate identities during interviews, matching photos with uploaded IDs.
          </p>
          
          <p className="font-mono mb-2 mt-4">
            <strong>Full-Stack Architecture:</strong> Built with Next.js frontend, FastAPI backend, 
            PostgreSQL (Supabase) database, and Vercel/DigitalOcean deployment. Secure RESTful APIs, efficient data 
            pipelines, and scalable infrastructure.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Current Status</TypographyH3>
          <p className="font-mono mb-2">
            Currently in Phase 1, deployed for internal use for Quanta8. The system is actively 
            being refined based on user feedback. Working solo on this entire 
            HRM system has been my most ambitious project to date, pushing my skills across 
            frontend, backend, AI integration, and system architecture.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            This project represents the culmination of everything I've learned, from backend 
            development to AI/ML integration. It's currently still ongoing so stay tuned. 😊
          </p>
        </div>
      );
    },
  },
  {
    id: "nametag-detection",
    category: "Computer Vision | Object Detection",
    title: "Name Tag Detection (YOLOv8)",
    src: "/assets/projects-screenshots/nametag-detection/val_batch0_pred.jpg",
    screenshots: [],
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
          <TypographyP className="font-mono mb-4">
            A system that detects name tags using a fine-tuned YOLOv8 model. 
            This project demonstrates my approach to solving real-world object detection 
            problems through systematic dataset creation, annotation, model training, and 
            video inference.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Project Objective</TypographyH3>
          <p className="font-mono mb-2">
            Given a video sample, the goal was to build a system capable of accurately 
            detecting and localizing name tags across various frames, lighting conditions, 
            and angles. The challenge was to create a robust model with limited annotated data.
          </p>
          
          <TypographyH3 className="my-4 mt-8">My Approach</TypographyH3>
          
          <p className="font-mono mb-2 mt-4">
            <strong>1. Data Extraction & Analysis</strong>
          </p>
          <p className="font-mono mb-2 ml-4">
            Extracted 268 frames from the provided video sample. Analyzed the footage to 
            identify diverse scenarios (varying distances, angles, lighting) to ensure the 
            dataset would generalize well.
          </p>
          
          <p className="font-mono mb-2 mt-4">
            <strong>2. Dataset Annotation</strong>
          </p>
          <p className="font-mono mb-2 ml-4">
            Manually annotated 44 images in Roboflow, drawing bounding boxes around name tags. 
            Selected frames strategically to capture different perspectives and conditions. 
            Split the dataset into 70% training, 20% testing, and 10% validation to prevent 
            overfitting and ensure reliable evaluation.
          </p>
          
          <p className="font-mono mb-2 mt-4">
            <strong>3. Model Selection & Training</strong>
          </p>
          <p className="font-mono mb-2 ml-4">
            Chose YOLOv8 for its speed-accuracy trade-off, making it suitable for real-time 
            detection. Fine-tuned the model on the custom dataset, adjusting hyperparameters 
            to balance precision and recall. Monitored training metrics to avoid overfitting 
            despite the small dataset size.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Training Batches</TypographyH3>
          <p className="font-mono mb-4">
            Sample training batches showing annotated bounding boxes on name tags across various 
            scenarios and viewing angles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Image 
              src="/assets/projects-screenshots/nametag-detection/train_batch0.jpg" 
              alt="Training Batch 1" 
              width={2000} 
              height={2000} 
              quality={100}
              className="rounded-lg w-full"
            />
            <Image 
              src="/assets/projects-screenshots/nametag-detection/train_batch1.jpg" 
              alt="Training Batch 2" 
              width={2000} 
              height={2000} 
              quality={100}
              className="rounded-lg w-full"
            />
            <Image 
              src="/assets/projects-screenshots/nametag-detection/train_batch2.jpg" 
              alt="Training Batch 3" 
              width={2000} 
              height={2000} 
              quality={100}
              className="rounded-lg w-full"
            />
          </div>
          
          <p className="font-mono mb-2 mt-4">
            <strong>4. Evaluation & Optimization</strong>
          </p>
          <p className="font-mono mb-2 ml-4">
            Evaluated the trained model on the test set, achieving strong metrics that 
            demonstrate effective generalization from limited training data.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Performance Metrics</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>mAP@0.5:</strong> 90.7% - High accuracy in object detection</li>
            <li><strong>Precision:</strong> 86.4% - Minimal false positives</li>
            <li><strong>Recall:</strong> 87.5% - Excellent detection rate</li>
          </ul>
          
          <div className="my-6">
            <Image 
              src="/assets/projects-screenshots/nametag-detection/results.png" 
              alt="Training Results Graph" 
              width={3000} 
              height={2000} 
              quality={100}
              className="rounded-lg w-full"
            />
          </div>
          
          <p className="font-mono mb-2 mt-4">
            Training convergence metrics demonstrating stable learning across all evaluation 
            metrics. The graphs show consistent improvement in precision, recall, and mAP scores, 
            confirming the model's ability to generalize from limited training data.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Validation Results</TypographyH3>
          <p className="font-mono mb-4">
            Comparison between ground truth labels (left) and model predictions (right) on 
            validation set, demonstrating high accuracy in detecting name tags.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm font-mono mb-2 text-center">Ground Truth Labels</p>
              <Image 
                src="/assets/projects-screenshots/nametag-detection/val_batch0_labels.jpg" 
                alt="Validation Ground Truth" 
                width={2000} 
                height={2000} 
                quality={100}
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <p className="text-sm font-mono mb-2 text-center">Model Predictions</p>
              <Image 
                src="/assets/projects-screenshots/nametag-detection/val_batch0_pred.jpg" 
                alt="Validation Predictions" 
                width={2000} 
                height={2000} 
                quality={100}
                className="rounded-lg w-full"
              />
            </div>
          </div>
          
          <p className="font-mono mb-2 mt-4">
            <strong>5. Video Inference & Output</strong>
          </p>
          <p className="font-mono mb-2 ml-4">
            Re-processed the original video with the trained model, generating an annotated 
            output with bounding boxes and confidence scores. The system processes frames 
            efficiently, making it suitable for real-time applications.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, YOLOv8 (Ultralytics), Roboflow (annotation & dataset management), 
            OpenCV (video processing). The entire pipeline, from data preparation to 
            inference, was designed to be reproducible and scalable.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            This project showcases my ability to approach computer vision problems 
            methodically, work with limited datasets, and deliver high-performing models 
            for practical applications like retail analytics and visitor management systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "math-chatbot",
    category: "AI Education Tool | Fine-Tuning LLMs",
    title: "Cikgu Aiman - Mathematics Chatbot (FYP)",
    src: "/assets/projects-screenshots/math-chatbot/output1.png",
    screenshots: [
      "output1.png",
      "output2.png",
      "output3.png",
      "jupyter1.png",
      "jupyter2.png",
      "jupyter3.png",
      "jupyter4.png",
    ],
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
            Cikgu Aiman, an AI-powered educational chatbot developed as my Final Year Project 
            at UNIMAS. Designed to assist Malaysian secondary school students (Form 1-3) with 
            mathematics problems using open-source LLMs and prompt engineering. This project 
            represents my entry into AI/ML engineering, built entirely offline using free, 
            local models.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Chatbot Results</TypographyH3>
          <p className="font-mono mb-4">
            The chatbot successfully solved KSSM-aligned mathematics problems with step-by-step 
            explanations. Below is an example showing how it calculates compound interest, 
            demonstrating its ability to break down complex problems into understandable steps 
            for students.
          </p>
          <div className="mb-8">
            <Image 
              src="/assets/projects-screenshots/math-chatbot/output1.png" 
              alt="Compound Interest Problem Solution" 
              width={1200} 
              height={900} 
              quality={100}
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: "500px" }}
            />
          </div>
          
          <TypographyH3 className="my-4 mt-8">The Rocky Start</TypographyH3>
          <p className="font-mono mb-2">
            My FYP journey didn't start smoothly. I initially failed a project related to Augmented 
            Reality, which forced me to switch projects. I switched from Dr. Rehman's supervision 
            to Dr. Hardyman's supervision, who specializes in computational linguistics and artificial
            intelligence, topics I knew little to nothing about at the time.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Compressed Timeline</TypographyH3>
          <p className="font-mono mb-2">
            To make matters worse, I had to fit both FYP1 and FYP2 into the same semester. 
            At the beginning, I was doubtful. Could I really pull this off? But with Dr. 
            Hardyman's guidance and countless meetings, I started to see a path forward.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Learning from Zero</TypographyH3>
          <p className="font-mono mb-2">
            Embarrassingly, I didn't know how to use VS Code at the time. So I used 
            Jupyter Notebook for everything. Late nights watching YouTube tutorials, 
            experimenting with code, breaking things, fixing them, which became my routine. 
            Dr. Hardyman taught me about tokenization, context windows, and how language 
            models actually work under the hood. I wasn't efficient yet, so I manually logged 
            everything in Notepad and Word.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Technical Setup</TypographyH3>
          <p className="font-mono mb-2">
            I set up a local AI environment using Ubuntu 24.04 LTS through Windows Subsystem 
            for Linux (WSL), alongside Miniconda to manage Python environments. The Ollama 
            framework allowed me to run LLMs locally without needing internet or expensive 
            APIs. I installed Open WebUI to create a modern chat interface similar to ChatGPT, 
            but fully offline.
          </p>
          
          <p className="font-mono mb-2 ml-4 mt-4">
            <strong>Key tools:</strong>
          </p>
          <ul className="list-disc ml-10 font-mono mb-4">
            <li>Ollama: Local LLM runtime</li>
            <li>Open WebUI: Chat interface</li>
            <li>Docker: Container management</li>
            <li>Unsloth: Lightweight fine-tuning library for LLaMA models</li>
            <li>Jupyter Notebook: Training scripts and experiment logs</li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">The Hardware Reality Check</TypographyH3>
          <p className="font-mono mb-2">
            I experimented with multiple models: TinyLlama, Mistral 7B, and Llama 3.1-8B. 
            That's when I hit a wall: Hardware constraints. My laptop only had 4GB of VRAM, 
            which is nowhere near enough for fine-tuning large language models. I quickly 
            learned how expensive AI really is, not just in time but in computational resources.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Fine-Tuning with Limited Resources</TypographyH3>
          <p className="font-mono mb-2">
            I attempted fine-tuning models using Unsloth and 4-bit quantization to work around 
            hardware limitations. This involved experimenting with hyperparameters, dealing with 
            underfitting and overfitting issues, and understanding the delicate balance between 
            model size and performance. The model would either not learn enough or memorize the 
            training data. Each attempt taught me more about tokenization, parameter optimization, 
            and model architecture.
          </p>
          
          <p className="font-mono mb-2">
            I also explored prompt engineering techniques with Llama 3.1-8B, crafting structured 
            prompts to guide the model's responses. Combined with the fine-tuning experiments, 
            the chatbot could solve compound interest, algebra, and other KSSM-aligned problems 
            with step-by-step explanations.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Training Process</TypographyH3>
          <p className="font-mono mb-4">
            Jupyter Notebook logs showing the model training process, configurations, and 
            experimentation with different approaches.
          </p>
          <div className="space-y-4 mb-8">
            <Image 
              src="/assets/projects-screenshots/math-chatbot/jupyter1.png" 
              alt="Training Setup and Configuration" 
              width={2000} 
              height={1500} 
              quality={100}
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: "800px" }}
            />
            <Image 
              src="/assets/projects-screenshots/math-chatbot/jupyter2.png" 
              alt="Model Fine-Tuning Process" 
              width={2000} 
              height={1500} 
              quality={100}
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: "800px" }}
            />
            <Image 
              src="/assets/projects-screenshots/math-chatbot/jupyter3.png" 
              alt="Training Experiments and Logs" 
              width={2000} 
              height={1500} 
              quality={100}
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: "800px" }}
            />
            <Image 
              src="/assets/projects-screenshots/math-chatbot/jupyter4.png" 
              alt="Model Evaluation Results" 
              width={2000} 
              height={1500} 
              quality={100}
              className="rounded-lg w-full object-contain"
              style={{ maxHeight: "800px" }}
            />
          </div>
          
          <TypographyH3 className="my-4 mt-8">Curriculum Coverage</TypographyH3>
          <p className="font-mono mb-2">
            The chatbot was trained on Malaysia's official KSSM mathematics syllabus for 
            Form 1-3, covering topics from basic arithmetic to algebraic equations. The goal 
            wasn't perfection, but to build something functional and presentable. And I did.
          </p>
          
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Form 1 Mathematics: Number Systems, Basic Operations...</li>
            <li>Form 2 Mathematics: Algebra, Geometry, Probability...</li>
            <li>Form 3 Mathematics: Advanced Algebra, Statistics, Trigonometry...</li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">Development Environment</TypographyH3>
          <p className="font-mono mb-2">
            Built on Ubuntu 24.04 LTS (via WSL) using Jupyter Notebook. Configured CUDA 
            drivers, PyTorch, and transformer libraries through trial and error. Created a 
            Conda environment named "Cikgu Aiman" running Python 3.10. The entire system ran 
            offline using free, open-source models, which has no API costs and no internet required.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            Looking back, this FYP was a turning point. It wasn't perfect, but I pulled it off. 
            I learned the basics and fundamentals of fine-tuning AI models, understood how 
            expensive and resource-intensive AI can be, adapted when things didn't work, and 
            most importantly, discovered an ignition point for AI/ML engineering. This project laid 
            the foundation for everything I've done in AI since.
          </p>
        </div>
      );
    },
  },
  {
    id: "attendance-system",
    category: "Location-Based System",
    title: "Geolocation Attendance System",
    src: "/assets/projects-screenshots/attendance-system/login-page.png",
    screenshots: ["login-page.png", "main-page.png", "attendance-record.png"],
    skills: {
      frontend: [],
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
          
          <SlideShow
            images={[
              `${BASE_PATH}/attendance-system/login-page.png`,
              `${BASE_PATH}/attendance-system/main-page.png`,
              `${BASE_PATH}/attendance-system/attendance-record.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">How It Started</TypographyH3>
          <p className="font-mono mb-2">
            One day, my boss came to me and said, "Hey, I want you to create an attendance 
            system, work with Aiman." Just like that. No detailed spec, just a clear goal. This 
            was different from the usual tasks I had when I was still with Borneoinspire, 
            before getting transferred to Zenara. It felt like a test, could I actually build 
            something real?
          </p>
          
          <TypographyH3 className="my-4 mt-8">Backend Capabilities Put to Test</TypographyH3>
          <p className="font-mono mb-2">
            This project tested my backend skills in ways I hadn't experienced before. I was 
            responsible for the entire backend infrastructure, location verification, attendance 
            logging, and API design, while Aiman handled the frontend development. At the time, 
            I was still new to Python, so this became my first hands-on experience with Flask 
            and building RESTful APIs.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Geolocation: The Core Feature</TypographyH3>
          <p className="font-mono mb-2">
            The main challenge was implementing geolocation-based check-ins. Using geopy, I set 
            up a system that verifies user location based on IP address and enforces a 100-meter 
            radius around the office. If you're outside that range, the "Check In" button simply 
            won't activate. No remote clock-ins allowed.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Real-Time Verification</TypographyH3>
          <p className="font-mono mb-2">
            The system captures timestamp, location coordinates, and user details for each 
            check-in. It's simple, functional, and does exactly what it needs to do: tracking 
            attendance with location verification in real time.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Deployment & Results</TypographyH3>
          <p className="font-mono mb-2">
            Deployed on Render, the system went live and has been running smoothly. 
            Sure, there are a few bugs here and there, but overall, it works perfectly fine. 
            This was my first time deploying a Python backend to production, and it taught me 
            a lot about environment variables, server management, and API endpoint design.
          </p>
          
          <p className="font-mono mb-2 mt-8">
            Looking back, this project was a booster shot. It solidified my confidence in 
            backend development and proved that I could build real solutions for actual 
            business needs.
          </p>
        </div>
      );
    },
  },
  {
    id: "dynasty-restaurant",
    category: "Landing Page | Responsive Web Design",
    title: "Dynasty Chinese Restaurant",
    src: "/assets/projects-screenshots/dynasty-restaurant/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    live: "https://www.dynastychineserestaurant.com.my/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern, responsive landing page for Miri's Dynasty Chinese Restaurant. This project pushed me 
            outside of my comfort zone as a backend developer, challenging me to create an elegant, 
            mobile-friendly design that showcases the restaurant's culinary offerings.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/dynasty-restaurant/1.png`,
              `${BASE_PATH}/dynasty-restaurant/2.png`,
              `${BASE_PATH}/dynasty-restaurant/3.png`,
              `${BASE_PATH}/dynasty-restaurant/4.png`,
              `${BASE_PATH}/dynasty-restaurant/5.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">The Beginning</TypographyH3>
          <p className="font-mono mb-2">
            This was my first time designing something hands-on. I was incredibly grateful when 
            my boss trusted me with this project, especially since I wasn't that proficient with 
            coding in general at the time. Dynasty Chinese Restaurant had never had a website or 
            landing page before, so the pressure was real.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Finding My Way</TypographyH3>
          <p className="font-mono mb-2">
            At first, I tried various tools like Replit, Lovable, and Emergent, hoping one would 
            magically solve my design inexperience. But nothing felt right. Eventually, I took a 
            different approach, spending hours browsing Chinese and Mexican restaurant websites from 
            around the world, gathering inspiration and studying what worked. That's when everything 
            started to click.
          </p>
          
          <TypographyH3 className="my-4 mt-8">The Hardest Part: Responsiveness</TypographyH3>
          <p className="font-mono mb-2">
            Without a doubt, making the site fully responsive was the toughest challenge. Learning 
            about responsive design principles, mobile-first approach, and CSS breakpoints while 
            actively building was like learning to swim by jumping into the deep end. But the 
            struggle was worth it, the site now looks okay-ish on devices of all sizes.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with React, TypeScript, and Vite. The tech stack is mostly TypeScript with some 
            HTML and CSS sprinkled in. It's fast, maintainable, and gets the job done.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Responsive navigation menu</li>
            <li>Image gallery showcasing signature dishes from Dynasty</li>
            <li>Mobile-optimized menu display</li>
            <li>Contact information and location map</li>
            <li>WhatsApp integration</li>
          </ul>
          
          <p className="font-mono mb-2 mt-8">
            This project taught me that sometimes you just have to dive in and figure things out 
            as you go. While backend development remains my strength, I now have a much better 
            appreciation for the design and frontend side of things.
          </p>
        </div>
      );
    },
  },
];
export default projects;
