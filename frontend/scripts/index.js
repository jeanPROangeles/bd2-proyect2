document.getElementById('form').onsubmit = function(e){
    e.preventDefault();
    const query = document.getElementById('query');
    const query_text = query.value;
    console.log('query: ', query_text);
    fetch('http://127.0.0.1:5050/score/'+query_text ,{    
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(function(response){
        const page = 1;
        window.location.href = "http://127.0.0.1:5050/retrieve/page" + page + "/query=" + query_text;
  
    });
}



