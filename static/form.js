function processing(theForm){
    var checkboxes = document.getElementsByName('q');
    var selected = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
         }
    }
    console.log(selected); 
}
