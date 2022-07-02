//images Mam Hanoi
import MamHanoi from '../assets/images/project-images/mamhanoi.png'


export const ProjectsAboutData = [
  {
    title: 'Mam Hanoi',
    about: ' This was my very first deployed project.  This project was for a restaurant that just opened so I knew they still had to work on the menu and I knew there were going to be several other bumps along the way for them so I knew I had to be patient.  Originally with the first version i was going to build and structure the menu myself, with the abitlity to click on food item images and have JavaScript open modal with a larger image to give customers a better look at the dishes they were interested in.  They liked it but in the end they went with a PDF style menu because it would be easier for them to main.',
    likes: ' Well I as pretty stoked, it being my very first gig and all, I enjoyed the pressure of having to deliver. It suddenly felt different, when it actually became work and I had to put my skills to the test.',
    difficulties: " The hardest part of the job was deployment. Figuring out how it all went together, what everything did (DNS, SSL), and troubleshooting/debugging when things weren't working how I inteded them to even though they worked on my computer.",
    dislikes: " What I didn't enjoy was that it took the client far too long to finalize a menu, leaving me in limbo for over a month. But it was a great lesson learned because from then on I try to keep clients on schedule.",
    time: " It honeslty took about 15 hours to get to the finish line (Not including the wait time in between). Building it was not too difficult albeit I was still not that agile with CSS I admit. It was the fact that it was my first time having to deploy, but it was great because I learned a lot along the way about how the internet works and how it all comes together.",
    link: "https://www.mamhanoi.com/",
    images: [
       require('../assets/images/project-images/mamhanoi.png'), 
       require('../assets/images/project-images/mamhanoi2.png'),
       require('../assets/images/project-images/mamhanoi3.png'),       
    ],
    graphData: [
      {name: 'HTML 48%', uv: 48, pv: 100, },
      {name: 'CSS 48%', uv: 48, pv: 100 },
      {name: 'JS 4%', uv: 2, pv: 100},
    ]
  }
]