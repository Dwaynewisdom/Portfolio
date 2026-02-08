import './../css/Footer.css'
function Footer() {
  return (
    <div className="Footer">
        <h1>Contact</h1>
        <div className='links'>
            <a href="mailto:dwaynewisdom5@gmail.com" target="_blank">
                <img src="./email.png" className="img4" alt="Email Icon" />
            </a>
            <a href="https://github.com/Dwaynewisdom" target="_blank" rel="noreferrer">
                <img src="./github.png" className="img4" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/dwayne-wisdom-32599728b/" target="_blank">
                <img src="./linkeldn.png" className="img4" alt="Linkeldn" />
            </a>
            <a href="https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@6888043a34c4b971c1a740e74d6e03cf9fbc1826/Dwayne%20Resume(2).pdf" tartget="_blank">
                <img src="./resume.png" className="img4" alt="Resume"/>
            </a>
        </div>
    </div>
  )};
export default Footer;