//clear form button
let main = funcition(){

document.getElementById('clear-btn').addEventListener('click', function(){
    let fields = document.querySelectorAll('#form-register input');
    
    fields.forEach(field => {
        field.value = '';
    });
});

}
main();