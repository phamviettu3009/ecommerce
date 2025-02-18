import { classes } from "@/app/utils/css";
import React from "react";
import styles from "./styles.module.scss";
import "@/app/utils/string.extensions";

type DescriptionPropsType = {
    descriptionHtml: string;
};

function Description({ descriptionHtml }: DescriptionPropsType) {
    if (descriptionHtml.isEmpty()) {
        return null;
    }

    return (
        <section className={classes(styles, "card-view prod-info-view mt-3")}>
            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        </section>
    );
}

export default Description;
