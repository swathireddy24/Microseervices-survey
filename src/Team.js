import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './path_to_image/image_new.jpg'; // Ensure this path is correct

const Team = () => {
  const teamMembers = [
    { name: "Lavanya Chand", role: "Development, Reporting and Delivery", mail_id: "lavanya.chand@slu.edu" },
    { name: "Vamshi Medishetti", role: "Coordinated Scientific Content", mail_id: "vamshikrishna.medishetti@slu.edu" },
    { name: "Jinka Meenakshi", role: "Coordinated Scientific Content", mail_id: "jinkameenakshi.fnu@slu.edu"},
    { name: "Swathi Reddy Sampath", role: "Development and Coordinated Scientific Content", mail_id: "swathireddy.sampath@slu.edu" },
    { name: "Sravan Kumar Neetikonda", role: "Development", mail_id: "sravankumar.neetikonda@slu.edu" },
    { name: "Supraja Mannava", role: "Development", mail_id: "supraja.mannava@slu.edu" }
  ];

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <style>
        {`
          header {
            background-color: transparent;
            color: black;
            padding: 10px 0;
            text-align: center;
            height: 100px;
          }

          nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            background: rgba(0, 0, 0, 0.5);
          }

          nav ul li {
            display: inline-block;
            margin: 0 10px;
          }

          nav ul li a {
            text-decoration: none;
            color: #fff;
            padding: 10px 15px;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          nav ul li a:hover,
          nav ul li a:focus {
            background-color: #1abc9c;
          }

          .team-members-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
            margin-top: 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .team-member {
            flex-basis: 30%;
            margin: 10px;
            background: white;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          main {
            max-width: 800px;
            margin: 40px auto;
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          #overview {
            font-size: 16px;
            color: #333;
            text-align: center;
          }

          .team-intro {
            text-align: center;
            margin: 20px;
            font-size: 20px;
            font-weight: bold;
          }
        `}
      </style>
      <header>
        <h1>Microservice and Nanoservice Solutions for the IoT-Edge-Cloud Continuum</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/team">Home</Link></li>
          <li><Link to="/survey">Survey</Link></li>
          
        </ul>
      </nav>
      <main>
        <section id="overview">
          <p>Welcome to our comprehensive survey on the latest advancements in microservices and nanoservices tailored for the IoT-Edge-Cloud continuum.</p>
        </section>
      </main>
      <main>
        <div className="team-intro">Meet our awesome team</div>
        <div className="team-members-container">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-member">
              <h3>{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Mail id:</strong> <a href={`mailto:${member.mail_id}`}>{member.mail_id}</a></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
