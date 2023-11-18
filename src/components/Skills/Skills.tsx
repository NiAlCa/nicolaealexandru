import { SkillsData } from "../../data/SkillsData.mock";
import './Skills.scss'

export function Skills (){
 

    return (

        <div className="Skills">
            <div className="SkillsTittle">
                <h6> Skills & experience </h6>
            </div>

            <div className="SkillsContent">
                {SkillsData.map(skill => (
                    <div key={skill.text} className="SkillItem">
                        <div className="SkillIcon">{skill.icon}</div>
                        <div className="SkillText">{skill.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}