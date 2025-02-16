import React, { useEffect } from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { created } from "../dataSlice";

const App = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);
    const [postsData] = data;
    console.log(postsData);
    useEffect(() => {
        dispatch(created());
    }, []);
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1> A short Naration of Lorem Ipsum</h1>
                <h4>
                    Below Contains A title and Body gotten from
                    <br />a random API, Please take your time to Review
                </h4>
            </div>
            <ul>
                {postsData &&
                    postsData.map((post, idx) => {
                        return (
                            <li key={idx}>
                                <div className="title">
                                    <strong>Title</strong> :{post.title}
                                </div>
                                <br />
                                <div className="body">
                                    <strong>Body</strong> :{post.body}
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default App;
