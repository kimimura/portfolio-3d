"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { config } from "@/data/config";
import { AtSign } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export function SocialDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-4 h-11 w-12 shadow-lg transition-all duration-300 z-50 bg-background/20 hover:bg-background/80 backdrop-blur-sm border-2 border-white/30 rounded-lg"
        >
          <AtSign className="h-5 w-5" />
          <span className="sr-only">Social Media Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Connect with me</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={config.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer"
          >
            <SiInstagram className="h-4 w-4" />
            <span>Instagram</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer"
          >
            <SiGithub className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer"
          >
            <SiLinkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

