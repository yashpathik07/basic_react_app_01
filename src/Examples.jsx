import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./data";
import "./Examples.css";
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("javascript");

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === "javascript"}
                    onSelect={() => handleSelect("javascript")}
                >
                    Javascript
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "python"}
                    onSelect={() => handleSelect("python")}
                >
                    Python
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "go"}
                    onSelect={() => handleSelect("go")}
                >
                    Go
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "java"}
                    onSelect={() => handleSelect("java")}
                >
                    Java
                </TabButton>
            </menu>
            <div id="example-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        </section>
    );
}
