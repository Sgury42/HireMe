import React from "react";
import '../css/timeline.css';


const Timeline = (props) => {

  return(
    <div className="timeline">
      <div className="timeline-progress"></div>
      <div className="timeline-items">
				<div className="timeline-item first-item">
          <div className="timeline-content up item-one">
            <div className="place-date">
              <div>Paris</div>
              <div>2012-14</div>
            </div>
            <div className="content-description">Photography Licence at <b>MJM Graphic Design</b></div>
          </div>
        </div>
				<div className="timeline-item">
          <div className="timeline-content down item-two">
            <div className="place-date">
              <div>French Guyana<br></br>San Francisco</div>
              <div>2015-18</div>
            </div>
            <div className="content-description"><b>Photo Editing</b> and other jobs (retail manager, merchandising, aupair,...) </div>
          </div>
        </div>
				<div className="timeline-item highlight-dot-light">
          <div className="timeline-content up highlight item-three">
            <div className="place-date">
              <div>Paris</div>
              <div>2019-21</div>
            </div>
            <div className="content-description">I learnd to code at <b>42 Paris</b> general curriculum & specialization in <b>web developpement</b> (HTML, CSS, PHP, C, JAVASCRIPT, GIT, ...) download my resume for more details</div>
          </div>
        </div>
				<div className="timeline-item highlight-dot-light">
          <div className="timeline-content down highlight item-four">
           <div className="place-date">
              <div>Paris<br></br>San Francisco</div>
              <div>2021</div>
            </div>
            <div className="content-description">I joined the startup program called <b>42 entrepreneur</b>, even know it didn't lead to the creation of a startup, I learned a lot of other skills like how to conduct a market research, write a business plan, pitch an idea, ... </div>
          </div>
        </div>
				<div className="timeline-item">
          <div className="timeline-content up item-five">
            <div className="place-date">
              <div>San Francisco</div>
              <div>2020-22</div>
            </div>
            <div className="content-description">As a <b>Familly assistant</b> I helped family stay organized and manage their schedule, I also helped with taking care of the children</div>
          </div>
        </div>
        <div className="timeline-item last-item highlight-dot-strong">
          <div className="timeline-content down highlight item-six">
            <div className="place-date">
              <div>San Francisco</div>
              <div>2021-22</div>
            </div>
            <div className="content-description"><b>Freelance web developer</b> and work on other personal project such as this website!</div>
          </div>
        </div>
			</div>
    </div>
  )
}

export default Timeline;