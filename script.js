const btn = document.querySelectorAll('.buttons');
const body = document.querySelectorAll('body');

btn.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        switch (e.target.id) {
            case 'aqua':
                document.body.style.backgroundColor = "aqua";
            break;
            case 'green':
                document.body.style.backgroundColor = "green";
            break;
            case 'pink':
                document.body.style.backgroundColor = "pink";
            break;
            case 'blue':
                document.body.style.backgroundColor = "blue";
            break;
            case 'red':
                document.body.style.backgroundColor = "red";
            break;
        
            default:
                break;
        }
        // if(e.target.id === 'aqua'){
        //     document.body.style.backgroundColor = e.target.id;
        // }else if(e.target.id === 'green'){
        //     document.body.style.backgroundColor = e.target.id;
        // }else if(e.target.id === 'pink'){
        //     document.body.style.backgroundColor = e.target.id;
        // }else if(e.target.id === 'blue'){
        //     document.body.style.backgroundColor = e.target.id;
        // }else if(e.target.id === 'red'){
        //     document.body.style.backgroundColor = e.target.id;
        // }
    })
});