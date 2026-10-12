import ExpandableCards from "../../expandable-cards";
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {

    return (

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center">
                        Projects
                    </h2>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ExpandableCards cards={[{
                            id:
                                1, title: "Graduate Bust",
                            image: "src/assets/shiniestbatchellors.png",
                            content: "This is a bust of a college graduate I made using Zbrush and Maya. I call him Batch Ellors. I draw him frequently in my notebook. He's at the top of the screen",
                            videoUrl: "https://www.youtube.com/watch?v=R_FQU4KzN7A",
                            skills: ["Zbrush", "Maya"]
                        }]} />

                        <ExpandableCards cards={[{
                            id: 2, title: "Female Character (2026)",
                            image: "src/assets/femalecharacter.png",
                            content: "This is a female character I sculpted, textured, and rendered. I call her North.",
                            videoUrl: "https://www.youtube.com/watch?v=R_FQU4KzN7A",
                            skills: ["Zbrush", "Maya", "Substance Painter"]
                        }]} />
                        <ExpandableCards cards={[{
                            id: 3,
                            title: "Anna",
                            image: "src/assets/catinalaundrybasket.jpg",
                            content: "This is not a project; this is my cat, Anna, in a laundry basket for some reason or another. I will not be showing her to my potential employers.",
                            videoUrl: "https://www.youtube.com/watch?v=R_FQU4KzN7A",
                            skills: ["N/A"]
                        }]} />
                        <ExpandableCards cards={[{
                            id: 4,
                            title: "Ben Stiller",
                            image: "src/assets/benstiller.png",
                            content: "This is a drawing I did of Ben Stiller. He's not my favorite actor. I will be showing this to potential employers.",
                            videoUrl: "https://www.youtube.com/watch?v=R_FQU4KzN7A",
                            skills: ["C#", "SqLite"]
                        }]} />
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );

}

{/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="mb-2 text-xl font-bold"> Placeholder Project </h3>
                        <p className="mb-4 text-gray-400" >Details about placeholder project. Lots and lots of details plenty of them a ton</p>
                        <div>
                            {["thing1", "thing2", "thing3"].map((skill, key) => (

                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div>
                            <a>Expand</a>
                        </div>

                    </div> */}