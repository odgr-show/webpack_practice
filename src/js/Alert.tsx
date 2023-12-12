import * as React from "react";

const Alert: React.FC<{ message: string }> = ({ message }) => {
    return <div>{message}</div>;
};

export default Alert;
