import { useRouteError, useNavigate } from "react-router-dom";
import './style.css';

function Error() {
  const err = useRouteError();
  const navigate = useNavigate(); 

  
  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <>
      <div>
        <h1>OOPS!!</h1>
        <h2>Please Enter Correct Path</h2>
        <h3>{err.status} {err.statusText}</h3>
        <h3>{err.data}</h3>
        <button onClick={handleGoHome}>Back to Homepage</button>
      </div>
    </>
  );
}

export default Error;
