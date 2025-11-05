import GradientText from "../components/GradientText";
import GlassSurface from "../components/GlassSurface";
import LiquidChrome from "../components/LiquidChrome";

export default function Skills(){
    return(
        <div id="skill" className="relative w-full min-h-screen flex flex-col items-center justify-start pt-30 pb-0">
            <div className="absolute inset-0 z-0 pointer-events-none pt-5 pr-5 pl-5 pb-5">
                <LiquidChrome
                    baseColor={[0.05, 0.05, 0.07]}
                    speed={0.1}
                    amplitude={0.4}
                    interactive={true}
                />
            </div>
            
            <div className="z-10">
                    {/* Bottom-left decorative curve */}
                    <svg
                        className="absolute -bottom-[-17px] -left-[-20px] w-[55px] h-[59px] rotate-270"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
                        </g>
                    </svg>

                    {/* Bottom-right decorative curve */}
                    <svg
                        className="absolute -bottom-[-18px] -right-[-19px] w-[55px] h-[59px] rotate-180"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
                        </g>
                    </svg>
                </div>

            <div id="skills" className="w-full min-h-screen flex flex-col items-center justify-start pt-35 pb-5">
            <GradientText
                colors={["#5aabe9ff", "#afd2edff", "#77b6e7ff", "#bad3e7ff", "#e4e8ebff"]}
                animationSpeed={3}
                showBorder={false}
                className="text-4xl sm:text-5xl font-extrabold mb-10"
            >
                My Tech Stack:
            </GradientText>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-20 gap-y-10 p-8 justify-items-center pl-15 pr-15">
                {[
                    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                    { name: 'CLI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
                    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                ].map((tech) => (
                    <GlassSurface
                    key={tech.name}
                    width={150}
                    height={150}
                    borderRadius={50}
                    className="my-custom-class"
                    displace={15}
                    distortionScale={-150}
                    redOffset={5}
                    greenOffset={15}
                    blueOffset={25}
                    brightness={60}
                    opacity={0.01}
                    mixBlendMode="screen"
                    >
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 opacity-90" />
                        <p className="text-gray-300 font-semibold text-xl">{tech.name}</p>
                    </div>
                    </GlassSurface>
                ))}
                </div>
            
        </div>
        </div>
        
    )
}