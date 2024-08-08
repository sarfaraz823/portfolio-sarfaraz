import './App.css'

function App() {    
  return (
    <>
      <header className="header">
          <a href="" className="logo">Sarfaraz.</a>
          <div className="bx bx-menu" id="menu-icon"></div>
          <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
      </header>
     
      {/* home section design */}
      <section className="home" id="home">
          <div className="home-content">
            <h1>Hi, I'm <span>Sarfaraz Alam</span></h1>
            <div className="text-animate">
              <h3>Java Full Stack Dev</h3>
            </div>
            <p> “ I have hands-on experience with core Java, including Java SE and Java EE.
               My technical toolkit includes frameworks like Spring Boot and React for building
                robust applications and Hibernate for ORM. I am proficient in using version control 
                systems like Git and have experience working with relational databases such as MySQL.
           ”</p>
            <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
          </div>
          </div>
          <div className="home-sci">
              <a href="https://www.facebook.com/profile.php?id=100005912503488&mibextid=ZbWKwL"><i class='bx bxl-facebook'></i></a>
              <a href="https://x.com/Sarfara92469154?t=mOwL94w4R2fp4ptMnt-buQ&s=08"><i class='bx bxl-twitter' ></i></a>
              <a href="https://linkedin.com/in/sarfaraz-alam-3a435a212"><i class='bx bxl-linkedin'></i></a>
          </div>

          <div className="home-imgHover">

          </div>

      </section>

      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-img">
          <img src="./images/aboutpic.jpg" alt="photo" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h3>Java Full Stack Developer</h3>
          <p>Enthusiastic Java developer with one year of hands-on experience in building and 
            maintaining Java applications. Proficient in core Java, Spring Boot, and Hibernate, 
            with a solid understanding of object-oriented programming, database management, and 
            version control (Git). Experienced in developing RESTful APIs and optimizing application
             performance. Adept at collaborating with cross-functional teams and eager to leverage skills 
             in dynamic and challenging projects.
             Committed to continuous learning and professional growth in software development.</p>
         <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
         </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>

            <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2020-2022</div>
                    <h3>MCA - Sir.M.Visvesvaraya Institute of Technology, Bangalore</h3>
                    <p>
                    I completed my Master of Computer Applications (MCA) at Sir M Visvesvaraya Institute of Technology in 2022, graduating with an impressive 81%. The program provided a robust education in software development, data management, and advanced computing concepts. </p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2015-2018</div>
                    <h3>Graduation - Vinoba Bhave University , Hazaribagh</h3>
                    <p>I earned a Bachelor of Arts from Vinoba Bhave University, where I received a broad-based education with a focus on critical thinking and analytical skills.</p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2013-2015</div>
                    <h3>Intermadiate - Bokaro Ispat Senior Secondary School, CBSE</h3>
                    <p>I completed my Intermediate education under the CBSE curriculum, which provided a strong foundation in core subjects and prepared me for higher education.</p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2012-2013</div>
                    <h3>Matriculation - Bokaro Ispat Vidyalaya 2D, CBSE.</h3>
                   <p>I completed my matriculation from the CBSE board with a 70% score. This achievement reflects a solid understanding of core subjects and a strong academic foundation, setting the stage for further education and skill development.</p>
                  </div>
                </div>


            </div>
          </div>


          <div className="education-column">
            <h3 className="title">Experience</h3>

            <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2022-2023</div>
                    <h3>Java Developer - Inductive Quotient Analytics Pvt Ltd , Hyderabad</h3>
                    <p>As a Java developer with one year of experience, my role involves developing and maintaining Java applications, creating RESTful APIs, debugging code, and implementing new features based on requirements. I also collaborate with team members to ensure the software meets quality standards and addresses user needs effectively.</p>
                  </div>
                </div>

                <div className="education-content">
                  <div className="content">
                    <div className="year"><i class='bx bxs-calendar'></i>2021-2022</div>
                    <h3>Internship - Global Quest Technology , Bangalore.</h3>
                    <p>The company’s expertise in technology solutions allowed me to gain hands-on experience in both front-end and back-end development, working with Java, Spring Boot, and various front-end technologies.</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skill section design */}

      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h1 className="title">Coding Skills</h1>
            <div className="skills-box">
              <div className="skills-content">
                  <div className="progress">
                    <h3>Java <span>89%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>Spring Boot <span>86%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>Hibernate <span>81%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>Microservices<span>77%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>MySql<span>80%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h1 className="title">Web Technologies</h1>
            <div className="skills-box">
              <div className="skills-content">
                  <div className="progress">
                    <h3>React <span>75%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>JavaScript <span>70%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>CSS <span>85%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>

                  <div className="progress">
                    <h3>HTML <span>90%</span></h3>
                    <div className="bar"><span></span></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section desing */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <div className="email-contact">
        <a href="#" className="email"><i class='bx bxl-gmail'></i>alamsarfaraz823@gmail.com</a>
        <a href="#" className="contact-number"><i class='bx bxs-phone-call' ></i>8709012090</a>
        </div>
      </section>

      {/* footer desing */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Sarfaraz Alam  |  All Right Reserved.</p>
        </div>
        <div className="footer-iconTop">
            <a href="#"><i class='bx bx-up-arrow-alt' ></i></a>
          </div>
      </footer>

    </>
  )
}

export default App
