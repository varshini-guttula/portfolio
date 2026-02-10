import { Heart, Search, Minus, X } from "lucide-react";
import { useState, useRef } from "react";
import starImage from "@/assets/star.png";
import { Link } from "react-router-dom";



const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  
  const handleMouseEnter = () => {
    // Cancel any closing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuOpen(true);
  };
  const handleMouseLeave = () => {
    // Delay closing by 300ms
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  };
       return (
     <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Header */}
      <header className="flex justify-between items-center pl-2 sm:pl-4 md:pl-6 lg:pl-8 pr-4 sm:pr-8 md:pr-12 lg:pr-16 py-3 sm:py-5 relative">

        {/* Left: VG */}
        <Link to="/" className="select-none">
          <div className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-[400] tracking-[-0.09em] leading-none flex-shrink-0 select-none -mt-2 transition-colors duration-300 hover:text-pink-500">
            VG
          </div>
        </Link>


        <div className="-mt-5 relative">
        {/* Right: Heart + Menu Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Heart Icon */}
          <Heart
  className={`w-7 h-10 sm:w-7 sm:h-7 stroke-[1.8] self-start mt-[2px] cursor-pointer
              transition-transform transition-colors duration-700 ease-in-out
              ${menuOpen ? 'fill-pink-500 stroke-pink-500 rotate-[90deg]' : 'fill-black stroke-black rotate-0'}`}
  aria-label="Favorites"
/>


          {/* Floating Menu with equal spacing */}
          {menuOpen && (
            <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4
      flex items-center justify-between
      gap-x-4 sm:gap-x-6 md:gap-x-8   /* smaller gaps on smaller screens */
      text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  /* responsive size */
      font-medium">
              
              <Link
              to="/About"
              className="hover:text-pink-500 transition-colors duration-300"
              >
              ABOUT
              </Link> 
              <a
                href="https://drive.google.com/file/d/1BCyR6lJuFf95z-w-zMVaF26q8x1TOjmI/view?usp=sharing"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                RESUME
              </a>
              <a
                href="https://www.linkedin.com/in/varshini-guttula/"
                className="hover:text-pink-500 transition-colors duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)} 
              >
                CONNECT
              </a>  
            </div>
          )}
        </div>
      </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 pb-16 sm:pb-20">
        <div className="max-w-5xl">
          {/* Name */}
          <h1
  className="pl- sm:pl-2 md:pl-16 lg:pl-20 
    font-serenity 
    text-[90px] sm:text-[110px] md:text-[130px] lg:text-[150px] 
    tracking-[0.015em] 
    mb-12 sm:mb-16 
    leading-[1.05] float-up"
  style={{
    textShadow: `
      0.6px 0 0 currentColor,
      -0.6px 0 0 currentColor,
      0 0.6px 0 currentColor,
      0 -0.6px 0 currentColor,
      0.4px 0.4px 0 currentColor,
      -0.4px -0.4px 0 currentColor
    `,
  }}
>
  vARsHINI
  <br />
  <span
    className="pl-4 sm:pl-8 md:pl-16 lg:pl-20 
      inline-block 
      tracking-[0.015em]"
    style={{
      textShadow: `
        0.6px 0 0 currentColor,
        -0.6px 0 0 currentColor,
        0 0.6px 0 currentColor,
        0 -0.6px 0 currentColor,
        0.4px 0.4px 0 currentColor,
        -0.4px -0.4px 0 currentColor
      `,
    }}
  >
    GUTTULA
  </span>
</h1>



          {/* Email and Bio Container */}
          <div className="space-y-8 sm:space-y-10">
            {/* Email */}
            <div className="text-right">
              <a 
                href="mailto:varshiniguttula618@gmail.com"
                className="text-sm sm:text-base md:text-lg font-light hover:underline transition-all inline-block"
              >
                varshiniguttula618@gmail.com
              </a>
            </div>

            {/* Bio */}
            <div className="max-w-2xl pl-6 sm:pl-10 md:pl-16 lg:pl-24">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium leading-relaxed tracking-[-0.08em] whitespace-pre-line">
  Computer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Science &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; grad- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AI/ML{"\n"}
  specialization.&nbsp;&nbsp;&nbsp;&nbsp;Eager&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;&nbsp;explore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new{"\n"}
  ideas,&nbsp;&nbsp;even&nbsp;&nbsp;&nbsp;beyond&nbsp;&nbsp;&nbsp;my&nbsp;&nbsp;&nbsp;current&nbsp;&nbsp;&nbsp;skillset.{"\n"}
  Aiming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;&nbsp;apply&nbsp;&nbsp;&nbsp;&nbsp;technology&nbsp;&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;&nbsp;ways&nbsp;&nbsp;&nbsp;{"\n"}
  that&nbsp;&nbsp;&nbsp;&nbsp;solve&nbsp;&nbsp;&nbsp;&nbsp;real&nbsp;&nbsp;-&nbsp;&nbsp;world&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;problems&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and{"\n"}
  make&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;lasting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;difference.
</p>

            </div>
          </div>

          {/* Projects Section */}
          <div 
          id="projects"
          className="mt-20 sm:mt-28 md:mt-32 pl-4 sm:pl-6 md:pl-10 lg:pl-12">
            {/* Projects Header */}
            <div className="mb-10 sm:mb-12">
              <div className="inline-block relative">
                  <div className="border-[1.5px] border-foreground px-11 sm:px-15 py-7 sm:py-7 relative" style={{ borderRadius: '50%' }}>
                  <span className="text-3xl sm:text-3xl font-small tracking-[-0.08em]">PROJECTS</span>
                  {/* Decorative stars */}
                  <img src={starImage} alt="" className="absolute -top-1 -left-1 w-8 h-8 sm:w-10 sm:h-10" />
                  <img src={starImage} alt="" className="absolute -bottom-4 -right-3 w-14 h-14 sm:w-16 sm:h-16" />
                </div>
              </div>
            </div>

            


            
            {/* 1Project Card */}
            <div className="border-2 border-foreground rounded-3xl overflow-hidden relative bg-background shadow-[10px_10px_0px_0px_rgba(236,72,153,0.7)] -ml-2 sm:-ml-2 md:ml-0">
              <div className="p-6 sm:p-6">
                {/* URL Bar */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-foreground/20">
                  <Search className="w-7 h-7 flex-shrink-0" />
                  <a 
                    href="https://github.com/varshini-guttula/sign-language-detection-crnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base flex-1 truncate hover:underline font-light"
                    style={{ fontFamily: "Times New Roman, Times, serif",
                      fontSize: 22
                     }}
                  >
                    https://github.com/varshini-guttula/sign-language-detection-crnn
                  </a>
                  <div className="flex gap-2 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <Minus className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <X className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 tracking-[-0.08em]" >
                  Sign Language Gesture Recognition using Convolutional Recurrent Neural Network
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 tracking-[-0.03em]"
                 style={{fontWeight: 400 
                }}>
                  In recent years, advancements in technology, particularly in the field of deep learning, 
                  have offered promising solutions to address these barriers. Traditional approaches to sign 
                  language gesture recognition often relied on handcrafted feature extraction methods and 
                  machine learning algorithms. While effective to some extent, these methods often struggled 
                  to generalize across diverse gestures and variations in signing styles. Moreover, they often 
                  required extensive manual tuning and were limited in their ability to capture complex temporal 
                  dynamics inherent in sign language. This work introduces a novel hybrid approach, CRNN (Convolutional 
                  Recurrent Neural Network), for sign language gesture recognition. Leveraging the strengths of both 
                  Convolutional Neural Networks (CNNs) in spatial feature extraction and Recurrent Neural Networks 
                  (RNNs) in temporal modeling, CRNN offers enhanced accuracy and robustness in recognizing sign language 
                  gestures.
                  <br/>
                  Paper ID: 5109
                </p>
              </div>
            </div>



            <br/>
            <br/>
            <br/>
            {/* 2Project Card */}
            <div className="border-2 border-foreground rounded-3xl overflow-hidden relative bg-background shadow-[10px_10px_0px_0px_rgba(236,72,153,0.7)] -ml-2 sm:-ml-2 md:ml-0">
              <div className="p-6 sm:p-8">
                {/* URL Bar */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-foreground/20">
                  <Search className="w-7 h-7 flex-shrink-0" />
                  <a 
                    href="https://github.com/varshini-guttula/Gesture-Controlled-Switch-Smart-Automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base flex-1 truncate hover:underline font-light"
                    style={{ fontFamily: "Times New Roman, Times, serif",
                      fontSize: 22
                     }}
                  >
                  https://github.com/varshini-guttula/Gesture-Controlled-Switch-Smart-Automation
                  </a>
                  <div className="flex gap-2 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <Minus className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <X className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 tracking-[-0.08em]" >
                  Gesture-Controlled Switches for Smart Home Automation Using Optical Sensors
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 tracking-[-0.03em]"
                 style={{fontWeight: 400 
                }}>
                  The traditional switches are extensively applied in different applications, but they are 
                  limited in a number of aspects. Some of the internal limitations are related to usability,
                  accessibility and efficiency. Including sensors can be used to address such concerns, 
                  adding capabilities, including touchless control and automated responses. The technology 
                  makes user experience very high, through the use of such sensors such as ultrasonic sensors,
                  which make the switch systems more functional and user friendly. The other advantage of 
                  sensor-based systems is that they are able to deliver automated responses. The switch systems
                  will be smarter and more interactive as the sensors can be programmed to respond to certain
                  conditions or inputs.
            
                </p>
              </div>
            </div>





            <br/>
            <br/>
            <br/>
            {/* 3Project Card */}
            <div className="border-2 border-foreground rounded-3xl overflow-hidden relative bg-background shadow-[10px_10px_0px_0px_rgba(236,72,153,0.7)] -ml-2 sm:-ml-2 md:ml-0">
              <div className="p-6 sm:p-8">
                {/* URL Bar */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-foreground/20">
                  <Search className="w-7 h-7 flex-shrink-0" />
                  <a 
                    href="https://github.com/varshini-guttula/LearnAbility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base flex-1 truncate hover:underline font-light"
                    style={{ fontFamily: "Times New Roman, Times, serif",
                      fontSize: 22
                     }}
                  >
                    https://github.com/varshini-guttula/LearnAbility
                  </a>
                  <div className="flex gap-2 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <Minus className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center rounded-full border-[1.0px] border-black">
                      <X className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 tracking-[-0.08em]" >
                  LEARNABILITY: Detection of Learning Disorders Using Machine Learning
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 tracking-[-0.03em]"
                 style={{fontWeight: 400 
                }}>
                  Classification and detection of learning disabilities (majorly dyslexia) among different 
                  age groups using ML and provide materials that help assess their disabilities. Random Forest 
                  Regressor is used to predict the writing score, which is a continuous target variable, and a 
                  Random Forest Classifier is employed to predict whether the individual has dyslexia (binary 
                  classification). Both models are wrapped in multi-output versions to handle these dual outputs
                  simultaneously.
                  
                </p>
              </div>
            </div>



          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
