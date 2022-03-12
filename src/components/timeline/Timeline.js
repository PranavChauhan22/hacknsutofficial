import React from 'react'
import "./Timeline.css"
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from "@react-hook/window-size";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Timeline() {
    const onlyWidth = useWindowWidth();
  return (
      <div>
 <div className="theme__header" id="timeline" style={{marginTop:"100px"}}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Schedule</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7935ff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7935ff' }}
        date="10 March 2022"
        iconStyle={{ background: '#7935ff', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#7935ff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="22 March 2022"
        iconStyle={{ background: 'white', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Ends</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7935ff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7935ff' }}
        date="24 March 2022"
        iconStyle={{ background: '#7935ff', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Team Confirmation RollOut</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#7935ff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="25 March 2022, 9 AM"
        iconStyle={{ background: 'white', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">CheckIn</h3>
      
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7935ff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7935ff' }}
        date="25 March 2022, 10 AM"
        iconStyle={{ background: '#7935ff', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Opening Ceremony</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#7935ff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="25 March 2022, 12 Noon"
        iconStyle={{ background: 'white', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Coding Period Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7935ff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7935ff' }}
        date="26 March 2022, 12 Noon"
        iconStyle={{ background: '#7935ff', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Coding Period Ends And Final Evaluation</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#7935ff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="26 March 2022, 3 Noon"
        iconStyle={{ background: 'white', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
      
      </VerticalTimelineElement>

    </VerticalTimeline>
    </div>
  )
}

export default Timeline

// 8 March - Registration Starts
// 20 March - Registration Ends
// 21 March - Team Confirmation RollOut
// 24 March 9 am - CheckIn
// 24 March 10 am - Opening Ceremony 
// 24 March 12 Noon - Coding Period Starts
// 25 March 12 Noon  - Coding Period Ends and Final Submission
// 25 March  3 pm - Closing Ceremony