import { Link, useLocation } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function ControlsCompleted({
  numControlsCompleted,
  numControlsTotal,
}) {
  const params = useLocation();
  const controlsUrl = params.pathname + "/controls";
  const numControlsIncomplete = numControlsTotal - numControlsCompleted;
  const data = {
    datasets: [
      {
        data: [numControlsCompleted, numControlsIncomplete],
        backgroundColor: ["rgba(77, 128, 85, 1)", "rgba(220, 222, 224, 1)"],
      },
    ],
  };

  return (
    <div className="controls-completed-section">
      <div className="percent-complete-graphic">
        <Doughnut data={data} options={{ cutout: "80%" }} />
      </div>
      <div className="right-side-content">
        <div className="controls-completed-header">Controls Completed</div>
        Review and update control narratives as you iteratively build your
        system.
        <Link to={controlsUrl}>
          <button className="usa-button">Manage Controls</button>
        </Link>
      </div>
    </div>
  );
}
