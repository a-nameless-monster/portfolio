import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <img src="src\assets\shiniestbatchellors.png" className="absolute top-10 -left-36 w-1/2 h-full object-contain opacity-55 pointer-events-none transform scale-y-92 -scale-x-92"/>
            
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl mb-6 text-white bg-clip-text text-transparent leading-right">
                    Adrian Cal
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Technical Art / Scripting
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects"
                    className="border border-gray-300/50 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5
                    hover:shadow-[0_0_15_rgba(59, 130, 246, 0.2)] hover:bg-gray-400/10">
                        View projects
                    </a>

                    <a href="#contact"
                    className="border border-gray-300/50 text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5
                    hover:shadow-[0_0_15_rgba(59, 130, 246, 0.2)] hover:bg-gray-400/10">
                        Contact Me
                    </a>
                </div>
            </div>
            <img src="src\assets\shiniestbatchellors.png" className="absolute top-10 -right-36 w-1/2 h-full object-contain opacity-55 pointer-events-none transform scale-y-92 scale-x-92"/>
        </section>
    );
};