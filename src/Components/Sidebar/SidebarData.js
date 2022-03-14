import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ForumIcon from "@mui/icons-material/Forum";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
    cName: "nav-text",
  },

  {
    title: "Chi Sono",
    icon: <PersonIcon />,
    path: "/chi_sono",
    cName: "nav-text",
  },

  {
    title: "Portfolio",
    icon: <BusinessCenterIcon />,
    path: "/portfolio",
    cName: "nav-text",
  },

  {
    title: "Contatti",
    icon: <ForumIcon />,
    path: "/contatti",
    cName: "nav-text",
  },
];
