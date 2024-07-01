import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './path_to_image/image_new.jpg';

const Survey = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      id: "arch",
      name: "Architectural Innovations in IoT and Edge Computing",
      content: "Exploring frameworks that address the integration and management challenges in deploying IoT and Edge computing systems.",
      papers: [
        { title: "- A Reference Architecture for Cloud–Edge Meta-Operating Systems", link: "https://doi.org/10.3390/s22229003" },
        { title: "- Application and Research of IoT Architecture for End-Net-Cloud Edge Computing", link: "https://doi.org/10.3390/electronics12010001" },
        { title: "- A Contemporary Secure Microservices Discovery Architecture with Service Tags", link: "https://doi.org/10.21015/vtse.v12i1.1752" },
        { title: "- Microservices Management on Cloud/Edge Environments", link: "https://doi.org/10.1007/978-3-030-45989-5_8" }
      ],
      tags: ["IoT", "Edge Computing", "Frameworks"]
    },
    {
      id: "deploy",
      name: "Deployment and Dynamic Management of Microservices",
      content: "Discussing innovative strategies for dynamic deployment and efficient management of microservices across varied environments.",
      papers: [
        { title: "- Resource-Aware Dynamic Service Deployment for Local IoT Edge Computing", link: "https://doi.org/10.1109/ACCESS.2021.3102867" },
        { title: "- Adaptive Resource Efficient Microservice Deployment", link: "https://doi.org/10.1109/TPDS.2021.3128037" },
        { title: "- QoS-Aware and Resource Efficient Microservice Deployment", link: "https://doi.org/10.1109/IPDPS49936.2021.00102" },
        { title: "- A self-stabilizing and auto-provisioning orchestration for microservices", link: "https://doi.org/10.1016/j.comnet.2024.110279" }
      ],
      tags: ["Microservices", "Deployment", "Efficiency"]
    },
    {
      id: "security",
      name: "Security and Privacy in Edge Computing",
      content: "Addressing the increasing need for robust security solutions to protect data and maintain privacy within edge computing infrastructures.",
      papers: [
        { title: "- AI-Enabled Secure Microservices in Edge Computing", link: "https://doi.org/10.1109/TSC.2022.3155447" },
        { title: "- A Contemporary Secure Microservices Discovery Architecture", link: "https://doi.org/10.21015/vtse.v12i1.1752" },
        { title: "- An Extensible and Secure Architecture based on Microservices", link: "https://doi.org/10.1109/ICCE53296.2022.9730757" }
      ],
      tags: ["Security", "Privacy", "Robust Solutions"]
    },
    {
      id: "performance",
      name: "Performance Optimization and Scalability",
      content: "Focused on enhancing the performance and scalability of systems through novel microservice deployment techniques and optimizations.",
      papers: [
        { title: "- Adaptive Resource Efficient Microservice Deployment", link: "https://doi.org/10.1109/TPDS.2021.3128037" },
        { title: "- Performance Analysis of Data Storage and Management Models", link: "https://doi.org/10.1109/ASYU56188.2022.9925442" },
        { title: "- Edge Computing for Industrial IoT: Challenges and Solutions", link: "https://doi.org/10.1007/978-3-030-51473-0_12" },
        { title: "- A Deep Reinforcement Learning Approach for Scalable Microservices", link: "https://doi.org/10.1109/GLOBECOM54140.2023.10437143" }
      ],
      tags: ["Performance", "Scalability", "Optimization"]
    },
    {
      id: "serverless",
      name: "Serverless and Decentralized Architectures",
      content: "Exploring serverless and decentralized frameworks to enhance agility and reduce overhead in managing services across the edge-to-cloud continuum.",
      papers: [
        { title: "- Unleashing the power of decentralized serverless IoT dataflow architecture", link: "https://link.springer.com/article/10.1007/s12243-023-01009-x" },
        { title: "- Decentralized IoT Edge Nanoservice Architecture", link: "https://doi.org/10.1109/ACCESS.2019.2936714" },
        { title: "- Decentralized Serverless IoT Dataflow Architecture", link: "https://doi.org/10.1109/ICIN56760.2023.10073502" },
        { title: "- Serverless Workflow Management on the Computing Continuum", link: "https://doi.org/10.1145/3629527.3652901" }
      ],
      tags: ["Serverless", "Decentralized", "Frameworks"]
    }
  ];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredCategories = categories.filter(category => 
    selectedFilter === 'all' || category.tags.includes(selectedFilter)
  );

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <style>{`
        header {
          background-color: transparent; /* Transparent background to see the image */
          color: black; /* White text for better visibility */
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
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        }

        nav ul li {
          display: inline-block;
          margin: 0 10px;
        }

        nav ul li a {
          text-decoration: none;
          color: #ecf0f1;
          padding: 10px 15px;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        nav ul li a:hover,
        nav ul li a:focus {
          background-color: #1abc9c; /* Teal background on hover/focus */
        }

        main {
          max-width: 800px;
          margin: 40px auto;
          background: rgba(255, 255, 255, 0.9); /* Slightly transparent white background for content area */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .category-container {
          margin-top: 20px;
          padding: 20px;
          background-color: #f8f9fa; /* Light gray background */
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .category-container h3 {
          color: #34495e; /* Dark blue for headings */
          margin-bottom: 10px;
        }

        .category-container ul {
          list-style-type: none; /* No bullets */
          padding-left: 0; /* No padding on the left */
        }

        .category-container li {
          margin-bottom: 8px; /* Space between items */
        }

        .category-container a {
          color: #1abc9c; /* Teal color for links */
          text-decoration: none; /* No underline */
        }

        .category-container a:hover {
          text-decoration: underline; /* Underline on hover */
        }
         #overview {
            font-size: 16px;
            color: #333;
            text-align: center;
          }

      `}</style>
      <header>
        <h1>Survey on Microservice and Nanoservice Solutions for the IoT-Edge-Cloud Continuum</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/team">Home</Link></li>
          <li><Link to="/survey">Survey</Link></li>
        </ul>
      </nav>
      <main>
        <div className="filter-section">
          <label htmlFor="category-filter">Problem statements: </label>
          <select id="category-filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="IoT">
                  Architectural Innovations in IoT and Edge Computing
                </option>

                <option value="Microservices">
                  Deployment and Dynamic Management of Microservices
                </option>
                <option value="Security">
                  Security and Privacy in Edge Computing
                </option>
                <option value="Performance">
                  Performance Optimization and Scalability
                </option>
                <option value="Serverless">
                  Serverless and Decentralized Architectures
                </option>
           

          </select>
        </div>
        {filteredCategories.map(category => (
          <div key={category.id} className="category-container">
            <h2>{category.name}</h2>
            <p>{category.content}</p>
            <ul>
              {category.papers.map(paper => (
                <li key={paper.title}>
                  {paper.title} - <a href={paper.link}>Click Here</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Survey;
