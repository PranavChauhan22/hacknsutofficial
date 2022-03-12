import React from 'react'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from "@react-hook/window-size";
  import "./Rule.css"
import Faq from '../faqs/Faq';
function Rule() {
    const onlyWidth = useWindowWidth();
  return (
      
    <div>
        <div className="theme__header" style={{ paddingTop: "80px" }}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Rules</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
        <ol className="list_rl">
            <li className="rl">
            Teams must consist of 3 to 4 participants.
            </li>
            <li className="rl">
            Your hack must be developed entirely during the Hackathon duration (24 Hours). You may use open source libraries and other freely available systems / services such as Google Maps, Facebook Connect, Twitter feeds etc.

            </li>
            <li className="rl">
            All design elements, code, hardware builds, etc. for your project must be created during the event.

            </li>
            <li className="rl">
            While you may not begin coding in advance, you can plan and discuss with your team in advance. Written documents and design sketches are allowed.  

            </li>
            <li className="rl">
            You are expected to come up with new and innovative ideas, any idea that has been plagiarized from somewhere will be disqualified.

            </li>
            <li className="rl">
            A team cannot contact any outside member who is not present at the hackathon location. They must design/code only at the hackathon location.

            </li>
            <li className="rl">
            At least one team member must be physically present during sign-in, and one must be conscious and present to present the project to the judges during their assigned presentation time.

            </li>
            <li className="rl">
            Only the top ten teams will present their projects in the final round of judging at the end of the event. 

            </li>
            <li className="rl">
            Teams that make it to the final round will be given up to 4 to 5 minutes to present their finished project to a panel of judges followed by questions from the esteemed judges.

            </li>
            <li className="rl">
            The prizes not specified otherwise will be awarded solely based on the decision of the judging panel. 

            </li>
            <li className="rl">
            Unfair means used to guarantee advantage will lead to disqualification.

            </li>
            <li className="rl">
            The decision of the organizers will be final and binding in any case of a dispute. 

            </li>
            <li className="rl">
            The intellectual property of your code belongs only to your team.

            </li>
        </ol>

        
        <div className="theme__header" style={{ paddingTop: "80px" }}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Faq</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
        <Faq/>
    </div>
  )
}

export default Rule


