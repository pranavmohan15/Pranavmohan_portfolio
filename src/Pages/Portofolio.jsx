import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes, MoveRight } from "lucide-react";

// --- STEP 1: IMPORT ALL YOUR COMPONENTS AND IMAGES ---
import Certificate from "../components/Certificate"; 
import TechStackIcon from "../components/TechStackIcon"; 

// Import all images so React can process them
import folioxImage from "../assets/foliox.jpg";
import estateImage from "../assets/estate.jpg";
import farmerImage from "../assets/farmer.jpg";
import inventoryImage from "../assets/inventory.jpg";
import myCertificateImage from "../assets/my-certificate.jpg"; 

// --- Card Project Component ---
const CardProject = ({ Img, Title, Description, Link: liveLink, id }) => {
  const cardClassName = `group/item relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/50`;
  return (
    <div className={cardClassName}>
      <div>
        <div className="mb-4 h-40 w-full overflow-hidden rounded-lg"><img src={Img} alt={Title} className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"/></div>
        <h3 className="mb-2 text-xl font-bold text-slate-100">{Title}</h3><p className="text-sm text-slate-400">{Description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-violet-400">Live Demo <MoveRight size={16} /></a>
        <RouterLink to={`/project/${id}`} className="rounded-full bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-indigo-600">Details</RouterLink>
      </div>
    </div>
  );
};

// --- Helper Components ---
function TabPanel({ children, value, index, ...other }) {
    return (<div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>{value === index && (<Box sx={{ p: { xs: 1, sm: 3 } }}><Typography component="div">{children}</Typography></Box>)}</div>);
}
TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired,};
function a11yProps(index) { return { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}`,};}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JAVASCRIPT" },
  { icon: "python.png", language: "PYTHON" },
  { icon: "reactjs.svg", language: "REACTJS" },
  { icon: "nodejs.svg", language: "NODE JS" },
];

const projects = [
    { id: 1, Img: folioxImage, Title: "FolioX – Financial Portfolio Manager", Description: "Track and manage investments with real-time market data. Built using Flutter, Django, and Firebase.", Link: "https://github.com/pranavmohan15/FOLIOX", aos: "fade-up-right", },
    { id: 2, Img: estateImage, Title: "EstateEase – Real Estate UI", Description: "Modern UI for real estate listings. Built using React Native, NativeWind, and Expo.", Link: "https://estate-ease-to8a.vercel.app/", aos: "fade-up", },
    { id: 3, Img: farmerImage, Title: "Farmers Portal", Description: "Bidding and product listing system for farmers. Developed with MERN Stack.", Link: "https://github.com/pranavmohan15/Farmersportal", aos: "fade-up-left", },
    { id: 4, Img: inventoryImage, Title: "Inventorysys – Product Inventory System", Description: "Full‑stack inventory management web app using React.js and Django REST Framework.", Link: "https://github.com/pranavmohan15/inventorysys", aos: "fade-up", },
];

export default function Portofolio() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => { AOS.init({ once: false }); }, []);
  const handleChange = (event, newValue) => { setValue(newValue); };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
        <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#34d399]">Portfolio Showcase</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
        </div>
        
        <Box sx={{ width: "100%" }}>
            <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)", backdropFilter: "blur(10px)", zIndex: 0, }, }} className="md:px-4">
                <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth" sx={{ minHeight: "70px", "& .MuiTab-root": { fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: "600", color: "#cbd5e1", textTransform: "none", transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", padding: "20px 0", zIndex: 1, margin: "8px", borderRadius: "12px", "&:hover": { color: "#ffffff", backgroundColor: "rgba(139, 92, 246, 0.1)", transform: "translateY(-2px)", "& .lucide": { transform: "scale(1.1) rotate(5deg)" }, }, "&.Mui-selected": { color: "#fff", background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))", boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)", "& .lucide": { color: "#a78bfa" }, }, }, "& .MuiTabs-indicator": { height: 0, }, "& .MuiTabs-flexContainer": { gap: "8px", }, }}>
                    <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
                    <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
                    <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            
            <div axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                        {projects.map((proj) => (<div key={proj.id} className="flex" data-aos={proj.aos} data-aos-duration="1000"><CardProject Img={proj.Img} Title={proj.Title} Description={proj.Description} Link={proj.Link} id={proj.id}/></div>))}
                    </div>
                </TabPanel>
                
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="max-w-xl mx-auto p-4" data-aos="fade-up">
                        <Certificate ImgSertif={myCertificateImage} />
                    </div>
                </TabPanel>
                
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                            {techStacks.map((stack, index) => (<div key={index} data-aos="fade-up"><TechStackIcon TechStackIcon={stack.icon} Language={stack.language}/></div>))}
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Box>
    </div>
  );
}