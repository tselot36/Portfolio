export const DisplayCharacterCount = (event) => {
    const textarea = event.target;
    const valueLength = textarea.value.length;
    const maxChars = parseInt(textarea.getAttribute("data-max-chars"));
    const remainingChars = maxChars - valueLength;

    if (remainingChars >= 0) {
        textarea.nextElementSibling.innerHTML = `${remainingChars}/140`;
    } else {
        textarea.nextElementSibling.innerHTML = "Exceeded character limit!";
    }
};