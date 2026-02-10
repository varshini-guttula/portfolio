import { Heart, Search, Minus, X } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";
import customCursor from "@/assets/cursor.png";


import pythonLogo from "@/assets/python.png";
import tensorflowLogo from "@/assets/tensorflow.png";
import scikitLogo from "@/assets/scikit.png";

import numpyLogo from "@/assets/numpy.png";
import pandasLogo from "@/assets/pandas.png";
import matplotlibLogo from "@/assets/matplotlib.png";
import seabornLogo from "@/assets/seaborn.png";

import reactLogo from "@/assets/react.png";
import viteLogo from "@/assets/vite.png";
import jsLogo from "@/assets/javascript.png";
import cssLogo from "@/assets/css.png";
import htmlLogo from "@/assets/html.png";
import myImage from "@/assets/my-image.png";
import figmaLogo from "@/assets/figma.png";
import capcutLogo from "@/assets/capcut.png";
import davinciLogo from "@/assets/davinci.png";





const About = () => {
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
      
     <div className="min-h-screen bg-cover bg-background bg-no-repeat bg-fixedtext-foreground font-inter text-black custom-cursor"
     style={{ backgroundImage: `url(${aboutBg})`,
     cursor: `url(${customCursor}) 16 16, auto`
    }}
     
     >
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
            <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 flex items-center justify-between gap-x-8 text-[15px] sm:text-[16px] font-medium">
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
      <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 pb-16 sm:pb-20 float-up">
        <div className="max-w-5xl">
          {/* About ME */}
          <h1
  className="pl-6 sm:pl-10 md:pl-16 lg:pl-20 font-serenity text-[65px] sm:text-[80px] md:text-[95px] lg:text-[110px] tracking-[0.015em] mb-12 sm:mb-16 leading-[1.05]"
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
  About 
  <br />
  <span
    className="pl-0 sm:pl-1 md:pl-2 lg:pl-3 inline-block gap-[3px] tracking-[0.020em]"
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
    mE   
    <img
    src={myImage}
    alt="decor"
    className="w-16 h-16 sm:w-24 sm:h-24 inline-block"
  />
  </span>
</h1>




          {/*About Container */}
          <div className="space-y-8 sm:space-y-10">
          
            

            {/* About */}
            <div className="max-w-5xl pl-6 sm:pl-10 md:pl-16 lg:pl-24">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium leading-relaxed tracking-[-0.07em] whitespace-pre-line">
                “The things we love destroy us every time.” — Black Swan
                <br/>
                <br/>
                I’m drawn to the process of refining things until they feel right. 
                I spend a lot of time exploring what interests me and getting better 
                at the skills that actually matter in my work (maybe even beyond it :P).
                I am ambitious and fairly self-aware, so I tend to push myself and keep growing.
              </p>
            </div>
          </div>
<br/>
        <div className="mt-16 sm:mt-22 md:mt-29">
  {/* Tech Heading */}
  <h2
    className="pl-6 sm:pl-10 md:pl-16 lg:pl-[5.8rem] font-serenity text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0em] mb-8 sm:mb-10 leading-tight"
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
    TECH
  </h2>

  {/* Tech Description */}
  <div className="max-w-5xl pl-7 sm:pl-11 md:pl-[4.6rem] lg:pl-[6rem]">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium leading-relaxed tracking-[-0.08em] whitespace-pre-line">
      I was interested in tech at a young age. Gradually, I fell down the rabbit hole 
      and realised how vast the field  is. However, my interest was more towards 
      machine-learning technologies and understanding how models learn from data.
    </p>
  <div className="flex items-center gap-6 mt-6">
 {/* Tech Logos Grid */}
<div className="flex flex-wrap justify-center items-center gap-8 mt-8">

  {/* Row 1 */}
  <div className="flex items-center justify-center gap-8">
    <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
  <img src={pythonLogo} alt="Python Logo" className="w-13 lg:w-24 h-auto tech-logo" />
</a>

    <a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer">
      <img
        src={tensorflowLogo}
        alt="TensorFlow"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://scikit-learn.org" target="_blank" rel="noopener noreferrer">
      <img
        src={scikitLogo}
        alt="Scikit-Learn"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>
  </div>

  {/* Row 2 */}
  <div className="flex items-center justify-center gap-8">
    <a href="https://numpy.org" target="_blank" rel="noopener noreferrer">
      <img
        src={numpyLogo}
        alt="NumPy"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer">
      <img
        src={pandasLogo}
        alt="Pandas"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://matplotlib.org" target="_blank" rel="noopener noreferrer">
      <img
        src={matplotlibLogo}
        alt="Matplotlib"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://seaborn.pydata.org" target="_blank" rel="noopener noreferrer">
      <img
        src={seabornLogo}
        alt="Seaborn"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>
  </div>

  {/* Row 3 */}
  <div className="flex items-center justify-center gap-8">
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
      <img
        src={reactLogo}
        alt="React"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
      <img
        src={viteLogo}
        alt="Vite"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
      <img
        src={jsLogo}
        alt="JavaScript"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    {/* HTML – slightly smaller */}
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
    <img src={htmlLogo} className="w-13 lg:w-24 h-auto tech-logo" />
  </a>

  {/* CSS – slightly smaller */}
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
    <img src={cssLogo} className="w-13 lg:w-24 h-auto tech-logo" />
  </a>
  </div>
</div>

  
</div>
  </div>
</div>
<br/>
<br/>
<br/>

<div className="mt-16 sm:mt-22 md:mt-29">
  {/* Editing Heading */}
  <h2
    className="pl-6 sm:pl-10 md:pl-16 lg:pl-[5.8rem] font-serenity text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0em] mb-8 sm:mb-10 leading-tight"
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
    dESIGN & EDIT
  </h2>

  {/* Editing Description */}
  <div className="max-w-5xl pl-7 sm:pl-11 md:pl-[4.6rem] lg:pl-[6rem]">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium leading-relaxed tracking-[-0.08em] whitespace-pre-line">
    Moving forward, I developed a deep interest in creating artistic visions. I initially started by designing posters and ended up experimenting with videos, learning some fundamentals along the way. Videography opened a whole new perspective for me, showing how technology and creativity can come together to tell stories, capture moments, and communicate ideas in ways words alone cannot.
    </p>
  </div>
</div>

{/* Tech Logos Grid */}
<div className="flex flex-wrap justify-center items-center gap-8 mt-8">

  {/* Row 1 */}
  <div className="flex items-center justify-center gap-8">
    <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
  <img 
    src={figmaLogo} 
    alt="Figma" 
    className="w-13 lg:w-24 h-auto tech-logo" />
</a>

    <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer">
      <img
        src={capcutLogo}
        alt="Capcut"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>

    <a href="https://www.blackmagicdesign.com/in/products/davinciresolve" target="_blank" rel="noopener noreferrer">
      <img
        src={davinciLogo}
        alt="Davinci"
        className="w-13 lg:w-24 h-auto tech-logo"
      />
    </a>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<div className="max-w-5xl pl-7 sm:pl-11 md:pl-[4.6rem] lg:pl-[6rem]">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium leading-relaxed tracking-[-0.08em] whitespace-pre-line">
    Thats it about me :)  
    </p>
  </div>
          
        </div>
      </main>
    </div>
  );
};

export default About;
