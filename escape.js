function escape(str) {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return str.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    });
};
const editableArea = document.querySelector(".edit-area");

editableArea.addEventListener("input", function(event) {
    console.log("input event fired");
    console.log(event);
    console.log(editableArea.innerHTML);
    editableArea.innerHTML = escape(editableArea.innerHTML);
}, false);