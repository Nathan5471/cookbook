export default function Navbar() {
    const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 z-10 w-full h-16 bg-black/40 flex items-center">
            <h1 className="text-4xl font-bold text-gray-700 ml-4" onClick={scrollToTop}>Cookbook</h1>
            <div className="ml-auto mr-4 flex gap-x-6">
                <button className="text-2xl font-bold text-gray-700 hover:underline" onClick={(e) => scrollToSection(e, "how-it-works")}>How it works?</button>
                <button className="text-2xl font-bold text-gray-700 hover:underline" onClick={(e) => scrollToSection(e, "why-a-cookbook")}>Why a cookbook?</button>
                <button className="text-2xl font-bold text-gray-700 hover:underline" onClick={(e) => scrollToSection(e, "faq")}>FAQ</button>
            </div>
        </nav>
    )
}