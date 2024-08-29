import CryptoTile from '../assets/images/project-images/crypto-tile.png'
import Pokedex from '../assets/images/project-images/pokedex.png'
import CC from '../assets/images/project-images/cc-tile.png'
import Waitlist from '../assets/images/project-images/fb-waitlist-tile.png'
import Feedback from '../assets/images/project-images/feedback-app.png'
import HouseMarketplaceTwo from '../assets/images/project-images/houseMarket-tile.png'

 const ProjectsData = [
  
   {
     id: 0,
     name: "Social Media",
     image: CC,
     address: 'https://luciansoto.github.io/PokeDex-Luxian/',
     info: 'Thanks to the Pokemon API, I was able to build my own version of the Pokedex.'
   },
   {
     id: 1,
     name: "House Marketplace",
     image: HouseMarketplaceTwo,
     address: 'https://luciansoto.github.io/House-Marketplace',
     info: 'A Simple fullstack application using React and Firebase.'
   },
  {
    id: 2,
    name: "Crypto Watch",
    image: CryptoTile,
    address: 'https://luciansoto.github.io/Crypto-Market/',
    info: 'A responsived website, built and deployed for client.'
  },
  // {
    //   id: 3,
  //   name: "Festival Website",
  //   image: Jungle,
  //   address: 'https://luciansoto.github.io/Music-Festival-X/',
  //   info: 'Two of my passions: Coding & music. This project helped bring it all together.'
  // },
  
  {
    id: 3,
    name: "Firebase Waitlist",
    image: Waitlist,
    address: 'https://luciansoto.github.io/Waitlist-LocalStorage/',
    projectStyle: "waitlist-style",
    info: "After using Yelp's waitlist app at one of my favorite eateries I decided to give it a shot."
  },
  {
    id: 4,
    name: 'Feedback App',
    image: Feedback,
    address: 'https://luciansoto.github.io/Feedback-App/',
    info: 'React feedback app using a JSON server for a mock back-end.'
  },
  {
    id: 5,
    name: "Pokedex",
    image: Pokedex,
    address: 'https://luciansoto.github.io/PokeDex-Luxian/',
    info: 'Thanks to the Pokemon API, I was able to build my own version of the Pokedex.'
  },
]


export default ProjectsData

