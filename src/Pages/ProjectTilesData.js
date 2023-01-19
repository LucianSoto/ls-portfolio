import CryptoTile from '../assets/images/project-images/crypto-tile.png'
import Pokedex from '../assets/images/project-images/pokedex.png'
import Jungle from '../assets/images/project-images/jungle.png'
import Waitlist from '../assets/images/project-images/fb-waitlist-tile.png'
import Feedback from '../assets/images/project-images/feedback-app.png'
import HouseMarketplaceTwo from '../assets/images/project-images/houseMarket-tile.png'

 const ProjectsData = [
  
  {
    id: 0,
    name: "Crypto Watch",
    image: CryptoTile,
    address: 'https://lucianaiolos.github.io/Crypto-Market/',
    info: 'A responsived website, built and deployed for client.'
  },
  {
    id: 1,
    name: "House Marketplace",
    image: HouseMarketplaceTwo,
    address: 'https://lucianaiolos.github.io/House-Marketplace',
    info: 'A Simple fullstack application using React and Firebase.'
  },
  {
    id: 2,
    name: "Pokedex",
    image: Pokedex,
    address: 'https://lucianaiolos.github.io/PokeDex-Luxian/',
    info: 'Thanks to the Pokemon API, I was able to build my own version of the Pokedex.'
  },
  {
    id: 3,
    name: "Festival Website",
    image: Jungle,
    address: 'https://lucianaiolos.github.io/Music-Festival-X/',
    info: 'Two of my passions: Coding & music. This project helped bring it all together.'
  },
  
  {
    id: 4,
    name: 'Feedback App',
    image: Feedback,
    address: 'https://lucianaiolos.github.io/Feedback-App/',
    info: 'React feedback app using a JSON server for a mock back-end.'
  },
  {
    id: 5,
    name: "Firebase Waitlist",
    image: Waitlist,
    address: 'https://lucianaiolos.github.io/Waitlist-LocalStorage/',
    projectStyle: "waitlist-style",
    info: "After using Yelp's waitlist app at one of my favorite eateries I decided to give it a shot."
  }
]


export default ProjectsData

