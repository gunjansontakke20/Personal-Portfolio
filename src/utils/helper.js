import {
    FaDiagramProject,
    FaEnvelope,
    FaGithub,
    FaHouse,
    FaInstagram,
    FaLinkedinIn,
    FaRenren,
    FaUser,
    FaYoutube,
  } from "react-icons/fa6";
  import {
    ChatApp,
    CodePenClone,
    FreshJuiceUI,
    ImageSharing,
    OpenAI,
    PixabayClone,
    PortfolioFirebase,
    RestaurantClone,
    SocialMedia,
    coding,
  } from "../assets";
  
  export const Socials = [
    {
      id: `instagram-${Date.now()}`,
      Icon: FaInstagram,
      uri: "https://www.instagram.com/animationdecore/",
      color: "#1877F2",
    },
    {
      id: `linkedin-${Date.now()}`,
      Icon: FaLinkedinIn,
      uri: "https://www.linkedin.com/in/gunjan-sontakke-a34b96187/",
      color: "#0072b1",
    },
    {
      id: `github-${Date.now()}`,
      Icon: FaGithub,
      uri: "https://github.com/gunjansontakke20",
      color: "#fff",
    },
    {
      id: `youtube-${Date.now()}`,
      Icon: FaYoutube,
      uri: "https://www.youtube.com/channel/UC8SfUIZ_q4wnClWGUSc4RsQ",
      color: "#ff0000",
    },
  ];
  
  export const Menus = [
    {
      id: `home-${Date.now()}`,
      Icon: FaHouse,
      uri: "#home",
      name: "Home",
    },
    {
      id: `about-${Date.now()}`,
      Icon: FaUser,
      uri: "#about",
      name: "About",
    },
    {
      id: `skills-${Date.now()}`,
      Icon: FaRenren,
      uri: "#skills",
      name: "Skills",
    },
    {
      id: `projects-${Date.now()}`,
      Icon: FaDiagramProject,
      uri: "#Projects",
      name: "Projects",
    },
    {
      id: `contact-${Date.now()}`,
      Icon: FaEnvelope,
      uri: "#Contact",
      name: "Contact",
    },
  ];
  
  export const ProjectsData = [
    {
      id: `food-${Date.now()}`,
      name: "Single Food Restaurant",
      imgSrc: RestaurantClone,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `codepen-${Date.now()}`,
      name: "CodePen Clone",
      imgSrc: CodePenClone,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `openai-${Date.now()}`,
      name: "OpenAI",
      imgSrc: OpenAI,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `chatapp-${Date.now()}`,
      name: "Chat App Build",
      imgSrc: ChatApp,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `imageSharing-${Date.now()}`,
      name: "Image Sharing App",
      imgSrc: ImageSharing,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `pixabayclone-${Date.now()}`,
      name: "Pixabay Clone 2.0",
      imgSrc: PixabayClone,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `freshjuiceui-${Date.now()}`,
      name: "Fresh Juice UI Build",
      imgSrc: FreshJuiceUI,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `socialmedia-${Date.now()}`,
      name: "Social Media App",
      imgSrc: SocialMedia,
      gitURL: "https://github.com/gunjansontakke20",
    },
    {
      id: `portfoliofirebase-${Date.now()}`,
      name: "Portfolio UI Fireabse",
      imgSrc: PortfolioFirebase,
      gitURL: "https://github.com/gunjansontakke20",
    },
  ];