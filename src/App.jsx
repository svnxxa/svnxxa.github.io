import { useState, useEffect } from 'react'
import './App.css'
// Replace these filenames with your actual filenames
import myAvatar from './assets/me.png' 
import catIcon from './assets/cat.png' 
import catPic from './assets/cat_pic.png'
import emailIcon from './assets/email_icon.png'
import githubIcon from './assets/github_icon_bg.png'
import linkedinIcon from './assets/linkedin_icon_bg.png'
import resumeIcon from './assets/resume_icon.png'

const projectsData = [
  {
    id: "LTR",
    title: "Learning Technology Rover",
    category: "Experience",
    date: "Sep 2026 - Present",
    desc: "To be added",
    tech: [""],
    link: "#"
  },
  {
    id: "idea-lab",
    title: "IDEA Lab Research Assistant",
    category: "Research",
    date: "May 2025 - Present",
    desc: "Supporting interdisciplinary aging research at UBC. Analyzing sensor data from therapeutic cycling and qualitative data for social robot engagement.",
    tech: ["Biostatistics", "Qualitative Analysis", "Social Robots"],
    link: "#"
  },
   {
    id: "portfolio",
    title: "Arcade Portfolio Website",
    category: "Software",
    date: "Apr 2026 - Present",
    desc: "The site you are seeing now! Designed a pixel-art interface with state-driven UI, custom CSS animations, and randomized easter eggs.",
    tech: ["React", "Vite", "CSS3", "JavaScript"],
    link: "https://github.com/svnxxa/svnxxa.github.io"
  },
  {
    id: "airbnb",
    title: "NYC Airbnb Popularity Prediction",
    category: "Data Science",
    date: "Sep - Dec 2025",
    desc: "Built a Gradient Boosting ML model to forecast listing popularity for 48,000+ listings. Achieved 1.412 RMSE, outperforming linear baselines.",
    tech: ["Python", "Scikit-Learn", "GridSearchCV", "Seaborn"],
    link: "https://github.com/svnxxa/cpsc330-hw5" 
  },
  {
    id: "furminder",
    title: "Fur-minder (HackCamp Hackathon)",
    category: "Software",
    date: "Nov 2024",
    desc: "Designed an 11.5-hour hackathon project focused on mental health. Led the Figma design process and collaborated with Unity developers to create a task-based pet simulator.",
    tech: ["Figma", "Unity", "C#", "UI/UX"],
    link: "https://devpost.com/software/fur-minder?_gl=1*ktmvoe*_gcl_au*MTgxNTE4NTg4Ni4xNzc4MDI4NTc0*_ga*NDY5NzA2NjYzLjE3NzgwMjg1NzU.*_ga_0YHJK3Y10M*czE3NzgwMjg1NzQkbzEkZzEkdDE3NzgwMjg3MjgkajQ2JGwwJGgw"
  },
  {
    id: "flexfield",
    title: "FlexField Fitness (Bolt Datathon)",
    category: "Data Science",
    date: "Oct 2024",
    desc: "Analyzed partnership viability using OLS regression. Provided statistical evidence to optimize product offerings and mitigate brand loyalty risks for a fitness brand.",
    tech: ["Python", "Statsmodels", "Regression", "Pandas"],
    link: "https://github.com/svnxxa/BOLT-First-Byte-Datathon"
  },
  {
    id: "friender",
    title: "Friender Project (ASA DataFest)",
    category: "Data Science",
    date: "Mar 2024",
    desc: "🏆 Awarded 'Most Creative'. Conducted deep-dive EDA in R to solve student engagement issues and proposed a platform-wide inbox feature to improve academic outcomes.",
    tech: ["R", "Jupyter", "EDA", "UX Research"],
    link: "https://github.com/svnxxa/DataFest-2024"
  },  
  {
    id: "lasso",
    title: "Song Streaming Predictive Analysis",
    category: "Data Science",
    date: "Aug 2024",
    desc: "Applied Lasso regression to identify song attributes influencing stream counts. Automated data retrieval via Kaggle API.",
    tech: ["Python", "Lasso Regression", "Kaggle API", "Pandas"],
    link: "https://github.com/svnxxa/music-streamed-analysis"
  },
  {
    id: "bakery",
    title: "Java Bakery Ordering System",
    category: "Software",
    date: "Jul - Aug 2024",
    desc: "Designed a Java-based ordering system with a focus on Object-Oriented Design and TDD. Achieved 100% code coverage using JUnit and implemented data persistence with JSON.",
    tech: ["Java", "Swing", "JUnit", "JSON"],
    link: "https://github.com/svnxxa/cpsc210-bakery-system"
  },
  {
  id: "stats-society",
  title: "Undergraduate Statistics Society",
  category: "Experience",
  date: "Jul 2025 - Present",
  desc: "Internal Director. Planning academic events, teaching statistical concepts in workshops, and managing student outreach.",
  tech: ["Leadership", "Teaching", "Event Planning"],
  link: "#" 
},
{
  id: "hmart",
  title: "Sales Associate / Cashier - H Mart",
  category: "Experience",
  date: "Jun 2025 - Present",
  desc: "Managing high-volume transactions and inventory in a fast-paced environment. Delivering professional customer service.",
  tech: ["Customer Service", "Inventory Management", "Time Management"],
  link: "#" 
}
];

function App() {
  const [screen, setScreen] = useState('home');
  const [showCat, setShowCat] = useState(false);
  const [catPos, setCatPos] = useState({ top: '80%', left: '80%' });
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  // EASTER EGG LOGIC: Spawns the cat at a random spot
  useEffect(() => {
    // Don't spawn a new cat if one is already showing
    if (showCat) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.8) { // 20% chance
        const randomTop = Math.floor(Math.random() * 60 + 20) + '%';
        const randomLeft = Math.floor(Math.random() * 60 + 20) + '%';
        setCatPos({ top: randomTop, left: randomLeft });
        setShowCat(true);
      }
    }, 15000); // Checks every 15 seconds
    return () => clearInterval(interval);
  }, [showCat]); // Reset the interval when showCat changes

  return (
    <div className="app-container">
      {/* 1. TOP NAVIGATION (Hidden on the secret cat page) */}
      {screen !== 'secret-cat' && (
        <nav className="navbar">
          <button onClick={() => setScreen('home')}>HOME</button>
          <button onClick={() => setScreen('bio')}>BIO</button>
          <button onClick={() => setScreen('projects')}>PROJECTS</button>
        </nav>
      )}

      <main className="viewport">
        
        {/* --- HOME --- */}
        {screen === 'home' && (
          <div className="home-screen">
            <div className="hero-area">
              <img src={myAvatar} className="sprite-me" alt="Sungha" />
              <div className="pixel-bubble">
                <p>Hello! My name is Sungha.</p>
                <p>Welcome to my portfolio!</p>
              </div>
            </div>
            <div style={{ height: '30px' }}></div> {/* Spacer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <button className="start-btn" onClick={() => setScreen('bio')}>
                LEARN MORE
              </button>
              <button className="start-btn" onClick={() => setScreen('projects')}>
                VIEW ARCHIVE
              </button>
            </div>
            <div style={{ height: '30px' }}></div> {/* Spacer */}
            <div style={{ display: 'flex',gap: '10px'}} className="social-dock">
              <a 
                href="mailto:schoi26@student.ubc.ca" 
                data-label="schoi26@student.ubc.ca" 
                className="contact-link"
              >
                <img src={emailIcon} alt="Email" className="contact-icon" />
              </a>
              
              <a 
                href="https://github.com/svnxxa" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-label="github.com/svnxxa" 
                className="contact-link"
              >
                <img src={githubIcon} alt="GitHub" className="contact-icon" />
              </a>

              <a 
                href="https://www.linkedin.com/in/sungha-choi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-label="https://www.linkedin.com/in/sungha-choi/" 
                className="contact-link"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              </a>

              <a 
                href="/Sungha_Choi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-label="View Resume" 
                className="contact-link"
              >
                <img src={resumeIcon} alt="Resume" className="contact-icon" />
              </a>
            </div>
          </div>
        )}

        {/* --- BIO --- */}
        {screen === 'bio' && (
          <div className="window">
            <h2 className="title">ABOUT ME</h2>
            <div className="content" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <p style={{ fontSize: '20px', margin: 0 }}>
                I’m a fourth-year Statistics student at UBC with a minor in Data Science. 
                I enjoy working with data, from cleaning and exploration to building models 
                and visualizing insights that help answer real-world questions.
              </p>

              <p style={{ fontSize: '20px', margin: 0 }}>
                Through projects in predictive and inferential analysis, I’ve developed 
                experience with Python and R, and learned how to approach problems 
                critically when results aren’t always straightforward.
              </p>

              <p style={{ fontSize: '20px', margin: 0 }}>
                Beyond technical work, I value clear communication and collaboration, 
                which I developed through customer-facing roles and team projects. 
                I’m currently interested in opportunities in data analytics and applied data science.
              </p>
              
            </div>
          </div>
        )}

        {/* --- SCREEN: PROJECTS --- */}
        {screen === 'projects' && (
          <div className="project-page">
            <h2 className="title">PROJECT ARCHIVE</h2>
            
            {/* FILTER TABS */}
            <div className="filter-system">
              {['All', 'Data Science', 'Software', 'Research', 'Experience'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => {setFilter(cat); setOpenProject(null);}}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* ACCORDION LIST */}
            <div className="accordion-container">
              {projectsData
                .filter(p => filter === 'All' || p.category === filter)
                .map(project => (
                  <div key={project.id} className={`project-card ${openProject === project.id ? 'open' : ''}`}>
                    <div 
                      className="project-header" 
                      onClick={() => setOpenProject(openProject === project.id ? null : project.id)}
                    >
                      <span className="project-id-tag">[{project.category.substring(0,2).toUpperCase()}]</span>
                      <span className="project-title-text">{project.title}</span>
                      <span className="project-arrow">{openProject === project.id ? '▲' : '▼'}</span>
                    </div>
                    
                    {openProject === project.id && (
                      <div className="project-body">
                        <p className="project-date">{project.date}</p>
                        <p className="project-desc">{project.desc}</p>
                        <div className="tech-tags">
                          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                        {project.link && project.link !== "#" && (
                          <a href={project.link} target="_blank" rel="noreferrer" className="repo-link">
                            GO TO REPOSITORY →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* --- SECRET CAT PAGE --- */}
      {screen === 'secret-cat' && (
        <div className="secret-screen">
          <h2 className="title">SECRET CAT FOUND!</h2>
          <img src={catPic} className="sprite-cat-big" alt="Secret Cat" />
          <div className="window">
            <p style={{ fontSize: '22px' }}>This is my cat's profile.<br></br>
            Name: Chunsam <br></br>
            Favorite Food: Code Bytes <br></br>
            Favorite Activity:  Sleeping on my keyboard</p>
          </div>
          <button className="start-btn" onClick={() => setScreen('home')}>BACK TO WORLD</button>
        </div>
      )}

{/* RANDOM CAT POPUP: Only show if showCat is true AND we aren't on the secret page */}
{showCat && screen !== 'secret-cat' && (
  <div 
    className="cat-trigger" 
    style={{ top: catPos.top, left: catPos.left }}
    onClick={() => {
      setScreen('secret-cat');
      // Option A: Hide completely
      // setShowCat(false); 

      // Option B: Move him to a corner:
      setCatPos({ top: '92%', left: '4%' }); 
    }}
  >
    <img src={catIcon} alt="Secret Cat" />
    <div className="click-me">CLICK!</div>
  </div>
)}
    </div>
  )
}

export default App