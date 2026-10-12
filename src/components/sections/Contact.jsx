import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => alert("Something went wrong. Please try again."));
    };

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact Me</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <h2>Name</h2>
                        <input type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus border-gray-500 focus:bg-gray-500/5"
                            placeholder="E.g. Don Hedron"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="relative space-y-2">
                        <h2>Email</h2>
                        <input type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus border-gray-500 focus:bg-gray-500/5"
                            placeholder="E.g. umbrella@corporation.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="relative space-y-2">
                        <h2>Message</h2>
                        <textarea id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus border-gray-500 focus:bg-gray-500/5"
                            placeholder="Hear the crickets chirping
In the dewy grass.
Bright little fireflies
Twinkle as they pass."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="w-full bg-gray-800 text-wwhite py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(rgba(59,130,246,0.4)]]">
                        Send Message
                    </button>
                </form>

            </div>
        </RevealOnScroll>

    </section>
}