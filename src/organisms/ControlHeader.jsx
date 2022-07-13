const ControlHeader = ({ control }) => {
  return (
    <>
      <h3 className="usa-prose-h3">
        {control.controlId}: {control.controlTitle}
      </h3>
      <p>
        <b>Version:</b> {control.version}
      </p>
      <p>
        <b>Family:</b> {control.controlFamily}
      </p>
      <p>
        <b>Description:</b> {control.description}
      </p>
    </>
  );
};
export default ControlHeader;
