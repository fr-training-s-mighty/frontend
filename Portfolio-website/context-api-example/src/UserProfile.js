import React, { useContext } from "react";
import { UserContext  } from "./UserContext";

const UserProfile = () =>  {
    const { user } = useContext(UserContext);

    return(
        <div>
            {user ? (
                <h1>
                    Welcome, {user.name}!
                </h1>
            ) : (
                <h1>Please Login </h1>
            )
            }
        </div>
    );
}
export default UserProfile;