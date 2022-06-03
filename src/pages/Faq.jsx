const Faq = () => {
    return (
        <>
        <h1>Frequently Asked Questions</h1>
        <h3>How does Blueprint help you get an ATO?</h3>
        <p>Completing the System Security Plan (SSP) accounts for about 80 percent of the work needed to get an ATO, and writing security control implementation statements is one of the biggest challenges.
        Blueprint simplifies the process by providing reusable compliance components that match your system and include draft control implementation statements that satisfy requirements.
        Components enhance the creation, maintenance and understanding of System Security SSPs. They'll also support gap analysis, automated verification and ongoing assessments and authorization. By providing pre-written control implementation statements in components, Blueprint helps you create your SSP faster.
        </p>

        <h3>When should you start building your SSP?</h3>
        <p>As soon as you start deploying your infrastructure environments and developing your system!
        Blueprint's goal is to make compliance more iterative. As you build your system, add components based on the policies and technologies you're using.
        Once your system is built, your SSP should be as well. No more waterfall compliance!
        </p>
        <h3>What are security controls?</h3>
        <p>
        Security controls are requirements or guidelines to ensure minimum security is achieved for federal information systems. Each system is assigned a baseline of controls based on its environment and other factors.
        A System Security Plan includes implementation statements for each required control. These statements explain what measures are being taken to mitigate the risk for each control.
        </p>
        <h3>Are all controls created equal?</h3>
        <p>No, but the good news is that Blueprint clearly identifies which controls statements are:</p>
        <ul className="usa-list">
            <li><span className="text-bold">Fully inherited</span> (Other CMS systems provide the full statement)</li>
            <li><span className="text-bold">Shared</span> (Other CMS systems and your system each contribute to the statement)</li>
            <li><span className="text-bold">Allocated</span> (your system is responsible for the full statement)</li>
        </ul>
        <p>So your team can focus on what needs attention.</p>
        <h3>What does “shared responsibility” mean?</h3>
        <p>
        The shared responsibility model helps product teams manage risk and meet compliance requirements.
        By allowing the CMS hosting environment to take on certain responsibilities, you fully inherit some control narratives. This means you don't have to write them. There are also shared controls, where the host is responsible for part of the narrative and the product team provides supplemental information to complete it.
        </p>

        <h3>What are components?</h3>
        <p>
        Reusable components are groups of partial or complete control implementation statements that deal with security requirements of a defined technology, function or process.
        Instead of writing all of the control implementation statements required for your system, components do some of the work for you.
        Blueprint automatically adds some components to your system based on the information you provide.
        You can also visit the Component Library to search for new components as you build your system, and even create your own.
        </p>
        <h3>Will components cover your entire SSP?</h3>
        <p>
        The CMS security and compliance community is working to build components for every control. But, there are controls that aren't included in a component yet.
        For these controls, your team is responsible for creating accurate, complete control implementation statements.
        </p>
        <h3>How do I know which components to add in Blueprint?</h3>
        <p>
        The components you select should align with your system's technologies and policies.
        For example, if your system is using Splunk to track audit logs and Confluence to manage information, you can select the Splunk and Confluence components and Blueprint will suggest control implementation narratives for your system.
        Rather than writing the statements from scratch, you can simply review and edit/augment the statements as needed. This also allows you to build your SSP as you build your system.
        </p>
        <div className="usa-card-group grid-row">
            <div className="usa-card__container">
                <div className="usa-card__header">
                    <h2>Do you have questions</h2>
                </div>
                <div className="usa-card__footer">
                    <a href="/contactus"><button className="usa-button usa-button--big">Contact us</button></a>
                </div>
            </div>
        </div>
    </>
    );
  };

export default Faq;
