import React from "react";

const About = ({ users }) => {

    console.log("about rendering...");
    return (
        <div>
            <h1>about this side..</h1>
        </div>
    );
};

export default React.memo(About)