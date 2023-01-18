import React from "react";

export const Shimmer = () => {
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