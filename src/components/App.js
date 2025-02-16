import React, { useEffect } from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { created } from "../dataSlice";

const App = () => {
    const dispatch = useDispatch();
    const { data, state: isLoading } = useSelector((state) => state);
    const [randomData] = data;
    useEffect(() => {
        dispatch(created());
    }, []);
    return (
        <>
            <h1>A short Naration of Lorem Ipsum</h1>
            <h4>
                Below Contains A title and Body gotten froma random API, Please
                take your time to Review
            </h4>
            {isLoading === "loading" && <h4>loading...</h4>}
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
                                        <p className="title">
                                            <b>Title :</b>sunt aut facere
                                            repellat provident occaecati
                                            excepturi optio reprehenderit
                                        </p>
                                        <p className="body">
                                            <b>Body :</b>
                                            {
                                                "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                                            }
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
