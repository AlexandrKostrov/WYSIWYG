(function() {
  const editableArea = document.querySelector(".edit-area");

   Array.from(document.querySelectorAll('.toolkit button')).forEach(button => {
     button.addEventListener('click', function(e) {
        console.log(this.dataset);
        switch(this.dataset['role']) {
          case 'h1':
          case 'h2':
          case 'p':
            document.execCommand('formatBlock', false, this.dataset['role']);
            break;
          default:
            document.execCommand(this.dataset['role'], false, null);
            break;
        }  
      });
   });
  })();

