import React from 'react'
import content from "../content/content";
import Step from "./Step";

export default function Step4() {
    return (
        <div className="w-10/12 mx-auto">
            <Step name={content.steps[3].name} title={content.steps[3].title} article={content.steps[3].article}/>
        </div>
    );
}