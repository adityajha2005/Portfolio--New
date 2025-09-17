import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Jha",
  initials: "AJ",
  url: "https://www.adityajhaa.co/",
  location: "New Delhi, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
"Web3 Developer with a Web2 day job -  building, learning, and sharing on X.",
  summary:
"I’m a Web3-focused Full Stack Developer and entrepreneur, currently building scalable SaaS and decentralized applications. With experience across multiple startups, 7+ hackathon wins, and grants, I love turning ideas into products that bridge Web2 and Web3. Beyond coding, I enjoy experimenting, sharing, and contributing to the developer ecosystem."  ,
avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFoMQJK0k2d_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693678939693?e=1761177600&v=beta&t=XfdL0k8ajfoBwzxfHsBvqzSGcPT9tV1UmMFtKeuDb9E",
skills: [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "C++",
  "Solidity",
  "Rust",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "2005ajha@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adityajha2005",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-jha-654800280",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adxtya_jha2005",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      
        company: "Pikme",
        href: "https://pikme.app", // replace with actual if you have
        badges: [],
        location: "Remote, San Francisco",
        title: "Full Stack Developer",
        logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQEsm7hc9fbl7Q/company-logo_100_100/B4EZVieI_2HUAQ-/0/1741113824113/pikmeinc_logo?e=1761177600&v=beta&t=8Cc5zTr81dgJT8n8zUgx28A6Uf7DbuQ0j8M311tc4wE", // adjust if you have the logo
        start: "July 2025",
        end: "Present",
        description:
          "Engineered single-player and multiplayer versions of Pikme from the ground up, enhancing engagement for photography enthusiasts. Boosted site performance and user experience through caching strategies, lazy loading, and frontend optimizations. Managed end-to-end deployment on AWS, including EC2, S3, and server configuration for scalable, reliable operations."
      },
      
      {
        company: "Stealth Startup",
        badges: [],
        href: "", // can add later if public
        location: "Remote, Boston",
        title: "Full Stack Blockchain Developer",
        logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQGUKsfjHB8RNQ/company-logo_100_100/company-logo_100_100/0/1735368022724/stealth_startup_51_logo?e=1761177600&v=beta&t=k9F16_cP8yiR9nW2677K8B6xW1CkS_VM3PhRbUN-yCQ", // placeholder, update if you have logo
        start: "August 2025",
        end: "Present",
        description:
          "Developed and deployed DAO governance smart contracts with comprehensive unit tests and security audits for robustness. Built the complete frontend interface for seamless blockchain interaction, and integrated smart contracts with both frontend and backend to deliver a fully functional decentralized application."
      },      
      {
        company: "Euclid Protocol",
        href: "", // add if there's a public link
        badges: [],
        location: "Remote, Dubai",
        title: "Full Stack Developer",
        logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQHnn-C_42UFNA/company-logo_200_200/company-logo_200_200/0/1715355342323?e=1761177600&v=beta&t=dYQZizuNcCqv_XtCRbR9tVlyBPtvlBNJEJkIR6RnFjc", // placeholder, update if you have the logo
        start: "May 2025",
        end: "July 2025",
        description:
          "Developed EuclidAI to streamline processes and ensure seamless operations. Designed and implemented EuclidMail, enabling users to send crypto via email through a unique claimable link. Collaborated with cross-functional teams to update EuclidSwap and ship new features."
      },
      
      {
        company: "Solana Superteam",
        href: "https://superteam.fun",
        badges: [],
        location: "Remote, India",
        title: "Community Member & Builder",
        logoUrl: "https://pbs.twimg.com/profile_images/1679100194028392448/4_3L1nRh_400x400.jpg", // placeholder, update if you have the logo
        start: "March 2025",
        end: "Present",
        description:
          "Active member of Solana Superteam contributing to the ecosystem through projects, hackathons, and developer initiatives. Awarded grants for building on Solana and collaborated with the community to ship impactful Web3 products."
      },      
      {
        company: "Aiphi AI",
        href: "", // add company site if you want
        badges: ["Internship"],
        location: "Bengaluru, Karnataka, India · Hybrid",
        title: "Full Stack AI Engineer",
        logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQGmoVlXuCa7mg/company-logo_200_200/company-logo_200_200/0/1719414649361/aiphi_ai_logo?e=1761177600&v=beta&t=sJ_zl_K0kpkUOol4AsiiQJ5CGxRFt5R-P05pk5taX5A", // placeholder, update if you have logo
        start: "February 2025",
        end: "April 2025",
        description:
          "Worked as a Full Stack AI Engineer intern, contributing to AI-driven product development and end-to-end application features, combining backend systems with AI model integration."
      },      
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      href: "https://jaipur.manipal.edu/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://jaipur.manipal.edu/img/manipal-university-jaipur-logo-01.svg",
      start: "2023",
      end: "2027",
    },
  ],
  pprojects: [
    {
      title: "MEMEFI",
      href: "https://memefi-platform.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Launched MEMEFI – a gamified meme staking platform where users upload memes, stake them, and earn rewards based on stakes and engagement. Integrated wallet abstraction for a seamless UX without manual crypto setup.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Solidity (BNB Chain)",
        "Node.js",
        "MongoDB",
        "IPFS",
      ],
      links: [
        {
          type: "Website",
          href: "https://memefi-platform.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityajha2005/memefi-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SnapChain",
      href: "https://snapchain.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Developed an AI-powered drag-and-drop platform to simplify the creation of Rust-based smart contracts. Features include an interface similar to Scratch, AI-assisted contract generation, pre-made templates, and contract customization.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Rust", "Google Gemini API"],
      links: [
        {
          type: "Website",
          href: "https://snapchain.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityajha2005/snapchain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    // {
    //   title: "MEMEFI",
    //   href: "https://memefi-platform.vercel.app",
    //   dates: "2025",
    //   active: true,
    //   description:
    //     "Launched MEMEFI – a gamified meme staking platform where users upload memes, stake them, and earn rewards based on stakes and engagement. Integrated wallet abstraction for a seamless UX without manual crypto setup.",
    //   technologies: [
    //     "Next.js",
    //     "Tailwind CSS",
    //     "Solidity (BNB Chain)",
    //     "Node.js",
    //     "MongoDB",
    //     "IPFS",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://memefi-platform.vercel.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/adityajha2005/memefi-platform",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "",
    // },
    {
      title: "ForkYouDaddy",
      href: "https://forkyoudaddy.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Web3 application for creating, remixing, and licensing creative IP. Creators can register original works onchain, others can fork and build on them with attribution, and licenses define usage and monetization.",
      technologies: ["Next.js", "TypeScript", "Solidity", "Web3"],
      links: [
        {
          type: "Website",
          href: "https://forkyoudaddy.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityajha2005/forkyoudaddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Capsulr",
      href: "https://t-ime-capsule-monad.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Capsule your memories, made on Monad testnet. A decentralized time capsule application that allows users to store and retrieve memories on the blockchain.",
      technologies: ["Next.js", "TypeScript", "Solidity", "Monad Blockchain"],
      links: [
        {
          type: "Website",
          href: "https://t-ime-capsule-monad.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityajha2005/TImeCapsuleMONAD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
