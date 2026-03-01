import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";

// --- Main Data Source ---
// THE FIX: This array's order and IDs now EXACTLY MATCH the order from your portfolio showcase page.
const projectsData = [
  {
    id: 1, // ID for the FIRST project on your portfolio (FolioX)
    Title: "FolioX – Financial Portfolio Management",
    Img: "/src/assets/foliox.jpg",
    Description: "Built a web platform using Flutter (frontend) and Django + Firebase (backend) for stock news and tracking. This was my final year project.",
    Link: "https://github.com/pranavmohan15/FOLIOX_ORG",
    Github: "https://github.com/pranavmohan15/FOLIOX_ORG",
    TechStack: ["Flutter", "Django", "Firebase", "Python"],
    Features: [
      "Secure user authentication and registration.",
      "Personalized dashboards to track investments.",
      "Real-time stock market news and tracking.",
      "Financial goal setting and progress monitoring features.",
      "Clean architecture focused on performance and scalability.",
    ],
  },
  {
    id: 2, // ID for the SECOND project (EstateEase)
    Title: "EstateEase – Real Estate UI",
    Img: "/src/assets/estate.jpg",
    Description: "Developed a mobile UI clone using React Native, Expo, and NativeWind based on a Figma design. Focused on clean architecture, reusable components, and responsive layout.",
    Link: "https://github.com/pranavmohan15/Estate-Ease",
    Github: "https://github.com/pranavmohan15/Estate-Ease",
    TechStack: ["React Native", "Expo", "NativeWind", "JavaScript"],
    Features: [
      "Pixel-perfect implementation of a Figma design.",
      "Built with a focus on clean architecture principles.",
      "Extensive library of reusable, cross-platform components.",
      "Fully responsive layout for various mobile screen sizes.",
    ],
  },
  {
    id: 3, // ID for the THIRD project (Farmers Portal)
    Title: "Farmers Portal",
    Img: "/src/assets/farmer.jpg",
    Description: "Created a bidding and product listing system using React and Node.js to connect farmers with buyers. This academic project aimed to enable transparent pricing and improve supply chain efficiency through a user-friendly portal.",
    Link: "https://github.com/pranavmohan15/Farmers_portal",
    Github: "https://github.com/pranavmohan15/Farmersportal",
    TechStack: ["React", "Node.js"],
    Features: [
      "Comprehensive product listing system for farmers.",
      "Integrated bidding functionality for buyers.",
      "User-friendly portal for both farmers and buyers.",
      "Aims to create a transparent pricing model.",
    ],
  },
  {
    id: 4, // ID for the FOURTH project (Inventorysys)
    Title: "Inventorysys – Product Inventory System",
    Img: "/src/assets/inventory.jpg",
    Description: "Developed a full-stack inventory management web app using React.js and Django REST Framework with a modern “frosted glass” UI.",
    Link: "https://github.com/pranavmohan15/inventorysys",
    Github: "https://github.com/pranavmohan15/inventorysys",
    TechStack: ["React", "Django REST Framework", "JavaScript"],
    Features: [
      "Real-time stock updates and tracking.",
      "Dynamic product creation with variants (e.g., size, color).",
      "Detailed transaction reporting and history.",
      "Modern, responsive 'frosted glass' user interface.",
      "Advanced category filtering and search functionality.",
    ],
  },
];


// --- Helper Components & Mappings (Unchanged) ---
const TECH_ICONS = { React: Globe, "React Native": Globe, Flutter: Globe, "Django REST Framework": Cpu, Django: Cpu, "Node.js": Cpu, Express: Cpu, Firebase: Layers, Tailwind: Layout, NativeWind: Layout, Python: Code, JavaScript: Code, "MERN Stack": Package, Expo: Package, default: Package, };
const TechBadge = ({ tech }) => { const Icon = TECH_ICONS[tech] || TECH_ICONS["default"]; return ( <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"><div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500" /><div className="relative flex items-center gap-1.5 md:gap-2"><Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" /><span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">{tech}</span></div></div>); };
const FeatureItem = ({ feature }) => ( <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"><div className="relative mt-2"><div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" /><div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:scale-125 transition-transform duration-300" /></div><span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{feature}</span></li>);
const ProjectStats = ({ project }) => { const techStackCount = project?.TechStack?.length || 0; const featuresCount = project?.Features?.length || 0; return ( <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative"><div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" /><div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg"><div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full"><Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} /></div><div><div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div><div className="text-[10px] md:text-xs text-gray-400">Technologies</div></div></div><div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-indigo-500/20 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 hover:shadow-lg"><div className="bg-indigo-500/20 p-1.5 md:p-2 rounded-full"><Layers className="text-indigo-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} /></div><div><div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div><div className="text-[10px] md:text-xs text-gray-400">Key Features</div></div></div></div>); };

// --- Main ProjectDetails Component (Unchanged) ---
const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const selectedProject = projectsData.find((p) => String(p.id) === id);
        setProject(selectedProject);
    }, [id]);

    if (!project) {
        return ( <div className="min-h-screen bg-[#030014] flex items-center justify-center text-white"><div className="text-center space-y-4"><div className="w-16 h-16 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" /><h2 className="text-xl md:text-3xl font-bold">Loading Project...</h2></div></div> );
    }

    return (
        <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
            <div className="fixed inset-0"><div className="absolute -inset-[10px] opacity-20"><div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" /><div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" /><div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" /></div><div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" /></div>
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
                    <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn"><button onClick={() => navigate(-1)} className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"><ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" /><span>Back</span></button><div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50"><span>Projects</span><ChevronRight className="w-3 h-3 md:w-4 md:h-4" /><span className="text-white/90 truncate">{project.Title}</span></div></div>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                        <div className="space-y-6 md:space-y-10 animate-slideInLeft"><div className="space-y-4 md:space-y-6"><h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">{project.Title}</h1><div className="relative h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" /></div><p className="text-base md:text-lg text-gray-300/90 leading-relaxed">{project.Description}</p><ProjectStats project={project} /><div className="flex flex-wrap gap-3 md:gap-4"><a href={project.Link} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"><ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" /><span className="relative font-medium">Live Demo</span></a><a href={project.Github} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-indigo-600/10 to-pink-600/10 hover:from-indigo-600/20 hover:to-pink-600/20 text-indigo-300 rounded-xl transition-all duration-300 border border-indigo-500/20 hover:border-indigo-500/40"><Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" /><span className="relative font-medium">GitHub</span></a></div><div className="space-y-4 md:space-y-6 pt-6"><h3 className="text-lg md:text-xl font-semibold text-white/90 flex items-center gap-2 md:gap-3"><Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />Technologies Used</h3><div className="flex flex-wrap gap-2 md:gap-3">{project.TechStack.map((tech) => ( <TechBadge key={tech} tech={tech} />))}</div></div></div>
                        <div className="space-y-6 md:space-y-10 animate-slideInRight"><div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"><img src={project.Img} alt={project.Title} className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 transition-colors duration-300 rounded-2xl" /></div><div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 group"><h3 className="text-xl font-semibold text-white/90 flex items-center gap-3"><Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />Key Features</h3><ul className="list-none space-y-2">{project.Features.map((feature) => ( <FeatureItem key={feature} feature={feature} />))}</ul></div></div>
                    </div>
                </div>
            </div>
            <style jsx>{` @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } } .animate-blob { animation: blob 10s infinite; } .animation-delay-2000 { animation-delay: 2s; } .animation-delay-4000 { animation-delay: 4s; } .animate-fadeIn { animation: fadeIn 0.7s ease-out; } .animate-slideInLeft { animation: slideInLeft 0.7s ease-out; } .animate-slideInRight { animation: slideInRight 0.7s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } } @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } } `}</style>
        </div>
    );
};

export default ProjectDetails;