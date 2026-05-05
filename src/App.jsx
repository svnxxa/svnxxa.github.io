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

function App() {
  const [screen, setScreen] = useState('home');
  const [showCat, setShowCat] = useState(false);
  const [catPos, setCatPos] = useState({ top: '80%', left: '80%' });

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
                href="https://www.linkedin.com/in/sungha-choi-4235212b8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-label="https://www.linkedin.com/in/sungha-choi-4235212b8/" 
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
            <h2 className="title">PROJECT REPOSITORY</h2>
            <div className="folder-container">
              {/* Box 1 */}
              <div className="pixel-folder" onClick={() => alert("Details for Project 1")}>
                <div className="folder-icon">📂</div>
                <p>Project 1</p>
              </div>

              {/* Box 2 */}
              <div className="pixel-folder" onClick={() => alert("Details for Project 2")}>
                <div className="folder-icon">📂</div>
                <p>Project 2</p>
              </div>
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
      setCatPos({ top: '90%', left: '2%' }); 
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