import { BackgroundEffect } from "@/components/BackgroundEffect";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* {Theme Toggle} */}
        <ThemeToggle />
        {/* { Background Effects} */}
        <BackgroundEffect />
        {/* { Navbar } */}
        <Navbar />
        {/* { Main Content } */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>
        {/* { Footer } */}
    </div>;