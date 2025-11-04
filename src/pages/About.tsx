import GradientText from "../components/GradientText"
import ShinyText from "../components/ShinyText";
import Stepper, {Step} from "../components/Stepper";

export default function About() {
    return(
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-10 pt-55 pb-70">

            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-start pl-8">
                <GradientText
                    colors={["#4f8de9c7", "#afd2edff", "#77b6e7ff", "#bad3e7ff", "#e4e8ebff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-5xl sm:text-6xl font-extrabold mb-10"
                >
                    About Me
                </GradientText>

                <ShinyText 
                    text="Hello! I'm Omkar Hitalkumar Patel, a versatile Software Developer with a robust foundation in Computer Science Engineering and the ability to craft efficient, user-centric applications. My technical skills include programming in Python, SQL, along with hands-on experience in database management, web development technologies such as HTML, CSS, JavaScript, TypeScript, and software engineering principles. I thrive in environments where innovation is key. I am always excited to tackle new technical challenges and contribute to projects that require both front-end polish and deep backend engineering."
                    className="max-w-xxl text-gray-300 text-lg sm:text-2xl leading-relaxed text-justify px-5 pt-5"
                />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col justify-start">
                <GradientText
                    colors={["#4f8de9c7", "#afd2edff", "#77b6e7ff", "#bad3e7ff", "#e4e8ebff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-5xl sm:text-6xl font-extrabold mb-4"
                >
                    Education
                </GradientText>

                <div className="pl-1 pt-10">
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => console.log(step)}
                        onFinalStepCompleted={() => console.log("All steps completed!")}
                        backButtonText="Previous"
                        nextButtonText="Next"
                    >
                        <Step>
                            <h3 className="text-white font-semibold text-xl">Saraswati International School</h3>
                            <p className="text-gray-300 leading-relaxed text-justify">Class 10th CBSE</p>
                            <p className="text-sm text-gray-500 mb-2">2018 - 2019</p>
                            <p className="font-medium text-white">
                            <span className="text-gray-400 mt-3 ">Percentage:</span> 86%
                            </p>
                        </Step>

                        <Step>
                            <h3 className="text-white font-semibold text-xl">Saraswati International School</h3>
                            <p className="text-gray-300 leading-relaxed text-justify">Class 12th CBSE</p>
                            <p className="text-sm text-gray-500 mb-2">2020 - 2021</p>
                            <p className="font-medium text-white">
                            <span className="text-gray-400 mt-3 ">Percentage:</span> 87%
                            </p>
                        </Step>

                        <Step>
                            <h3 className="text-white font-semibold text-xl">Vellore Institute of Technology Bhopal</h3>
                            <p className="text-gray-300 leading-relaxed text-justify">Bachelor of Technology in Computer Science and Engineering</p>
                            <p className="text-sm text-gray-500 mb-2">2021 - 2025</p>
                            <p className="font-medium text-white">
                            <span className="text-gray-400 mt-3 ">CGPA:</span> 9.08/10
                            </p>
                        </Step>
                    </Stepper>
                </div>
            </div>

        </div>
    )
}