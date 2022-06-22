import './projectsSection.css'

const ProjectsSection = () => {
  return (
  <div className="projects-cont">
    <h3 className="project-title">Mam Hanoi</h3>
    <div className="project 1">
      <div className="project-description">
        <p className="about-project">
          About:  This was my very first deployed project.  This project was for a restaurant that just opened so I knew they still had to work on the menu and I knew there were going to be several other bumps along the way for them so I knew I had to be patient.  Originally with the first version i was going to build and structure the menu myself, with the abitlity to click on food item images and have JavaScript open modal with a larger image to give customers a better look at the dishes they were interested in.  They liked it but in the end they went with a PDF style menu because it would be easier for them to main. 
        </p>
        <p className='likes'>
          Likes:  Well I as pretty stoked, it being my very first gig and all, I enjoyed the pressure of having to deliver. It suddenly felt different, when it actually became work and I had to put my skills to the test. 
        </p>
        <p className="difficulties">
          Difficulties:  The hardest part of the job was deployment. Figuring out how it all went together, what everything did (DNS, SSL), and troubleshooting/debugging when things weren't working how I inteded them to even though they worked on my computer.
        </p>
        <p className="dislikes">
        Dislikes:  What I didn't enjoy was that it took the client far too long to finalize a menu, leaving me in limbo for over a month. But it was a great lesson learned because from then on I try to keep clients on schedule. 
        </p>
        <p className="time">
        The Time:  It honeslty took about 25 hours to get to the finish line (Not including the wait time in between). Building it was not too difficult albeit I was still not that agile with CSS I admit. It was the fact that it was my first time having to deploy, but it was great because I learned a lot along the way about how the internet actually works.
        </p>
      </div>
      <img src="" alt="" className="project-image" />
    </div>

    <div className="project 2">

    </div>
    <div className="project 3">

    </div>
    <div className="project 4">

    </div>
  </div> 
  )
}

export default ProjectsSection
