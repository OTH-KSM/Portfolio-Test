
import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-2"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Othmane </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Kassimi </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2xl opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional.
                    </p>

                    <div className="p-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 flex flex-col justify-center items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-4 w-4 text-blue-600"/>
            </div>
        </section>
    )
}