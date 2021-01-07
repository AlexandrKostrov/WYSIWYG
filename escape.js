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
    const edetiableAreaContent = editableArea.innerHTML;
    console.log(edetiableAreaContent);
    edetiableAreaContent.textContent = escape(editableArea.textContent);  
    editableArea.innerHTML = edetiableAreaContent;    
    editableArea.focus();   
   
    setTimeout(() => {  
        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToEnd(); 
    },0);
}, false);    