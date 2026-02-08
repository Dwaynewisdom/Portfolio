import "./../css/projects.css"

function Projects(){
    
    const projects = [{
        id:"1",
        title:"Demo Music Mobile-Application",
        description:"Built with React-Native",
        image:"./Mobile-app3.jpg",
        link:"https://github.com/Dwaynewisdom/Music-Player-Side-Project-"
    },
    {
        id:"2",
        title:"PDF-Editor",
        description:"Allows users to make any changes need to a PDF-file",
        image:"https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@d1b403d02213b68e4482f92ea0edf288f57f03af/Screenshot%202026-02-06%20194747.png",
        link:"https://github.com/Dwaynewisdom/PDF-Editor"
    },
    ]

    return(
        <div className="projects">
            <div className="video-container">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src="./video2.mp4" type="video/mp4"/> 
                </video>
            </div>
                <h1>Projects</h1>
            <div className="Project">
                {projects.map((stack, index) => (
                <div key={index} className="tech-stack">
                    <a href={stack.link} target="_blank" rel="noopener noreferrer">
                    <img src={stack.image} alt={`${stack.title} logo`} className="tech-logo" />
                    </a>
                    <h2>{stack.title}</h2>
                    <p>{stack.description}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;