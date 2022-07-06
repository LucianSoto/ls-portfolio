//images Mam Hanoi
import MamHanoi from '../assets/images/project-images/mamhanoi.png'


export const ProjectsAboutData = [
  {
    id: 1,
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
      { name: 'HTML 48%', uv: 48, pv: 100, },
      { name: 'CSS 48%', uv: 48, pv: 100 },
      { name: 'JS 4%', uv: 2, pv: 100 },
    ]
  },
  {  
    id: 2,
    title: 'House Marketplace',
    about: ' -A full-stack application using React, and Firebase. After making a simple verison of this using VanillaJS NodeJS and PostgreSQL last year I thought it was time to give it a shot with react and a cloud based database.',
    likes: " So far I'm enjoying making fullstack applications. Although I am a novince with backend related work, there's just something about getting everything to come together and work that gives such a sense of fulfillment. But for this project in particular I would say that it was interesting learning a database that does not use SQL which from what I'm seeing is easier to use because I didn't need to use Express or NodeJS to make any APIs or anything so it was very streamlined. Also learning how to render Route paths dynamically using React,  I just thought it was so cool, and honestly React itself - the more I learn the more I like it.",
    difficulties: " The things that gave me the toughest time here was the fact that Firebase doesn't do too well with error handling so it made it difficult when I got stuck at one point when I was trying to retrieve data.",
    dislikes: " I had made a typo and Cloud Firestore did not allow me to rename my collection no matter what I tried. I feel like that seems like a pretty basic function to have and it seems pretty impractical to lack.",
    time: " It's still a work in progress but so far I have put it about 30hrs. With plans to add the ability to see each individual post.  ",
    link: "https://lucianaiolos.github.io/House-Marketplace/",
    images: [
       require('../assets/images/project-images/house-marketplace-1.png'), 
       require('../assets/images/project-images/house-marketplace-2.png'),
       require('../assets/images/project-images/house-marketplace-3.png'),       
    ],
    graphData: [
      {name: 'HTML 48%', uv: 48, pv: 100, },
      {name: 'CSS 48%', uv: 48, pv: 100 },
      {name: 'JS 4%', uv: 2, pv: 100 },
    ]
  },
  {  
    id: 3,
    title: 'Pokedex',
    about: " Thanks to the Pokemon API I was able to build my own version of the Pokedex! I really tried to take my time and build something that would give some sort of a feel of what it would be to have owned one of these back in the 90's.",
    likes: " This project was fun overall it really hit the spot for nostalgia and I really enjoyed learning to use async calls with preventDefault() in order to keep the page from reloading thus keeping the music from stoping and just giving an over all good flow and usability.",
    difficulties: " Right now I am in the process of making it visible on mobile as well and it is proving to be quite the task because I put so many divs within divs.  Really puts things into perspective as to how the design and thought process of building apps goes and sheds light as to why I read about so many devs doing a mobile first approach. I might just have to re-write the HTML and use grid instead of flex-box for the items displayed inside the Pokedex's screen.",
    dislikes: " Not related with my code too much I believe but I used Soundcloud to get the old gameboy music soundtrack to play. Well it doesn't like to work everytime the page loads so that's a big bummer as I am not able to consistently give users the experience I intended.",
    time: " Took about 30hrs, with plans to add other functions such as having a button to play the sound that each pokemon makes and that's the fun with this project. There's room to come back to it later, improve it and still have fun.",
    link: "https://lucianaiolos.github.io/PokeDex-Luxian/",
    images: [
       require('../assets/images/project-images/pokedex.png'), 
       require('../assets/images/project-images/pokedex-2.png'),
       require('../assets/images/project-images/pokedex-3.png'),       
    ],
    graphData: [
      {name: 'HTML 48%', uv: 48, pv: 100, },
      {name: 'CSS 48%', uv: 48, pv: 100 },
      {name: 'JS 4%', uv: 2, pv: 100},
    ]
  },
]                       