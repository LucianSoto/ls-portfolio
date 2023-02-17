
export const ProjectsAboutData = [
  // ID's need to correspond with project tile id's.
  {
    id: 0,
    title: 'Coding Community', 
    why: '  This was my final project for Skillspire Fullstack Bootcamp we were to make MERN Stack apps using what we learned thorughout the course. ',
    about: ` Full Stack application where I pushed myself to go above and beyond. Aside from the requirements given for the project I also decided I wanted to learn a bit of NodeJS authentication which was quite different from firebase, went in depth with Reduxthunk and used some of the things I leanred from external sources. First I set up the server, routes, models, controllers and middleware to handle CRUD operations for authentication, post creation/delete/read/updates and I used JWTs through middleware and saved the tokens to local storage. On the front end I displayed all the data and had routes for users to longin/sign-up as well as the ability to search users and display their profiles. Reduxthunk helped to asynchronously fetch and store data as state from my API. Also included the ability for users to unload images for their individual posts which was done by storing the images to firebase which returns the image urls which can then be used to display them on each post. `,
    likes: ' I enjoyed this project along with the bootcamp because it gave me deadlines and goals, therefore pushing me and then showing that I am capable and got me excited for my future as a developer.',
    difficulties: " I did a lot of research on authorization before deciding what to do, so deciding what to go with was the most difficult thing",
    time: " Took around 30 hrs, I pushed my self to see how fast I could make it in 3 days. ",
    link: "",
    repo: 'https://github.com/LucianAiolos/coding-community-2',
    tools: [
      'MongoDB',
      'ExpressJS',
      'ReactJS',
      'NodeJS',
      'Firebase',
      'Reduxthunk',
      'JWT',
    ],
    images: [ 
       require('../assets/images/project-images/cc-tile.png'),
       require('../assets/images/project-images/cc-1.png'),
       require('../assets/images/project-images/cc-2.png'),
       require('../assets/images/project-images/cc-3.png'),
       require('../assets/images/project-images/cc-4.png'),    
       require('../assets/images/project-images/cc-5.png'),
       require('../assets/images/project-images/cc-6.png'),
       require('../assets/images/project-images/cc-7.png'),
    ],
    graphData: [
      { name: 'HTML 48%', uv: 48, pv: 100, },
      { name: 'CSS 48%', uv: 48, pv: 100 },
      { name: 'JS 4%', uv: 2, pv: 100 },
    ]
  },
  {  
    id: 1,
    title: 'House Marketplace',
    why: " I have always had an interest in Real Estate and apps like Zillow and Offer-Up so I figured this would be a good project to do!. ",
    about: ' A full-stack application using React, and Firebase by Brad Traversy my one of my favorite teachers out there! After making a simple verison of this using VanillaJS NodeJS and PostgreSQL last year I thought it was time to give it a shot with react and a cloud based database. Here users can browse homes for sale or rent and create accounts from where they can post their own properties for sale along with images, also uses Google Authentication.',
    likes: " So far I'm enjoying making fullstack applications. Although I am a novince with backend related work, there's just something about getting everything to come together and work that gives such a sense of fulfillment. But for this project in particular I would say that it was interesting learning a database that does not use SQL which from what I'm seeing is easier to use because I didn't need to use Express or NodeJS to make any APIs so it was very streamlined. Also learning how to render Route paths dynamically using React, I just thought it was so cool, and honestly React itself - the more I learn the more I love it.  A couple other things I really liked were learning to use leaflet and google geolocation.",
    difficulties: " The things that gave me the toughest time here was the fact that Firebase doesn't do too well with error handling so it made it difficult when I got stuck a couple times when I was trying to retrieve data but I learned about how users have to be authenticated first.",
    time: " I took a fair amount of time (over 80hrs) with this tutorial since I really wanted to learn Firebase. And now I have started using the things I learned from it in other projects. ",
    link: "https://lucianaiolos.github.io/House-Marketplace/",
    repo: "https://github.com/LucianAiolos/House-Marketplace",
    tools: [
      'ReactJS',
      'Firebase',
      'OAuth',
      'Leaflet',
      'Toastify',
      'Google Geolocation'
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
    id: 2,
    title: 'Crypto Market', 
    why: ' This project came to mind after using the Crypto.com app so after some research and finding a suitable api that would allow to me access all the data I required I got to the drawing board.',
    about: ` A mobile web app that obtains crypto market information throught the CoinCap API. Each coin has it's individual icon and graph data displayed. Users are also able to save their favorites(local-storage) for quick reference in future uses.`,
    likes: ' I liked how I got the UI close to the Crypto.com version. I am finally seeing the fruits of my labor as it is getting much easier and faster to create more appealing UIs. But overall it was fun learning how to use CSS with ReCharts.',
    difficulties: " A couple of things that stumped me were the lack of libraries where I could obtain the icons for each individual coin and working with ReCharts. For the coin icons I had to create a workaround where basically I took the name of each coin and used it to link to a website that has all the pngs for the coins. As for the charts - I had to extract each coin's individual price by date in a particular range and then getting the chart to look good was troublesome but after digging around the documentation and searching the web I got it do dipslay exactly how I inteded. ",
    time: " Took around 48 hrs but that includes time put into deciding the color scheme, looking for a suitable API and dealing with a few bumps along the way. But aside from that, it was smooth sailing for the most part. ",
    link: "https://lucianaiolos.github.io/Crypto-Market/",
    repo: 'https://github.com/LucianAiolos/Crypto-Market',
    tools: [
      'React',
      'ReCharts',
      'Coincap API',

    ],
    images: [
       require('../assets/images/project-images/Crypto-1.png'), 
       require('../assets/images/project-images/Crypto-2.png'),
       require('../assets/images/project-images/Crypto-3.png'),       
      ],
      graphData: [
        { name: 'HTML 48%', uv: 48, pv: 100, },
        { name: 'CSS 48%', uv: 48, pv: 100 },
        { name: 'JS 4%', uv: 2, pv: 100 },
      ]
    },
    {  
      id: 3,
      title: 'Firebase Waitlist',
      why: " I was inspired by the Yelp waitlist App after using it at a restaurant and thought I'd give it a shot! Also thougth I would give firebase a shot after using MongoDB",
      about: ' An app to collect customer information to be added to a waitlist for a restaurant using React, Firebase, and Tailwind.',
      likes: " I enjoyed ",
      difficulties: " I was not aware that UseEffect now renders twice on load and I was stumped there for a minute but in the end it was good because it taught me how to deal with that update and I was able to catch the issue the next time it came up!",
      time: " Took 20 hours. I got stuck because I was not aware I had to use user authentication to manipulate data in the database.",
      link: "https://lucianaiolos.github.io/firebase-waitlist/",
      repo: "https://github.com/LucianAiolos/firebase-waitlist",
      tools: [
        "ReactJS",
        "Firebase",
        "Tailwind CSS",
      ],
      images: [
        require('../assets/images/project-images/waitlist-1.png'), 
        require('../assets/images/project-images/waitlist-2.png'),
         require('../assets/images/project-images/waitlist-3.png'),       
      ],
      graphData: [
        { name: 'HTML 34%', uv: 34, pv: 100 },
        { name: 'CSS 57%', uv: 57, pv: 100 },
        { name: 'JS 9.5%', uv: 9.5, pv: 100 },
      ]
    },
    {  
      id: 4,
      title: 'Feedback App',
      why: " This was build so I could learn Context but also given the current design trends of rounded corners and rounded buttons and as I learn more about the design aspect of websites I am giving myself challenges to make things that are welcoming and appealing for users. ",
      about: ' An app to collect customer feedback where data is stored in a mock back-end using JSON-server, a github repo to data and Tipycode to connect to the "server" and retrieve data.',
      likes: " I enjoyed learning learning about Context and it's state management and how it's more suitable for smaller applications.",
      difficulties: " I was not aware that UseEffect now renders twice on load and I was stumped there for a minute but in the end it was good because it taught me how to deal with that update and I was able to catch the issue the next time it came up!",
      time: " Took 15 hours give or take. Context was not too difficult to figure out",
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
    {  
    id: 5,
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
      "JavaScript",
      "Pokemong API"
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
  // {  
  //   id: 4,
  //   title: 'Festival Website',
  //   why: ' When I first visited the site I copied (it was visually very pleasing to me) I remember thinking "Wait, I think I can make that!" and I took on the challenge.',
  //   about: " A music festival mock-up webiste so essentially bringing together several things that I enjoy. Coding, Music, Visuals. This was the first project I did to test myself and I include it because it tells part of my coding journey since this was the project that I felt sparked the flame in my coding journey!",
  //   likes: " This was definitely a fun one, I finally got to build something where I got the feeling like I got to express myself(visually) and I that definitely helped determine my Front End path because I am a very visual person. I also ejoyed playing with gradients, fonts, styling and the lay out.",
  //   difficulties: " When I said test myself I meant test my CSS skills because oh man. I had a really tough time getting things where I wanted them or getting things to do the things I wanted them to do or getting a PNG file's transparency to work for some reason. BUT, it taught me a lot and helped me understand what I needed to work on such as flex-box.",
  //   time: " Took about 45 hrs getting everything to dislay the way I intended and I'm not emberrassed about the number of hours it took because I know that number would be much much lower these days.",
  //   link: "https://lucianaiolos.github.io/Music-Festival-X/",
  //   repo: "https://github.com/LucianAiolos/Music-Festival-X",
  //   tools: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript"
  //   ],
  //   images: [
  //      require('../assets/images/project-images/jungle.png'), 
  //      require('../assets/images/project-images/jungle-2.png'),
  //      require('../assets/images/project-images/jungle-3.png'),       
  //   ],
  //   graphData: [
  //     { name: 'HTML 34%', uv: 34, pv: 100 },
  //     { name: 'CSS 57%', uv: 57, pv: 100 },
  //     { name: 'JS 9.5%', uv: 9.5, pv: 100 },
  //   ]
  // },
]                       
