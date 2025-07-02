import { useState } from "react"
import { cn } from "@/lib/utils"
import { VscVscode  } from "react-icons/vsc"
import { SiBootstrap, SiCss3, SiJavascript, SiReact, SiTailwindcss , SiNextdotjs, SiDocker, SiFigma, SiGithub, SiLinux  } from "react-icons/si"
import { Progress } from "@/components/Progress"


const skills = [
    // frontend
    {name: "HTML/CSS", level: 95, category: "frontend", icon: <SiCss3 className="text-5xl" />},
    {name: "JavaScript", level: 80, category: "frontend", icon: <SiJavascript className="text-5xl" /> },
    {name: "React", level: 50, category: "frontend", icon: <SiReact className="text-5xl" />},
    {name: "Tailwind CSS", level: 60, category: "frontend", icon: <SiTailwindcss className="text-5xl" />},
    {name: "Bootstrap CSS", level: 60, category: "frontend", icon: <SiBootstrap className="text-5xl" />},
    {name: "Next.js", level: 0, category: "frontend", icon: <SiNextdotjs className="text-5xl" />},
    
    
    // Tools
    {name: "Figma", level: 90, category: "tools", icon: <SiFigma className="text-5xl" />},
    {name: "Docker", level: 80, category: "tools", icon: <SiDocker className="text-5xl" />},
    {name: "Vscode", level: 100, category: "tools", icon: <VscVscode className="text-5xl" />},
    {name: "Linux", level: 70, category: "tools", icon: <SiLinux className="text-5xl" />},
    {name: "Git/Github", level: 80, category: "tools", icon: <SiGithub className="text-5xl" />},

]

export const SkillsSection = () => {
    const [isSelected, setisSelected] = useState('frontend')

    // const changeCategory = () => {

    // }

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container m-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
            </div>
        
            <div className="mb-12 max-w-lg m-auto flex justify-between">
                <div className={cn("w-1/4 py-4 text-foreground cursor-pointer cur rounded-2xl",
                    `${isSelected === "frontend" ? "bg-primary/50" : "bg-foreground/2"}`)} 
                     onClick={() => {setisSelected("frontend")}} >
                    <h2>frontend</h2>
                </div>
                <div className={cn("w-1/4 py-4 text-foreground cursor-pointer cur rounded-2xl",
                    `${isSelected === "backend" ? "bg-primary/50" : "bg-foreground/2"}`)} 
                     onClick={() => {setisSelected("backend")}} >
                    <h2>Backend</h2>
                </div>
                <div className={cn("w-1/4 py-4 text-foreground cursor-pointer cur rounded-2xl",
                    `${isSelected === "tools" ? "bg-primary/50" : "bg-foreground/2"}`)} 
                     onClick={() => {setisSelected("tools")}} >
                    <h2>Tools</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl m-auto">
                {skills
                    .filter(skill => skill.category == isSelected)
                    .map((skill) =>  (
                    
                    <div key={skill.name} className="py-15 px-15 md:px-10 rounded-2xl bg-foreground/6 flex flex-col justify-center items-center gap-8">
                        {skill.icon}
                        {skill.name}
                        <div className="w-full space-y-2">
                            <Progress value={skill.level}/>
                            <span className="text-xs flex justify-end ">{skill.level + "%"}</span>
                        </div>
                    </div>
                ))}
            </div>  
        </section>
    )
}