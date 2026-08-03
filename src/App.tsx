import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="container py-2 text-center">
          <h1 className="display-1">Andrew Joye</h1>
        </div>
      </header>
      <nav className="site-nav">
        <a href="#about">About</a>
        {' | '}
        <a href="#projects">Projects</a>
        {' | '}
        <a href="#contrib">Contributions</a>
        {' | '}
        <a href="https://www.linkedin.com/in/andrewjoye/" target="_blank">LinkedIn</a>
        {' | '}
        <a href="https://github.com/apjoye" target="_blank">GitHub</a>
        {' | '}
        <a href="mailto:andrewpauljoye@gmail.com">Contact</a>
      </nav>
      <div className="container py-2">
        <div className="row">
          <div className="col" id="about">
            <h2>About</h2>
            <p>I'm a software engineer and researcher with more than a decade of experience designing and building collaborative, user-centered technologies across academic and applied research environments. My work has included developing interactive platforms, real-time systems, search and discovery tools, and community-oriented applications that support communication, learning, and engagement. Throughout my career, I've led technical projects, mentored developers, and worked closely with interdisciplinary teams to translate complex ideas and community needs into practical, meaningful solutions. I'm especially interested in how technology can foster collaboration, strengthen communities, and improve access to knowledge and resources.</p>
            <br />
            <p>My interests extend beyond software development into games, digital culture, and the social impact of technology. My graduate research explored mentorship, access, and support systems through participatory design, while other work has focused on representation in games, online communities, and the ways people form connections through shared experiences. Whether building software, contributing to discussions about games and culture, or participating in community-driven initiatives, I'm motivated by creating experiences that help people connect, learn, and engage with one another in more meaningful ways.</p>
          </div>

          <div className="col" id="projects">
            <h2>Projects</h2>
            <h3>Tank Heaven Game</h3>
            <ul className="list">
              <li><a href="https://tank-heaven.vercel.app/" target="_blank">Play Now!</a></li>
            </ul>
            <h3>City Settlers Game Logic</h3>
            <ul className="list">
              <li><a href="https://my.machinations.io/d/city-settlers-single-city/08635a56536efe24b76895df9fe18ac6a" target="_blank">Machinations.io</a></li>
            </ul>
            <h3>Civility App</h3>
            <ul className="list">
              <li><a href="https://www.figma.com/file/4xB6Nx63kDVqpoFuBjsIHL/Civility-App" target="_blank">Hi-Fidelity Prototype</a></li>
              <li><a href="https://youtu.be/PSTQG1DPaUw" target="_blank">Walkthrough Video</a></li>
            </ul>
            <h3>Pandemic Chill Digital Library</h3>
            <ul className="list">
              <li><a href="https://lis5472.cci.fsu.edu/sp22/group3/" target="_blank">Omeka Library</a></li>
            </ul>
          </div>

          <div className="col" id="contrib">
            <h2>Contributions</h2>
            <ul className="list">
              <li><a href="https://www.pixelplaygrounds.org/" target="_blank">Pixelplaygrounds Lab</a></li>
              <li><a href="https://enslaved.org/" target="_blank">Enslaved Project</a></li>
              <li><a href="https://amp.matrix.msu.edu/" target="_blank">Archive of Malian Photography</a></li>
              <li><a href="https://publicphilosophyjournal.org/" target="_blank">Public Philosophy Journal</a></li>
              <li><a href="https://github.com/matrix-msu/kora/" target="_blank">KORA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <footer>
        <div className="container py-2 text-center">
          <div className="row">
            <div className="col">
              <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style={{borderWidth: 0}} src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
