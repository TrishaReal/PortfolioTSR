import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    icon: <AiFillHome />,
    path: "/",
    cName: "nav-text",
  },

  {
    title: "Chi Sono",
    icon: <BsFillPersonFill />,
    path: "/chi_sono",
    cName: "nav-text",
  },

  {
    title: "Portfolio",
    icon: <MdBusinessCenter />,
    path: "/portfolio",
    cName: "nav-text",
  },

  {
    title: "Contatti",
    icon: <RiMessage3Fill />,
    path: "/contatti",
    cName: "nav-text",
  },
];
