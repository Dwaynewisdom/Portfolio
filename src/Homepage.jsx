import './App.css'
function Homepage() {
  return (
    <div className="homepage">
      <div className="Welcome-text">
        <h1>Welcome</h1>
        <p>
          My name is Dwayne Wisdom a Computer and Business student, problem solver, and explorer of programming languages. I am passionate about the possibilities technology unlocks, especially the way code acts as a bridge between human logic and machine execution.
          My journey started in the 10th grade, when I realized that a simple program could automate a task or solve a real problem for someone else. That curiosity evolved into a serious pursuit in college, where mentors and coursework reignited my passion and guided me onto the path I continue to build today.
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