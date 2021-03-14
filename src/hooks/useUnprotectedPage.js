import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeedPage } from "../routes/Coordinators";

const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToFeedPage(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
