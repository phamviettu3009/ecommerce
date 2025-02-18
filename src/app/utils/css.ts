export const classes = (styles: any, classes: string) => {
    const list = classes.split(" ");

    classes = "";
    for (const className of list) {
        classes += `${styles[className] ?? className} `;
    }

    return classes.trimEnd();
};
