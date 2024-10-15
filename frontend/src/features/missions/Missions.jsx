import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

const Missions = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [missions, setMissions] = useState([]);
  const creatorId = Cookies.get("userId");

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/Projects/userMissions/${creatorId}`
        );
        setMissions(response.data.missions || []);
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchMissions();
  }, [creatorId]);

  const updateMissionState = async (missionId, newState) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/Projects/updateMyMission/${missionId}/${creatorId}`,
        {
          newState,
        }
      );
      if (response.data.success) {
        // Update the mission state in the UI
        setMissions((prevMissions) =>
          prevMissions.map((mission) =>
            mission._id === missionId
              ? { ...mission, status: newState }
              : mission
          )
        );
        console.log("Mission state updated successfully.");
      }
    } catch (error) {
      console.error("Error updating mission state:", error);
    }
  };

  const handleStatusChange = (missionId, currentStatus) => {
    const nextStatus = getNextStatus(currentStatus);
    if (nextStatus) {
      updateMissionState(missionId, nextStatus);
    }
  };

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case "not started":
        return "in progress";
      case "in progress":
        return "completed";
      case "completed":
        return null; // No next state for completed missions
      default:
        return null;
    }
  };

  return (
    <div
      className={`p-4 container ${
        darkMode ? "bg-dark-background" : "bg-light-background"
      } rounded-lg shadow-md`}
    >
      <h2
        className={`mt-4 text-2xl font-bold ${
          darkMode ? "text-dark-primary" : "text-light-primary"
        }`}
      >
        Missions:
      </h2>
      <ul
        className={`w-full ${
          darkMode ? "text-dark-primary" : "text-light-primary"
        }`}
      >
        {missions.length === 0 ? (
          <li className="p-4 text-center">No missions to display.</li>
        ) : (
          missions.map((mission) => (
            <li
              key={mission._id}
              className={`p-4 my-3 flex flex-row justify-between border-2 rounded-xl transition-transform transform hover:scale-105 ${
                darkMode
                  ? "bg-dark-card text-dark-text border-dark-primary"
                  : "bg-light-card text-light-text border-light-primary"
              } shadow-md`}
            >
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <strong className="text-xl">{mission.title}</strong>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      mission.status
                    )}`}
                  >
                    {mission.status}
                  </span>
                </div>
                <p className="text-gray-700">{mission.description}</p>
                <p className="text-sm flex flex-row justify-between">
                  <span className="font-semibold">
                    Created At:{" "}
                    {new Date(mission.createdAt).toLocaleDateString()}
                  </span>
                  {mission.status != "completed" ? (
                    <button
                      className={`py-2 px-2 rounded-lg cursor-pointer ${
                        darkMode
                          ? "bg-dark-primary text-dark-bg border-2 border-dark-primary hover:border-dark-primary hover:bg-dark-bg hover:text-dark-primary"
                          : "bg-light-primary text-light-bg border-light-primary hover:border-light-bg hover:bg-light-bg hover:text-light-primary"
                      }`}
                      onClick={() =>
                        handleStatusChange(mission._id, mission.status)
                      }
                      disabled={mission.status == "completed"} // Disable if already completed
                    >
                      {mission.status === "completed"
                        ? "Completed"
                        : "Next State"}
                    </button>
                  ) : (
                    <div></div>
                  )}
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const getStatusStyle = (status) => {
  switch (status) {
    case "not started":
      return "bg-yellow-500 text-white";
    case "in progress":
      return "bg-blue-500 text-white";
    case "completed":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default Missions;
