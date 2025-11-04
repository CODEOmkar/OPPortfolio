import GlassSurface from "../components/GlassSurface"
import LiquidChrome from "../components/LiquidChrome";

export default function Contact(){
    return(
        <div id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-start pt-30 pb-0">
            <div className="absolute inset-0 z-0 pointer-events-none pt-5 pr-5 pl-5 pb-5">
                <LiquidChrome
                    baseColor={[0.05, 0.05, 0.07]}
                    speed={0.2}
                    amplitude={0.4}
                    interactive={false}
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

            <div className="hidden lg:block pt-20 pb-10">
                <GlassSurface
                    width={950}
                    height={550}
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
        
                        <div className="absolute md:top-20 md:left-20 top-10 left-6">
                            {/* Header */}
                            <h2 className="text-6xl font-semibold text-white mb-10 text-center">Contact Information</h2>

                            {/* Contact List */}
                            <div className="space-y-8 text-3xl">
                                {/* Email */}
                                <div className="flex items-center space-x-4 pl-1">
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"
                                    strokeLinejoin="round" className="w-11 h-12 text-gray-300">
                                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                                    <polyline points="3 7 12 13 21 7"></polyline>
                                </svg>
                                <a href="mailto:omkarpatel61319@gmail.com"
                                    className="text-gray-300 hover:text-blue-200 transition">
                                    omkarpatel61319@gmail.com
                                </a>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center space-x-4 pb-1 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" className="w-10 h-10 text-gray-300">
                                    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM1 8.5H5V22H1V8.5ZM8.5 8.5H12V10.5H12.05C12.6 9.5 14 8.4 16 8.4C20.3 8.4 21 11.1 21 15.1V22H17V15.8C17 14.1 16.9 12 14.8 12C12.6 12 12.3 13.8 12.3 15.7V22H8.5V8.5Z" />
                                </svg>
                                <a href="https://www.linkedin.com/in/omkarhpatel/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="pt-2 text-gray-300 hover:text-blue-200 transition">
                                    LinkedIn
                                </a>
                                </div>

                                {/* GitHub */}
                                <div className="flex items-center space-x-4 pt-1 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" className="w-10 h-10 text-gray-300">
                                    <path fillRule="evenodd"
                                    d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.582 0-.288-.011-1.049-.017-2.058-3.338.726-4.042-1.61-4.042-1.61-.547-1.39-1.337-1.76-1.337-1.76-1.092-.746.083-.73.083-.73 1.207.085 1.842 1.241 1.842 1.241 1.073 1.838 2.813 1.307 3.496.999.108-.777.42-1.307.763-1.608-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.238-3.222-.124-.304-.537-1.526.117-3.176 0 0 1.01-.323 3.3 1.23a11.47 11.47 0 013.003-.404c1.019.005 2.047.138 3.004.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.65.243 2.872.12 3.176.772.84 1.237 1.912 1.237 3.222 0 4.61-2.807 5.623-5.479 5.921.431.372.816 1.104.816 2.225 0 1.606-.015 2.903-.015 3.297 0 .324.192.698.8.58A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"
                                    clipRule="evenodd" />
                                </svg>
                                <a href="https://github.com/CODEOmkar"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-200 transition">
                                    GitHub
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-15 right-20">
                            {/* Reach Out Button */}
                            <GlassSurface
                                width={180}
                                height={80}
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
                                href="mailto:omkarpatel61319@gmail.com"
                                className="text-white text-2xl text-center hover:text-blue-200 transition-colors p-6"
                                >
                                Reach Out
                                </a>
                            </GlassSurface>
                        </div>
                </GlassSurface>
            </div>

            {/* Smaller Screen Contact Card */}
            <div className="block lg:hidden pt-15 pb-10">
                <GlassSurface
                    width={450}
                    height={325}
                    borderRadius={30}
                    className="my-custom-class"
                    displace={10}
                    distortionScale={-100}
                    redOffset={4}
                    greenOffset={10}
                    blueOffset={20}
                    brightness={60}
                    opacity={0.01}
                    mixBlendMode="screen"
                >
                    <div className="absolute top-8 left-6">
                        <h2 className="text-3xl font-semibold text-white mb-10 text-center">Contact Information</h2>

                        <div className="space-y-4 text-lg pl-1">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth={1.5}
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="w-7 h-7 text-gray-300">
                                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                                    <polyline points="3 7 12 13 21 7"></polyline>
                                </svg>
                                <a href="mailto:omkarpatel61319@gmail.com"
                                    className="text-gray-300 hover:text-blue-200 transition">
                                    omkarpatel61319@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" className="w-7 h-7 text-gray-300">
                                    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM1 8.5H5V22H1V8.5ZM8.5 8.5H12V10.5H12.05C12.6 9.5 14 8.4 16 8.4C20.3 8.4 21 11.1 21 15.1V22H17V15.8C17 14.1 16.9 12 14.8 12C12.6 12 12.3 13.8 12.3 15.7V22H8.5V8.5Z" />
                                </svg>
                                <a href="https://www.linkedin.com/in/omkarhpatel/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-200 transition">
                                    LinkedIn
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" className="w-7 h-7 text-gray-300">
                                    <path fillRule="evenodd"
                                        d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.582 0-.288-.011-1.049-.017-2.058-3.338.726-4.042-1.61-4.042-1.61-.547-1.39-1.337-1.76-1.337-1.76-1.092-.746.083-.73.083-.73 1.207.085 1.842 1.241 1.842 1.241 1.073 1.838 2.813 1.307 3.496.999.108-.777.42-1.307.763-1.608-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.238-3.222-.124-.304-.537-1.526.117-3.176 0 0 1.01-.323 3.3 1.23a11.47 11.47 0 013.003-.404c1.019.005 2.047.138 3.004.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.65.243 2.872.12 3.176.772.84 1.237 1.912 1.237 3.222 0 4.61-2.807 5.623-5.479 5.921.431.372.816 1.104.816 2.225 0 1.606-.015 2.903-.015 3.297 0 .324.192.698.8.58A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"
                                        clipRule="evenodd" />
                                </svg>
                                <a href="https://github.com/CODEOmkar"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-200 transition">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8">
                        <GlassSurface
                            width={150}
                            height={60}
                            borderRadius={30}
                            displace={10}
                            distortionScale={-100}
                            redOffset={4}
                            greenOffset={10}
                            blueOffset={20}
                            brightness={60}
                            opacity={0.01}
                            mixBlendMode="screen"
                        >
                            <a
                                href="mailto:omkarpatel61319@gmail.com"
                                className="text-white text-lg text-center hover:text-blue-200 transition-colors p-3"
                            >
                                Reach Out
                            </a>
                        </GlassSurface>
                    </div>
                </GlassSurface>
            </div>
        </div>
    )
}