import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { IServices } from "./types";

export const services: IServices[] = [
  {
    title: "Frontend Dev",
    about:
      "Frontend Engineer who can build a beautiful and scalable  SPA using <b>HTML</b> ,<b>CSS</b>,<b>JS</b>,<b>React</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Dev",
    about:
      "Handle databases ,server,api using <b>Express</b> & other frameworks",
    Icon: FaServer,
  },
  {
    title: "API Dev",
    about: "I develop REST API using <b>Node API</b>",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Code",
    about:
      "A daily problem solver in <b>Hacker Rank </b> and <b>Leetcode </b> ",
    Icon: MdDeveloperMode,
  },
];
