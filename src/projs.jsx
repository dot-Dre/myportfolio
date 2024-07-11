import whenPigsFly from "./assets/whenpigsfly.gif";
import dungeongpt from "./assets/dungeongpt.gif";
import buzzword from "./assets/buzzword.PNG";
import port from "./assets/this.PNG";

const ProjectDetails = {
  WhenPigsFly: {
    name: "When Pigs Fly 🐷",
    tags: ["Java", "Processing"],
    img: whenPigsFly,
    blurb:
      "A 2D game written in Processing (Java). When Pigs Fly is a side-scrolling game inspired by classics like Jetpack Joyride. Players assume the role of a newborn dragon equipped with the ability to shoot powerful energy blasts from its mouth.",
  },
  DungeonGPT: {
    name: "Dungeon GPT 💀",
    tags: ["React", "SpringBoot"],
    img: dungeongpt,
    blurb:
      "A Web Application which procedurally generates Halloween themed dungeons for table top campaign games. I worked on it alongside a team of 5 other people where I worked on creating the front-end UI and some APIs on the backend.",
  },
  BuzzWord: {
    name: "Buzzword 🐝🔤",
    tags: ["Nextjs", "Aceternity UI", "Vercel"],
    img: buzzword,
    blurb:
      "A small browser game which is similar to a real world Spelling Bee. Consumes a random words API.",
  },
  Portfolio: {
    name: "This",
    tags: ["React", "3js"],
    img: port,
    blurb: "This website! The cool 3d clouds you can see are rendered using Three js."
  }
};

export default ProjectDetails;
