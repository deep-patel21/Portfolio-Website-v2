'use client'

import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
  
type ExperienceCardProps = {
    experience: {
        title: string;
        date: string;
        iconBg: string;
        website: string;
        icon: string;
        company_name: string;
        description: string;
    };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#000", color: "#fff", visibility:"visible" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, cursor:"pointer", visibility:"visible"}}
      iconOnClick={()=>{ window.open(experience.website, '_blank')}}
      icon={
        <div className='flex justify-center items-center w-full h-full visible'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain visible'
            />
          </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold">{experience.company_name}</p>
        <p className="text-white text-[10px]">{experience.description}</p>
      </div>
    </VerticalTimelineElement>
  );

export default ExperienceCard