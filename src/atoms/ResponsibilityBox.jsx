import classNames from "classnames";
import PropTypes from "prop-types";

export default function ResponsibilityBox({ responsibility }) {
  const RESPONSIBILITY_MAP = {
    Inherited: {
      title:
        "Fully Inherited Control: No system responsibility for addressing this control",
      content: [
        "This control narrative cannot be edited. Your only responsibility is to review for accuracy.",
        "You can disable it if it does not apply to your system.",
        "If you add a custom control narrative or a component, you will be enhancing the control, which will change the control status from Fully Inherited to a Shared Responsibility.",
      ],
    },
    Hybrid: {
      title:
        "Shared / Hybrid Control: System is partially responsible for addressing this control",
      content: [
        "The inherited control narrative cannot be edited. Your only responsibility is to review for accuracy. You can disable it if it does not apply to your system.",
        "System components provide template narratives to help you address controls.",
        "Review and edit the template narrative(s) to match your system.",
        "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
      ],
    },
    Allocated: {
      title:
        "Allocated Control: System is fully responsible for addressing this control",
      content: [
        "System components provide template narratives to help you address controls.",
        "Review and edit the template narrative(s) to match your system. You can disable it if it does not apply to your system.",
        "You can also visit the Component Library and search for a component that matches your system and addresses this control.",
      ],
    },
  };

  const title = RESPONSIBILITY_MAP[responsibility].title;
  const content = RESPONSIBILITY_MAP[responsibility].content;

  const boxClass = classNames({
    "responsibility-box--yellow":
      responsibility === "Hybrid" || responsibility === "Allocated",
    "responsibility-box--green": responsibility === "Inherited",
  });

  return (
    <div className={boxClass} data-testid="responsibility_box">
      <div>
        <b>{title}</b>
        <ul className="responsibility-list">
          {content.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ResponsibilityBox.propTypes = {
  responsibility: PropTypes.oneOf(["Inherited", "Hybrid", "Allocated"])
    .isRequired,
};
