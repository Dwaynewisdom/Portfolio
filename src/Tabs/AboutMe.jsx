import './../css/Aboutme.css';
function Homepage() {


  const techStacks = [{
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/react_original_logo_icon_146374.png",
    link: "https://react.dev/"
  },
  {
    name: "JavaScript",
    description: "A versatile programming language used for web development.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/javascript_icon_130900.png",
    link: "https://www.javascript.com/"
  },
  {
    name: "Java",
    description: "A high-level, class-based, object-oriented programming language.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/java_original_logo_icon_146458.png",
    link: "https://www.java.com/en/"
  },
  {
    name: "TypeScript",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/typescript_original_logo_icon_146317.png",
    link: "https://www.typescriptlang.org/"
  },
  {
    name: "HTML",
    description: "The standard markup language for creating web pages.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/file_type_html_icon_130541.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    description: "A stylesheet language used for describing the presentation of a document written in HTML.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/file_type_css_icon_130661.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "React Native",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/react_original_logo_icon_146374.png",
    link: "https://reactnative.dev/"
  },
  {
    name: "python",
    description: "A JavaScript library for building user interfaces.",
    image: "https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@f5a79137d14be44a1ed38d8a7243f55597aaf1d5/Images/python_18894.png",
    link: "https://www.python.org/"
  }
  ]
  return (
    <div className="homepage">
      <div className='hero-section'>
        <img
          src="https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@58c612e0dc3b0530cef8c525b98849e4d871d4a0/Images/Background.png" className='hero' alt='Background Image'
        />
      </div>
      <div className="Homepage-content">
        <h1 className='welcome'>Welcome</h1>
        <p>
          My name is <strong>Dwayne Wisdom</strong> a <strong>Computer and Business student</strong>, problem solver, and explorer of programming languages, I bridge the gap between <strong>complex systems architectures</strong> and <strong>user-friendly applications.</strong>
        </p>

      </div>
      <div className='about-me'>
        <h1 className='header'>From curiosity to Creation?</h1>
        <p>
          How I got into programming?. my journey into programming began with a simple curiosity about how software works. I started with a fairly understandable lanuage called <strong>Python</strong>, which allowed me to grasp fundamental programming concepts, This however was not what truly ignited my passion for the topic, leading me to stop in the 10th grade, I would select the Computer and Business in college, as I believed it lead to the most finacial oppurtunities, but from my first web development class, I became hooked with the concept of creating something from nothing, automating tasks, solving real-world problems, and being able to make something I don't have to buy from a third party seller right from my <strong>own computer</strong>. This passion for programming has driven me to continuously learn and explore new technologies, and I am excited to see where this journey takes me in the future.
        </p>
      </div>


      <h1 className='header'>Tech Stacks</h1>
      <div className="tech-stacks">

        {techStacks.map((stack, index) => (
          <div key={index} className="tech-stack">
            <a href={stack.link} target="_blank" rel="noopener noreferrer">
              <img src={stack.image} alt={`${stack.name} logo`} className="tech-logo" />
            </a>
            <h2>{stack.name}</h2>
            <p>{stack.description}</p>
          </div>
        ))}
      </div>


    </div>


  );

}
export default Homepage;