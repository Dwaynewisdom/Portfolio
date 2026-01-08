import './App.css'
function Homepage() {
  return (
    <div className="homepage">
      <div className="Welcome-text">
        <h1>Welcome</h1>
        <p>
          I'm Dwayne Wisdom, computer and business student and explorer of various programming languages. I'm passionate about understanding and fully exploring the capabilities of various languages and the bridge they create between human and machine communication.
          My interest for programming originally sparked in the 10th grade where the possibility to automate and build programs to benefit not only me but others fueled me to begin study, I would however put on the big boy shoes much later in college, where my teachers reignited the passion leading me on the path I am now.
        </p>
      </div>
      <div className="logo-container">
        <img 
          src="https://raw.githubusercontent.com/Dwaynewisdom/Portfolio-New/2acb8efbd5f9fb3eed5a967009afd90fd397b658/Logo.png" className="img1" alt="React logo"
        />
    
      </div>
    </div>
  );
}
export default Homepage;