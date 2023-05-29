import { useState } from "react";
const useFullWidth = () => {
    const [isFullWidth, setFullWidth] = useState(false);

    const handleFullWidth = () => {
        setFullWidth(!isFullWidth);
    };
    return {
        handleFullWidth,
        isFullWidth,
    };
};

export { useFullWidth };
