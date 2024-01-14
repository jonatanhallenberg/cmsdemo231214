import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Card = ({ title, description, imageData }) => {

    const image = getImage(imageData);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <GatsbyImage image={image} className="rounded-t-lg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}