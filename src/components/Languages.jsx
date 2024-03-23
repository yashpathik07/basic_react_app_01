import React from "react";
import { LANGUAGES } from "../data";
import Language from "./Language";
import "../components/Languages.css";

export default function Languages() {
    return (
        <section id="languages">
            <ul>
                {LANGUAGES.map((language) => (
                    <Language key={language.title} {...language} />
                ))}
            </ul>
        </section>
    );
}
