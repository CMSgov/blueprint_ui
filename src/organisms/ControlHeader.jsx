const ControlHeader = ({ control, controlId }) => {
  const noDataMessage = "No data available";
  const { title, version, family, description } = control;

  if (title) {
    return (
      <>
        <h3 className="usa-prose-h3">
          {controlId}: {title}
        </h3>
        <p>
          <b>Version:</b> {version || noDataMessage}
        </p>
        <p>
          <b>Family:</b> {family || noDataMessage}
        </p>
        <p>
          <b>Description:</b> {description || noDataMessage}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h3 className="usa-prose-h3">{controlId}:</h3>
      </>
    );
  }
};

export default ControlHeader;
