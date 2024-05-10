
import {
    FaJava, FaJs, FaHtml5, FaReact, FaNodeJs, FaBootstrap, FaDocker, FaCss3Alt
}
    from 'react-icons/fa';

import {
    SiThymeleaf, SiSpringboot, SiMysql, SiMongodb,
    SiPostgresql, SiSwagger, SiJunit5, SiHeroku, SiNetlify
    , SiRailway, SiPostman, SiJirasoftware
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

const SkillsData = [
    {
        id: 1,
        skillName: 'Fundamentals',
        listTechnologies: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
        ],
    },
    {
        id: 2,
        skillName: 'Frontend',
        listTechnologies: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Thymeleaf', icon: <SiThymeleaf /> },
            { name: 'Bootstrap', icon: <FaBootstrap /> },
        ],
    },
    {
        id: 3,
        skillName: 'Backend',
        listTechnologies: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Spring Boot', icon: <SiSpringboot /> },
        ],
    },
    {
        id: 4,
        skillName: 'Databases',
        listTechnologies: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    {
        id: 5,
        skillName: 'Testing',
        listTechnologies: [
            { name: 'JUnit', icon: <SiJunit5 /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Swagger', icon: <SiSwagger /> },
        ],
    },
    {
        id: 6,
        skillName: 'Deployment',
        listTechnologies: [
            { name: 'Heroku', icon: <SiHeroku /> },
            { name: 'Netlify', icon: <SiNetlify /> },
            { name: 'Railway', icon: <SiRailway /> },
        ],
    },
    {
        id: 7,
        skillName: 'DevOps',
        listTechnologies: [
            { name: 'Docker', icon: <FaDocker /> },
        ],
    },
    {
        id: 8,
        skillName: 'Agile',
        listTechnologies: [
            { name: 'Scrum', icon: <DiScrum /> },
            { name: 'Jira', icon: <SiJirasoftware /> },
        ],
    },
];

export default SkillsData;
