import React from "react";

export default function Home() {
  return (
    <>
        <h1>Welcome to Blueprint for CMS</h1>>
        <p>Collaboratively write contrk, narratives. Never start from scratch.</p>


        <div id="process-list-preview-content" class="usa-accordion__content">
          <ol class="usa-process-list">
            <li class="usa-process-list__item">
              <h4 class="usa-process-list__heading">Enter basic information</h4>
              <p class="margin-top-05">
                System name, acronym, location, FISMA Impact Level
              </p>
            </li>
            <li class="usa-process-list__item">
              <h4 class="usa-process-list__heading">Select Blueprint components</h4>
              <p>
              Groups of inherited and pre-written control narratives
              </p>
            </li>
            <li class="usa-process-list__item">
              <h4 class="usa-process-list__heading">Add your project team</h4>
              <p>
              Invite team members to collaborate and write control narratives in Blueprint
              </p>
            </li>
            <li class="usa-process-list__item">
              <h4 class="usa-process-list__heading">Edit, review and finalize narratives</h4>
              <p>
              Complete narratives and confirm all required controls are met
              </p>
            </li>
            <li class="usa-process-list__item">
              <h4 class="usa-process-list__heading">Import narratives and add evidence into CFACTS</h4>
              <p>
              Upload control narratives and supporting evidence into the system of record 
              </p>
            </li>
          </ol>
          <button className="usa-button usa-button--big">Get started now</button>
        </div>
        <div className="usa-card__container">
            <div className="usa-card__header">
                <h3>Continue a project</h3>
            </div>
            <div className="usa-card__body">
                <span>Access existing project(s) and continue addressing controls.</span>
            </div>
            <div class="usa-card__footer">
            <a href="/projects"><button className="usa-button usa-button--big">Access projects</button></a>
            </div>
        </div>
        
        <div className="usa-card__container">
            <div className="usa-card__header">
                <h3>Learn more</h3>
            </div>
            <div className="usa-card__body">
                <span>Learn about how Blueprint fits into the ATO ecosystem at CMS.</span>
            </div>
            <div class="usa-card__footer">
            <a href="https://ato.cms.gov/"><button className="usa-button usa-button--big">Learn more</button></a>
            </div>
        </div>
    </>
  );
}
