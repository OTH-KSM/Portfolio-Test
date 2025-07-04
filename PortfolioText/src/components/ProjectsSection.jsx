


export const ProjectsSection = () => {
    // border-2 border-amber-300
    return (
        <section id="projects" className="p-4 md:p-24">
            <div className="container mx-auto max-w-xl md:max-w-5xl flex flex-col items-center mb-16">
                <h1 className="text-3xl font-bold md:text-4xl mb-12">
                    Featured <span className="text-primary">Projects</span>
                </h1>

                <p className="max-w-full md:max-w-2xl">
                    Here are some of my recent projects, Each project was carefully
                    crafted with attention to details, performance and user experience.
                </p>
            </div>

            <div className="container max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col rounded-t-2xl z-100">
                    <div>
                        <img 
                            src="/images/galaxyProj.PNG"
                            className="rounded-t-2xl w-full h-48 object-cover"/>
                    </div>
                    <div className="rounded-b-2xl p-4 w-full bg-foreground/6">
                        <div className="flex justify-around items-center mb-4">
                            <h2>Html</h2>
                            <h2>Css</h2>
                            <h2>Vanilla js</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2>Galaxy Pong</h2>
                            <p className="text-sm text-foreground/60 mt-2">A unique and creative ping pong game with multiple users in a 
                                battle for survival </p>
                        </div> 
                    </div>

                </div>
                <div className="flex flex-col rounded-t-2xl z-10">
                    <div>
                        <img 
                            src="/images/portfolioProj.PNG"
                            className="rounded-t-2xl w-full h-48 object-cover"/>
                    </div>
                    <div className="rounded-b-2xl p-4 w-full bg-foreground/6 ">
                        <div className="flex justify-around items-center mb-4">
                            <h2>React</h2>
                            <h2>Tailwind Css</h2>
                            <h2>Django</h2>
                        </div>

                        <div className="flex flex-col items-center">
                                <h2>Galaxy Pong</h2>
                                <p className="text-sm text-foreground/60 mt-2">A unique and creative ping pong game with multiple users in a 
                                    battle for survival </p>
                        </div> 
                    </div>

                </div>
                <div className="flex flex-col rounded-t-2xl z-10">
                    <div>
                        <img 
                            src="/images/ReactProj.PNG"
                            className="rounded-t-2xl w-full h-48 object-cover"/>
                    </div>
                    <div className="rounded-b-2xl p-4 w-full bg-foreground/6 ">
                        <div className="flex justify-around items-center mb-4">
                            <h2>Vite</h2>
                            <h2>React</h2>
                            <h2>Tailwind Css</h2>                            
                        </div>

                        <div className="flex flex-col items-center">
                                <h2>Bibo Portfolio</h2>
                                <p className="text-sm text-foreground/60 mt-2">A fully animated responsive portfolio
                                with vite react and Tailwind</p>
                        </div> 
                    </div>   
                </div>
            </div>

        </section>
    )
}