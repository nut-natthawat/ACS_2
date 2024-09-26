document.addEventListener('DOMContentLoaded', function(){
    const input = document.querySelector('#taskinput');
    const list = document.querySelector('#tasklist');

    input.addEventListener('keypress', function(event){
        if(event.key === 'Enter' && input.value !== ''){
            const newtask = document.createElement('div');
            newtask.classList.add('list-item');  

            const bin = document.createElement('img')
            bin.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_upbeneD4Naect3aBG2Xi3UEXK4AL6fCQw&s';
            bin.addEventListener('click', function(){
                list.removeChild(newtask);
            });  

            const textelement = document.createElement('line');
            textelement.textContent = input.value;
            textelement.addEventListener('click', function(){
                textelement.classList.toggle('completed');
            });
            newtask.appendChild(textelement);
            newtask.appendChild(bin);
            if (list.firstChild) {
                list.insertBefore(newtask, list.firstChild);
            } else {
                list.appendChild(newtask);
            }
            input.value = '';
        }
    });
});
