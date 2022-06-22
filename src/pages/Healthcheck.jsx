import { useState, useEffect} from "react";
import config from "../config";

const Healthcheck = () => {
    const [error, setError] = useState(false);
    const [status, setState] = useState('');
    useEffect(() => {
        if (status === '' ) {
            fetch(`${config.backendUrl}/healthcheck/`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((healthcheck) => {
                console.log(healthcheck)
                if (healthcheck !== undefined) {
                    return setState(healthcheck.status);
                } else {
                    return setError(true);
                }
            })
                .catch((error) => {
                    return setError(true);
                });
        }
    }, [setState]);

    if (error) {
        return <h1>Healthcheck not working</h1>;
    }
    return (
        <>
            <h1>Healthcheck</h1>
        </>
    );
};
export default Healthcheck;
