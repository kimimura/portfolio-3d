"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { SocialDropdown } from "./social-dropdown";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="flex items-center justify-between w-full relative">
        <Link href="/" className="relative flex items-center justify-center">
          <Button variant={"link"} className="text-md font-semibold">
            Portfolio
          </Button>
        </Link>

        <div className="flex items-center gap-1">
          <FunnyThemeToggle className="w-10 h-10" />
          <SocialDropdown />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
