import GradientText from "../components/GradientText";
import TextType from "../components/TextType";
import ShinyText from "../components/ShinyText";
import GlassSurface from "../components/GlassSurface";
import LiquidChrome from "../components/LiquidChrome";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0 pointer-events-none pb-5">
        <LiquidChrome
            baseColor={[0.05, 0.05, 0.07]}
            speed={0.2}
            amplitude={0.4}
            interactive={true}
        />
      </div>

      {/* === MAIN CONTENT === */}
          {/* Bottom-right decorative curve */}
          <svg
            className="absolute -bottom-[-17px] -right-[0px] w-[55px] h-[59px] rotate-180"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
            </g>
          </svg>

          {/* Bottom-left decorative curve */}
          <svg
            className="absolute -bottom-[-17px] -left-[0px] w-[55px] h-[59px] rotate-270"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
            </g>
          </svg>

      <div className="relative z-10 flex flex-col items-center justify-center mt-8 sm:mt-16 space-y-6 px-4">
        <GradientText 
          colors={["#f1f4f9ff", "#c5d3f6ff"]}
          className="text-xl sm:text-2xl font-extrabold mb-2"
        >
          Solving Problems at the Intersection of Data and Design.
        </GradientText>

        <GradientText
          colors={["#4f8de9c7", "#afd2edff", "#77b6e7ff", "#bad3e7ff", "#e4e8ebff"]}
          animationSpeed={3}
          showBorder={false}
          className="text-6xl lg:text-9xl font-extrabold mb-2"
        >
          Omkar H. Patel
        </GradientText>

        <div className="text-2xl sm:text-7xl text-gray-300 mb-6">
          <TextType 
            text={[
              "I am a Frontend Developer.",
              "I am a Python Developer.",
              "I solve problems.",
              "I like to Design."
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <ShinyText 
          text="Innovative Frontend and Python Developer passionate about creating seamless and impactful solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments."
          disabled={false} 
          speed={2} 
          className="max-w-4xl text-gray-200 text-base sm:text-2xl mb-10"
        />

        <div className="flex flex-wrap gap-4 justify-center pt-5">
          <GlassSurface
            width={200}
            height={50}
            borderRadius={50}
            displace={15}
            distortionScale={-150}
            redOffset={5}
            greenOffset={15}
            blueOffset={25}
            brightness={60}
            opacity={0.01}
            mixBlendMode="screen"
          >
            <div className="text-white justify-center">
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-200 transition-colors pt-3 pb-3 pl-8 pr-8">View My Work</button>
            </div>
          </GlassSurface>

          <GlassSurface
            width={200}
            height={50}
            borderRadius={50}
            displace={15}
            distortionScale={-150}
            redOffset={5}
            greenOffset={15}
            blueOffset={25}
            brightness={60}
            opacity={0.01}
            mixBlendMode="screen"
          >
            <a
              href="https://docs.google.com/document/d/1g4Z7Od6CGoC28Jxl5Ax2CXkkTMzNSg428TnsVPz7J-Y/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-center hover:text-blue-200 transition-colors pt-3 pb-3 pl-8 pr-8"
            >
              View Resume
            </a>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
}