const ControlHeader = ({ control, controlId }) => {
  const noDataMessage = "No data available";
  const { title, version, family, description } = control;

  if (title) {
    return (
      <>
        <div className="control-id-title">
          {controlId}: {title}
        </div>
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
    return <div className="control-id-title">{controlId}:</div>;
  }
};

export default ControlHeader;
