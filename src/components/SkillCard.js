
import "../styles//skills-card.css";

const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card-container">
            <h3>{skill.skillName}</h3>

            <ul>
                {skill.listTechnologies.map((technology) => (
                    <li key={technology}>
                        <p className="skill-icon">{technology.icon}</p>

                        <p>{technology.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
