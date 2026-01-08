import "./App.css"


function Card({ title, description, imageSrc, link }) {
  return (
    <div className="card">
        <a href={link} target="_blank" rel="noreferrer">
            <img src={imageSrc} className="img3" alt={title} />
        </a>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

function Mywork() {
  return (
    <div className="card-containers">
      <div className="Welcome-text">
        <h1 className="mywork">My Work</h1>
        <br></br>
        <p>Here are some of the projects I've worked on recently:</p>
      </div>
      <div className="card-list">
        <Card 
          title="Performance Switcher"
          description="An application that allows users to switch between performance and battery mode."
          imageSrc="https://cdn.statically.io/gh/Dwaynewisdom/Portfolio-New/2ac260fb667deb06569c16251ba68927083094e1/Screenshot%25202026-01-07%2520110519.png"
          link="https://github.com/Dwaynewisdom/Performance-Switcher"
        />
        <Card
            title="PDF Editor"
            description="Allows users to turn any document into a PDF, Remove backgrounds or edit the text on an existing PDF file"
            imageSrc="https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@b2526041a72ceff7cd947f3bbda7b85515ff3787/Screenshot%202026-01-07%20134109.png"
            link="https://github.com/Dwaynewisdom/PDF-Editor" 
        />
        <Card
            title="Inventory Management"
            description="Made for a school assignment this allows you to connect an app to a custom website connecting you to customers and allowing them to order items"
            imageSrc="https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@ad39c3559f26ae9ff78e1434bd1e975359193919/Screenshot%202026-01-07%20175904.png"
            link="https://github.com/Dwaynewisdom/Inventory-Assignemt" 
        />
        <Card
            title="Website"
            description="Connects to the app allowing users to view products and make orders"
            imageSrc="https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@60a068a4f062e527076f911fda1f1b04795e8a11/Screenshot%202026-01-07%20at%2018-18-25%20Inventory%20Management.png"
            link="https://dwaynewisdom.github.io/Inventory-Assignemt/" 
        />
      </div>
    </div>
  );
}

export default Mywork;