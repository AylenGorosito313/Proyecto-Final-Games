import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";

export default function Profile() {
    const dispatch = useDispatch();
    const { userActual } = useSelector((state) => state.prueba);

    useEffect(() => {
        let userID = window.localStorage.getItem("id");
        dispatch(geUserActual(userID));
    }, []);

    let name = userActual.name;

    return (
        <div>
            <div>
                <div>AVATAR</div>
                <div><img src="" alt="" /></div>
                <div><button>Change Avatar</button></div>
                <div><button>Change Profile</button></div>
            </div>
            <div>
                <div>USERNAME</div>
                <div>{userActual.name}</div>
                <div><button>Change Name</button></div>
            </div>
            <div>
                <div>COMPLETE NAME</div>
                <div><input type="text" placeholder="Name"/></div>
                <div><input type="text" placeholder="LastName"/></div>
            </div>
            <div>
                <div>BIRTHDAY</div>
                <div><select name="day" id="day"></select></div>
                <div><select name="month" id="month"></select></div>
                <div><select name="year" id="year"></select></div>
            </div>
            <div>
                <div>LOCATION</div>
                <div><select name="city" id="city"></select></div>
            </div>
        </div>
    );
}
