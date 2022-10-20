
export const ProjectsAboutData = [
  {
    id: 1,
    title: 'Restaurant Website', 
    why: ' I was looking to put my skills to use and so I inquired with a someone about thier friend who was opening a new restaurant in the bay and asked if they wanted a website built for their business ',
    about: ' This was my very first deployed project.  This project was for a restaurant that just opened so I knew they still had to work on the menu and I knew there were going to be several other bumps along the way for them so I knew I had to be patient.  Originally with the first version I was going to build and structure the menu myself, with the abitlity to click on food item images and have JavaScript open modal with a larger image to give customers a better look at the dishes they were interested in.  They liked it but in the end they went with a PDF style menu because it would be easier for them to maintain.',
    likes: ' Well I as pretty stoked, it being my very first gig and all, I enjoyed the pressure of having to deliver. It suddenly felt different, when it actually became work and I had to put my skills to the test. The client left it all up to me so I definitely had some help with design suggestions but it was great seeing how even a small app goes from ideas to reality.',
    difficulties: " The hardest part of the job was deployment. Figuring out how it all went together, what everything did (DNS, SSL), and troubleshooting/debugging when things weren't working how I inteded them to even though they worked on my computer.",
    time: " It honeslty took about 15 hours to get to the finish line (Not including the wait time in between). Building it was not too difficult albeit I was still not that agile with CSS I admit. It was the fact that it was my first time having to deploy, but it was great because I learned a lot along the way about how the internet works and how it all comes together.",
    link: "https://www.mamhanoi.com/",
    repo: '',
    tools: [
      'HTML',
      'CSS',
      'JavaScript',

    ],
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
    why: " I have always had an interest in Real Estate and I've used apps such as Offer-Up or Craigslist and so I figured this would be a cool full-stack project to try! Also wanted to try a different type of database that was not SQL based.",
    about: ' A full-stack application using React, and Firebase. After making a simple verison of this using VanillaJS NodeJS and PostgreSQL last year I thought it was time to give it a shot with react and a cloud based database.',
    likes: " So far I'm enjoying making fullstack applications. Although I am a novince with backend related work, there's just something about getting everything to come together and work that gives such a sense of fulfillment. But for this project in particular I would say that it was interesting learning a database that does not use SQL which from what I'm seeing is easier to use because I didn't need to use Express or NodeJS to make any APIs or anything so it was very streamlined. Also learning how to render Route paths dynamically using React,  I just thought it was so cool, and honestly React itself - the more I learn the more I like it.",
    difficulties: " The things that gave me the toughest time here was the fact that Firebase doesn't do too well with error handling so it made it difficult when I got stuck at one point when I was trying to retrieve data.",
    time: " It's still a work in progress but so far I have put it about 30hrs. With plans to add the ability to see each individual post.  ",
    link: "https://lucianaiolos.github.io/House-Marketplace/",
    repo: "https://github.com/LucianAiolos/House-Marketplace",
    tools: [
      'ReactJS',
      'Firebase',
      'Toastify',
      'OAuth',
      'React-Router-DOM'
    ],
    images: [
       require('../assets/images/project-images/house-marketplace-1.png'), 
       require('../assets/images/project-images/house-marketplace-2.png'),
       require('../assets/images/project-images/house-marketplace-3.png'),       
    ],
    graphData: [
      {name: 'HTML 5%', uv: 5, pv: 100, },
      {name: 'CSS 39%', uv: 39, pv: 100 },
      {name: 'JS 56%', uv: 56, pv: 100 },
    ]
  },
  {  
    id: 3,
    title: 'Pokedex',
    why: " After looking for a fun API to use for a project I came across this and call me a geek but I could not resist. I wanted to challenge myself by building it myself without the help of any tutorials and tried to do the least google searches possible.",
    about: " Thanks to the Pokemon API I was able to build my own version of the Pokedex! I really tried to take my time and build something that would give some sort of a feel of what it would be to have owned one of these back in the 90's.",
    likes: " This project was fun overall it really hit the spot for nostalgia and I really enjoyed learning to use async calls with preventDefault() in order to keep the page from reloading thus keeping the music from stoping and just giving an over all good flow and usability.",
    difficulties: " Right now I am in the process of making it visible on mobile as well and it is proving to be quite the task because I put so many divs within divs.  Really puts things into perspective as to how the design and thought process of building apps goes and sheds light as to why I read about so many devs doing a mobile first approach. I might just have to re-write the HTML and use grid instead of flex-box for the items displayed inside the Pokedex's screen. For the mobile update I think I will to go with CSS grid to address the above issues.",
    time: " Took about 30hrs, with plans to add other functions such as having a button to play the sound that each pokemon makes and that's the fun with this project. There's room to come back to it later, improve it and still have fun.",
    link: "https://lucianaiolos.github.io/PokeDex-Luxian/",
    repo: "https://github.com/LucianAiolos/PokeDex-Luxian",
    tools: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    images: [
       require('../assets/images/project-images/pokedex.png'), 
       require('../assets/images/project-images/pokedex-2.png'),
       require('../assets/images/project-images/pokedex-3.png'),       
    ],
    graphData: [
      {name: 'HTML 30%', uv: 30, pv: 100, },
      {name: 'CSS 39%', uv: 39, pv: 100 },
      {name: 'JS 31%', uv: 31, pv: 100},
    ]
  },
  {  
    id: 4,
    title: 'Festival Website',
    why: ' When I first visited the site I copied (it was visually very pleasing to me) I remember thinking "Wait, I think I can make that!" and I took on the challenge.',
    about: " A music festival mock-up webiste so essentially bringing together several things that I enjoy. Coding, Music, Visuals. This was the first project I did to test myself and I include it because it tells part of my coding journey since this was the project that I felt sparked the flame in my coding journey!",
    likes: " This was definitely a fun one, I finally got to build something where I got the feeling like I got to express myself(visually) and I that definitely helped determine my Front End path because I am a very visual person. I also ejoyed playing with gradients, fonts, styling and the lay out.",
    difficulties: " When I said test myself I meant test my CSS skills because oh man. I had a really tough time getting things where I wanted them or getting things to do the things I wanted them to do or getting a PNG file's transparency to work for some reason. BUT, it taught me a lot and helped me understand what I needed to work on such as flex-box.",
    time: " Took about 45 hrs getting everything to dislay the way I intended and I'm not emberrassed about the number of hours it took because I know that number would be much much lower these days.",
    link: "https://lucianaiolos.github.io/Music-Festival-X/",
    repo: "https://github.com/LucianAiolos/Music-Festival-X",
    tools: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    images: [
       require('../assets/images/project-images/jungle.png'), 
       require('../assets/images/project-images/jungle-2.png'),
       require('../assets/images/project-images/jungle-3.png'),       
    ],
    graphData: [
      { name: 'HTML 34%', uv: 34, pv: 100 },
      { name: 'CSS 57%', uv: 57, pv: 100 },
      { name: 'JS 9.5%', uv: 9.5, pv: 100 },
    ]
  },
  {  
    id: 5,
    title: 'Feedback App',
    why: " This was build so I could learn Context but also given the current design trends of rounded corners and rounded buttons and as I learn more about the design aspect of websites I am giving myself challenges to make things that are welcoming and appealing for users. ",
    about: ' An app to collect customer feedback where data is stored in a mock back-end using JSON-server, a github repo to data and Tipycode to connect to the "server" and retrieve data.',
    likes: " I enjoyed learning learning about Context and it's state management and how it's more suitable for smaller applications.",
    difficulties: " I was not aware that UseEffect now renders twice on load and I was stumped there for a minute but in the end it was good because it taught me how to deal with that update and I was able to catch the issue the next time it came up!",
    time: " Took 12 hours give or take. It's getting a lot easier to figure out how CSS flex-box works and how state and props are handled!",
    link: "https://lucianaiolos.github.io/Feedback-App/",
    repo: "https://github.com/LucianAiolos/Feedback-App",
    tools: [
      "ReactJS",
      "JSON-Server",
      "Context",
    ],
    images: [
       require('../assets/images/project-images/feedback.png'), 
       require('../assets/images/project-images/feedback-2.png'),
       require('../assets/images/project-images/feedback-3.png'),       
    ],
    graphData: [
      { name: 'HTML 34%', uv: 34, pv: 100 },
      { name: 'CSS 57%', uv: 57, pv: 100 },
      { name: 'JS 9.5%', uv: 9.5, pv: 100 },
    ]
  },
]                       
