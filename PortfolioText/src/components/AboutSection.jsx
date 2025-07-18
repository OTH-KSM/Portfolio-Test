
import { User, Briefcase, Code } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="relative py-40 px-4 min-h-screen">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span  className="text-primary">Me</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-5">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Software Engineer</h3>

                    <p className="text-muted-foreground ">
                        With over 1 year of experience in web development, I specialized in creating
                        responsive, accessible and performant web applications using modern thechnologies.
                    </p>

                    <p className="text-muted-foreground ">
                        I'm Passionate about creating elegant solutions to complex problems, and I'm constantly 
                        learning new thechnologies and techniques to stay at the forefront of the ever-evolving
                        web landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#cantact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="#cantact" className="px-6 py-2 rounded-full border border-primary-button text-primary hover:bg-primary/10 transition-colors duration-3">
                            Download CV
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                    <div className="gradient-border h-27 flex items-center p-4 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="font-muted-foreground">
                                    Creating responsive websites and web applications with 
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border h-27 flex items-center p-4 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="font-muted-foreground">
                                    Designing intuitive user interfaces and seamless user 
                                    experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border h-27 flex items-center p-4 card-hover">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management </h4>
                                <p className="font-muted-foreground">
                                    Leading projects from conception to completion with agile 
                                    methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}