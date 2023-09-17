"use client";

import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: "400",
    subsets: ['latin']
});

export const Navbar = () => {
    return ( 
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                    {/* <Menu className="block md:hidden" /> */}
                    <MobileSidebar />
                    <Link href="/home">
                        <h1 className={cn("hidden md:block text-2xl md:text-3xl font-light text-primary", 
                        font.className)}>ChatVerse-AI</h1>
                    </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                </Button>
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
     );
}