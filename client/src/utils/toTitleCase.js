// taken from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
const toTitleCase = (string) => {
    return string.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    )
}

export default toTitleCase;