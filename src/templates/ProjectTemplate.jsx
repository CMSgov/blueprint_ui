import ControlsCompleted from "../molecules/CompletedControls";
import ComponentsList from "../organisms/ComponentsList";

export function ProjectTemplate({project}) {
    const componentList = [
        {id: 1, name: 'first component'},
        {id: 2, name: 'second component'}
    ];

    return (
        <div>
            <h1>{project.title} ({project.acronym})</h1>
            <h2>FISMA Impact Level: {project.impact_level}</h2>
            <ControlsCompleted />
            <h3>Components</h3>
            <ComponentsList componentList={componentList} />
            {/* Possibly move export to cfacts as a molecule if it is reused elsewhere */}
            <h3>Export to CFACTS</h3>
            <p>Once you're finished with your control narratives, export them to upload to CFACTS.</p>
            <button className="usa-button">Export Control Narratives</button>
        </div>
    )
}
