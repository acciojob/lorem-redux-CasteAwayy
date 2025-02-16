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
    return (
        <>
            <h1>A short Naration of Lorem Ipsum</h1>
            {isLoading === "loading" && <h4>Loading...</h4>}
            {isLoading === "idle" && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                        gap: "1rem",
                    }}
                >
                    <ul>
                        {randomData &&
                            randomData.map((item, idx) => {
                                return (
                                    <li
                                        style={{ border: "1px solid black" }}
                                        key={idx}
                                    >
                                        <p>
                                            <b>Title: </b> {item.title}
                                        </p>
                                        <p>
                                            <b>Body: </b> {item.content}
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
        </>
    );
};

export default App;
