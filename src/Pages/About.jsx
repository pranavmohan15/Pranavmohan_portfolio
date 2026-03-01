import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Layers } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectsData, certificatesData } from "../projectData";

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up" data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up" data-aos-duration="800"
    >
      <Layers className="w-5 h-5 text-indigo-400" />
      Turning ideas into full-stack web applications
      <Layers className="w-5 h-5 text-indigo-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-4 opacity-20 z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl" />
      </div>
      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(251,113,133,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-indigo-400/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          <img src="/Photo.jpg" alt="Pranav Mohan" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white" data-aos="fade-up-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
          {value}
        </span>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">{description}</p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-indigo-300 transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const totalProjects = projectsData.length;
  const totalCertificates = certificatesData.length;
  const YearExperience = 0;

  useEffect(() => { AOS.init({ once: false }); }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: totalProjects,
      label: "Total Projects",
      description: "Full-stack applications shipped",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: YearExperience,
      label: "Years Experience",
      description: "Industry + research internships",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates]);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
      <Header />
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Hello, I'm</span>
              <span className="block mt-2 text-gray-200" data-aos="fade-right" data-aos-duration="1300">Pranav Mohan</span>
            </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl text-left pb-4 sm:pb-0"
            data-aos="fade-right"
            data-aos-duration="1500">
            Full-stack Python developer building scalable backend systems with Django and interactive frontends using React. I design REST APIs, implement secure authentication, and structure relational databases for real-world applications. Focused on writing clean, production-ready code that solves practical problems.
        </p>

            <div className="relative bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 border border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden" data-aos="fade-up" data-aos-duration="1700">
              <blockquote className="text-gray-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                "Leveraging AI as a professional tool, not a replacement."
              </blockquote>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="/PRANAVMOHAN_RESUME.pdf" download="Pranav_Mohan_Resume.pdf" className="w-full lg:w-auto">
                <button data-aos="fade-up" data-aos-duration="800" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button data-aos="fade-up" data-aos-duration="1000" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (<StatCard key={stat.label} {...stat} />))}
          </div>
        </a>
      </div>

    </div>
  );
};

export default memo(AboutPage);
