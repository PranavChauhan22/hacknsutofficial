import React from "react";
import "./Timeline.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Timeline() {
  const onlyWidth = useWindowWidth();
  return (
    <div>
      <div
        className="theme__header"
        id="timeline"
        style={{ marginTop: "100px" }}
      >
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">Schedule</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00FFFF", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #00FFFF" }}
          date="19 January 2023"
          iconStyle={{ background: "#00FFFF", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Registration Starts
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="7 February 2023"
          iconStyle={{ background: "white", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Registration Ends</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00FFFF", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #00FFFF" }}
          date="8 February 2023"
          iconStyle={{ background: "#00FFFF", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Team Confirmation RollOut
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="11 February 2023, 9 AM"
          iconStyle={{ background: "white", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">CheckIn</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00FFFF", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #00FFFF" }}
          date="11 Februar 2022, 9:30 AM"
          iconStyle={{ background: "#00FFFF", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Opening Ceremony</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="11 Februar 2022, 10 AM"
          iconStyle={{ background: "white", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Coding Period Starts
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00FFFF", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #00FFFF" }}
          date="12 February 2023, 4 PM"
          iconStyle={{ background: "#00FFFF", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Coding Period Ends And Final Evaluation
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="12 February 2023, 5 PM"
          iconStyle={{ background: "white", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

// 8 March - Registration Starts
// 20 March - Registration Ends
// 21 March - Team Confirmation RollOut
// 24 March 9 am - CheckIn
// 24 March 10 am - Opening Ceremony
// 24 March 12 Noon - Coding Period Starts
// 25 March 12 Noon  - Coding Period Ends and Final Submission
// 25 March  3 pm - Closing Ceremony
