import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const modelingSkills = [
        "Maya",
        "Blender",
        "Zbrush",
        "Adobe Substance 3D",
        "3ds Max",
    ];

    const scriptingSkills = [
        "Python",
        "MEL",
        "MaxScript",
        "SQL",
        ".NET",
        "Javascript",
        "PHP"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-gray-300 text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border transition-all">
                    <p className="text-gray-300 mb-6 text-center">
                        I'm Adrian. I'm an aspiring technical artist. I'm interested in character rigging and tool creation for animation in games and moves.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {modelingSkills.map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {scriptingSkills.map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> */}
                <div className="glass rounded-xl p-8 border-white/10 border transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="text-gray-300 space-y-2">
                        <li>
                            <h4 className="text-base"><strong>University Of Wisconsin-Whitewater</strong> (2024-2026)</h4>
                            <p className="text-sm"><em>Bachelor of Science, Major in Media Arts and Game Design — Media Art Emphasis, Minor in Web Site Development and Administration</em> (2024-2026)</p>
                        </li>
                        <li>
                            <h4 className="text-base"><strong>Rock Valley College</strong> (2023-2024)</h4>
                            <p className="text-sm"><em>Associate in Science</em></p>
                        </li>
                    </ul>
                    {/* </div> */}

                    {/* 
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work</h3>
                    <ul>
                        <li>
                            <h4 className="text-base">...</h4>
                        </li>
                    </ul>
                </div> */}
                </div>

            </div>
        </RevealOnScroll>
    </section>
}