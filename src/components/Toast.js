import React from "react";
import { toast } from "react-toastify";
import 'react-toastify\dist\ReactToastify.css';

toast.configure()
const Toast = () => {

  const notify = () => {
    toast("successfully submitted", {position: toast.POSITION.TOP_RIGHT});
  }

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
};

export default Toast;
