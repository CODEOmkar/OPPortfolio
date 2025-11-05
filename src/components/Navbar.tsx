import GlassSurface from "./GlassSurface";
import CircularText from "./CircularText";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Thin black bar */}
      <div className="w-full h-[20px] bg-black"></div>

      {/* Container for name box + flexible glass area */}
      <div className="relative w-full -mt-[1px]">
        {/* Main black name section */}
        <div className="relative flex items-center bg-black text-white rounded-br-[3.5rem] px-9 py-3.5 w-fit">
          {/* Top concave curve */}
          <svg
            className="absolute -top-[1px] -right-[54px] w-[55px] h-[59px]"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
            </g>
          </svg>

          {/* Bottom-left decorative curve */}
          <svg
            className="absolute -bottom-[55px] -left-[0px] w-[55px] h-[55px]"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
            </g>
          </svg>

          {/* Text content */}
          <div className="w-[45px] h-[80px] flex items-center justify-center mr-1">
            <CircularText
                text="OMKAR*H*PATEL*"
                onHover="slowDown"
                spinDuration={10}
                className="custom-class absolute top-[0px] left-[10px]"
            />
          </div>
        </div>

        {/* Glass Surface container */}
        <div className="absolute left-1/2 -translate-x-[calc(50%+20px)] top-[26px] z-10 hidden sm:block">
          <GlassSurface
            width={400}
            height={60}
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
            <div className="text-white flex gap-6 items-center justify-center h-full">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-200 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-200 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-200 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition-colors">Contact</button>
            </div>
          </GlassSurface>
        </div>

        {/* Small screen Glass Surface container */}
        <div className="absolute left-1/2 -translate-x-[calc(50%-40px)] top-[26px] z-10 block sm:hidden">
          <GlassSurface
            width={250}
            height={55}
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
            <div className="text-xs text-white flex gap-2 items-center justify-center h-full">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-200 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-200 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-200 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition-colors">Contact</button>
            </div>
          </GlassSurface>
        </div>

        <div className="absolute right-10 top-0 bg-transparent w-[80px] h-[80px] overflow-hidden">
          {/* Top-right decorative curve inside */}
          <svg
            className="absolute top-0 right-0 w-[55px] h-[57px] rotate-90"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
}