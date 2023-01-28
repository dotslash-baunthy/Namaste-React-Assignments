import React from "react";

const Shimmer = () => {
    return (
        <div className="shimmerWrap">
            {Array(10)
                .fill("")
                .map((e, index) => {
                    return (
                        <div key={index} className="shimmerCard"></div>
                    )
                })}
        </div>
    )
}

export default Shimmer;