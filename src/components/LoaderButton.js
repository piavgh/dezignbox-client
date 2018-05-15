import React from "react";
import {Button} from "reactstrap";
import "./LoaderButton.css";

export default ({
                    isLoading,
                    text,
                    loadingText,
                    className = "",
                    disabled = false,
                    ...props
                }) =>
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <span><i className="fas fa-spinner fa-spin"/></span>}
        {!isLoading ? text : loadingText}
    </Button>;
