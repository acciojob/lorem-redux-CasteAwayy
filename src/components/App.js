import React, { useEffect } from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { created } from "../dataSlice";

const App = () => {
    const dispatch = useDispatch();
    const { data, state: isLoading } = useSelector((state) => state);
    const [randomData] = data;
    console.log(randomData);
    useEffect(() => {
        dispatch(created());
    }, []);
    if (isLoading == "loading") return <p>Loading....</p>;
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "1rem",
            }}
        >
            {randomData &&
                randomData.map((item, idx) => {
                    return (
                        <div style={{ border: "1px solid black" }} key={idx}>
                            <p>
                                <b>Title: </b> {item.title}
                            </p>
                            <p>
                                <b>Body: </b> {item.content}
                            </p>
                        </div>
                    );
                })}

            {/* <div>
                <p>
                    <b>Title: </b> this is title
                </p>
                <p>
                    <b>Body: </b> this is title
                </p>
            </div>

            <div>
                <p>
                    <b>Title: </b> this is title
                </p>
                <p>
                    <b>Body: </b> this is title
                </p>
            </div>

            <div>
                <p>
                    <b>Title: </b> this is title
                </p>
                <p>
                    <b>Body: </b> this is title
                </p>
            </div> */}
        </div>
    );
};

export default App;
