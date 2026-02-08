import "./../css/Experience.css"

function Experience() {

    const experience = [{
    Job:"Gregory Park Primary",
    Role:"Teached students Math and english, as well as handling parent inquiries",
    Status:"Heart summer Employment Program"
},
{
    Job:"Independence City",
    Role:"Teached students MATH, ENGLISH, ETC",
    Status:"Work Experience",
},
{
    Job:"Pings Fabric",
    Role:"Customer service, assisted customers with making choices, and encouraging purchases",
    Status:"Heart Summer Employment Program",

},
{
    Job:"Edge Marketing",
    Role:"Sales Rep",
    Status:"Current area of employment (Part-time)"
}
]

  return (
    <div className="expe-homepage">
        <div className="video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="./video.mp4" type="video/mp4"/> 
            </video>
        </div>
        <h1>Experience</h1>
        <p>Through Heart I was able to get a large majority of the work experinece needed to handle myself in most fields.</p>
        <div className="Experience">
            {experience.map((stack, index) => (
          <div key={index} className="tech-stack">
            <h2>{stack.Job}</h2>
            <p>{stack.Role}</p>
            <h3>{stack.Status}</h3>
          </div>
        ))}
            
        </div>
    </div>
  );
}

export default Experience;