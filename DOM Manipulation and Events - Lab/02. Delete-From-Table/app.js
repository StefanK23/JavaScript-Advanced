function deleteByEmail() {

    //select input field and read value;
    const input = document.querySelector('input[name="email"]');
    // get tbody chldren;
    const rows = Array.from(document.querySelector('tbody').children);

    let removed = false;
    // repeat for every row;
    // -- select second cell;
    //-- if textContent matche input value -> remove row;
    for (const row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            removed = true;
        }
    }


    //if there is a match print "Deleted" or "not found";

    if (removed) {
        document.getElementById('result').textContent = 'Deleted.';

    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}