import { Link, useLocation } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function ControlsCompletedCTA({
  numControlsComplete,
  numControlsTotal,
}) {
  const params = useLocation();
  const controlsUrl = params.pathname + "/controls";
  const numControlsIncomplete = numControlsTotal - numControlsComplete;
  const percentControlsComplete = Math.floor(
    (numControlsComplete / numControlsTotal) * 100
  ); // round down to prevent inaccurate "100% complete" feedback as num complete controls near total
  const data = {
    datasets: [
      {
        data: [numControlsComplete, numControlsIncomplete],
        backgroundColor: ["rgba(77, 128, 85, 1)", "rgba(220, 222, 224, 1)"],
      },
    ],
  };

  return (
    <div
      className="controls-completed-section"
      data-testid="controls_completed_cta"
    >
      <div
        className="percent-complete-graphic"
        data-testid="percent_complete_graphic"
      >
        <Doughnut data={data} options={{ cutout: "80%" }} />
        <div className="percent-complete-text">
          {percentControlsComplete + "%"}
        </div>
      </div>
      <div className="right-side-content">
        <div className="controls-completed-header">
          {numControlsComplete} of {numControlsTotal} Controls Completed
        </div>
        Review and update control narratives as you iteratively build your
        system.
        <div>
          <Link to={controlsUrl}>
            <button className="usa-button">Manage Controls</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
