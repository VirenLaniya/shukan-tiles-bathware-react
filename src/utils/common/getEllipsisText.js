const getEllipsisText = (text, maxLength) => {
    if (text == null) {
        return "";
    }
    if (text.length <= maxLength) {
        return text;
    }
    text = text.substring(0, maxLength);
    // const last = text.lastIndexOf(" ");
    // text = text.substring(0, last);
    return text + "...";
}

export default getEllipsisText;