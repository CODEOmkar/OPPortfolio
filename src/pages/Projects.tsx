import GradientText from "../components/GradientText"
import SpotlightCard from "../components/SpotlightCard"
import GlassSurface from "../components/GlassSurface"

export default function Projects(){
    return(
        <div id="projects" className="w-full min-h-screen flex flex-col items-center justify-start pt-30 pb-20">
            <GradientText
                colors={["#5aabe9ff", "#afd2edff", "#77b6e7ff", "#bad3e7ff", "#e4e8ebff"]}
                animationSpeed={3}
                showBorder={false}
                className="text-5xl sm:text-6xl font-extrabold mb-10"
            >
                My Projects:
            </GradientText>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 pr-10 pb-15">
                <SpotlightCard className="custom-spotlight-card text-gray-400 flex flex-col justify-between" spotlightColor="rgba(116, 161, 195, 0.2)">
                    <h3 className="text-white font-semibold text-xl">NoteMark↓</h3>
                    <p className="text-sm text-gray-500 mb-2">Oct. 2025</p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                    Developed a dynamic, client-side note application for seamless CRUD operations, using Local Storage
                    for secure data management and offering dual light/dark themes. It features Markdown/Text editing,
                    a tagging system for organization, and versatile data portability through export in four key formats
                    (Markdown, HTML, Text, JSON).
                    </p>

                    <p className="text-gray-400 mt-3">
                    <span className="font-medium text-white">Tech Stack:</span> HTML, CSS, TypeScript, React.js, Local Storage
                    </p>
                    <br></br>
                    {/* For medium & large screens */}
                    <div className="hidden md:flex flex-wrap md:gap-5 lg:gap-5 justify-center pt-3 mt-auto">
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/NoteMark-" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface>
                    </div>

                    {/* For small screens */}
                    <div className="flex md:hidden flex-wrap gap-4 justify-center pt-2 mt-auto">
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/NoteMark-" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card text-gray-400 flex flex-col justify-between" spotlightColor="rgba(116, 161, 195, 0.2)">
                    <h3 className="text-white font-semibold text-xl">Heart Disease Predictor</h3>
                    <p className="text-sm text-gray-500 mb-2">May 2025</p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                    Developed a machine learning-powered API that analyzes patient health parameters to predict the likelihood of
                    heart disease, aimed at assisting early diagnosis and preventive care. Built a minimal yet effective user interface to interact with the API, enabling real-time predictions and seamless
                    user experience for healthcare applications and academic demonstrations.
                    </p>

                    <p className="text-gray-400 mt-3">
                    <span className="font-medium text-white">Tech Stack:</span> Python, FastAPI, scikit-learn, Pandas, NumPy, React.js, Axios, HTML, CSS
                    </p>
                    <br></br>
                    {/* For medium & large screens */}
                    <div className="hidden md:flex flex-wrap md:gap-5 lg:gap-5 justify-center pt-3 mt-auto">
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/Heart-Disease-Predictor" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>

                    {/* For small screens */}
                    <div className="flex md:hidden flex-wrap gap-4 justify-center pt-2 mt-auto">
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/Heart-Disease-Predictor" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card text-gray-400 flex flex-col justify-between" spotlightColor="rgba(116, 161, 195, 0.2)">
                    <h3 className="text-white font-semibold text-xl">AyurKritima</h3>
                    <p className="text-sm text-gray-500 mb-2">May 2024</p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                    Innovated a disease prediction platform leveraging the Gemini API, forecasts 100+ diseases and recommends Ayurvedic treatments. Implemented a user-friendly interface and robust backend, security measures with multi-factor authentication.
                    </p>
                    <p className="text-gray-400 mt-3">
                    <span className="font-medium text-white">Tech Stack:</span> React.js, Node.js, Express.js, MongoDB, Gemini API
                    </p>
                    <br></br>
                    {/* For medium & large screens */}
                    <div className="hidden md:flex flex-wrap md:gap-5 lg:gap-5 justify-center pt-3 mt-auto">
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/AyurKritima" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>

                    {/* For small screens */}
                    <div className="flex md:hidden flex-wrap gap-4 justify-center pt-2 mt-auto">
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/AyurKritima" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card text-gray-400 flex flex-col justify-between" spotlightColor="rgba(116, 161, 195, 0.2)">
                    <h3 className="text-white font-semibold text-xl">MonEnOut</h3>
                    <p className="text-sm text-gray-500 mb-2">Nov. 2023</p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                    Developed a platform for managing and optimising user’s finances, providing tools for budgeting, expense tracking and planning to improve financial oversight. Implemented a robust local storage solution for financial data, boosting data security.
                    </p>

                    <p className="text-gray-400 mt-3">
                    <span className="font-medium text-white">Tech Stack:</span> React.js, MongoDB, Express.js, Nods.js
                    </p>
                    <br></br>
                    {/* For medium & large screens */}
                    <div className="hidden md:flex flex-wrap md:gap-5 lg:gap-5 justify-center pt-3 mt-auto">
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/Personal-Finance-Tracker" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>

                    {/* For small screens */}
                    <div className="flex md:hidden flex-wrap gap-4 justify-center pt-2 mt-auto">
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/Personal-Finance-Tracker" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card text-gray-400 flex flex-col justify-between" spotlightColor="rgba(116, 161, 195, 0.2)">
                    <h3 className="text-white font-semibold text-xl">SKOMOR</h3>
                    <p className="text-sm text-gray-500 mb-2">Sept. 2022</p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                    Developed a centralized portal to assist students with homework and learning, providing a comprehensive resource for educational support and enhancing study efficiency. Implemented features such as assignment tracking, study material access, and interactive learning tools to create an engaging and effective learning environment for students.
                    </p>
                    <p className="text-gray-400 mt-3">
                    <span className="font-medium text-white">Tech Stack:</span> HTML, CSS, JavaScript, Python
                    </p>
                    <br></br>
                    {/* For medium & large screens */}
                    <div className="hidden md:flex flex-wrap md:gap-5 lg:gap-5 justify-center pt-3 mt-auto">
                        <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/SKOMOR" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={120} height={50} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>

                    {/* For small screens */}
                    <div className="flex md:hidden flex-wrap gap-4 justify-center pt-2 mt-auto">
                        <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://github.com/CODEOmkar/SKOMOR" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-6 pr-6">
                                Code
                            </a>
                        </GlassSurface>
                        {/* <GlassSurface width={100} height={40} borderRadius={50} displace={15} distortionScale={-150} redOffset={5} greenOffset={15} blueOffset={25} brightness={60} opacity={0.01} mixBlendMode="screen">
                            <a href="https://note-mark-git-main-omkar-patels-projects-313c7af5.vercel.app?_vercel_share=WCIafwrlRXdaoJVMQsIcNEBHHtpijYC6" target="_blank" rel="noopener noreferrer" className="text-xs text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pr-2 pl-2">
                                Live Demo
                            </a>
                        </GlassSurface> */}
                    </div>
                </SpotlightCard>

            </div>
        </div>
    )
}