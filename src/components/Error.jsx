import { useRouteError } from "react-router-dom"

function Error(){

    const err = useRouteError();
    console.log(err);

    return (
        <>
            <h1>OOPS!!</h1>
            <h2>Please Enter Correct Path</h2>
            <h3>{err.status} {err.statusText}</h3>
            <h3>{err.data}</h3>
        </>
    )
}

export default Error