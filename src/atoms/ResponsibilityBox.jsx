// import PropTypes from "prop-types"
export default function ResponsibilityBox(responsibility) {
  // const responsibility = {
  //   'none': {
  //     title:
  //       "Fully Inherited Control: No system responsibility for addressing this control",
  //     content: [
  //       "This control narrative cannot be edited. Your only responsibility is to review for accuracy.",
  //       "You can disable it if it does not apply to your system.",
  //       "If you add a custom control narrative or a component, you will be enhancing the control, which will change the control status from Fully Inherited to a Shared Responsibility.",
  //     ],
  //   },
  //   'some': {
  //     title:
  //       "Shared / Hybrid Control: System is partially responsible for addressing this control",
  //     content: [
  //       "The inherited control narrative cannot be edited. Your only responsibility is to review for accuracy. You can disable it if it does not apply to your system.",
  //       "System components provide template narratives to help you address controls.",
  //       "Review and edit the template narrative(s) to match your system.",
  //       "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
  //     ],
  //   },
  //   'all': {
  //     title:
  //       "Allocated Control: System is fully responsible for addressing this control",
  //     content: [
  //       "System components provide template narratives to help you address controls.",
  //       "Review and edit the template narrative(s) to match your system. You can disable it if it does not apply to your system.",
  //       "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
  //     ],
  //   }
  // }
  const NO_RESPONSIBILTY = {
    title:
      "Fully Inherited Control: No system responsibility for addressing this control",
    content: [
      "This control narrative cannot be edited. Your only responsibility is to review for accuracy.",
      "You can disable it if it does not apply to your system.",
      "If you add a custom control narrative or a component, you will be enhancing the control, which will change the control status from Fully Inherited to a Shared Responsibility.",
    ],
  };
  const SOME_RESPONSIBILTY = {
    title:
      "Shared / Hybrid Control: System is partially responsible for addressing this control",
    content: [
      "The inherited control narrative cannot be edited. Your only responsibility is to review for accuracy. You can disable it if it does not apply to your system.",
      "System components provide template narratives to help you address controls.",
      "Review and edit the template narrative(s) to match your system.",
      "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
    ],
  };
  const ALL_RESPONSIBILTY = {
    title:
      "Allocated Control: System is fully responsible for addressing this control",
    content: [
      "System components provide template narratives to help you address controls.",
      "Review and edit the template narrative(s) to match your system. You can disable it if it does not apply to your system.",
      "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
    ],
  };

  return (
    <div className="responsibility-box--yellow">
      <div>
        {NO_RESPONSIBILTY.title}
        <ul className="responsibility-list">
          {NO_RESPONSIBILTY.content.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ResponsibilityBox.propTypes = {
//   responsibility: PropTypes.oneOf(['none', 'some', 'all']),
// }
