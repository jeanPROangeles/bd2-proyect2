document.getElementById('formpage').onsubmit = function(e){
    e.preventDefault();
    const query = document.getElementById('querysearch');
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
        return response.json();
    });
}

document.onreset = function(e){
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5050/";
}

function next(query, npage){

    const value = query;
    const Npage = parseInt(npage, 10) + 1;
    try{
        fetch('http://127.0.0.1:5050/retrieve/page'+Npage + '/query=' + value, {
            method : 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(function(response){
            window.location.href = "http://127.0.0.1:5050/retrieve/page" + Npage + "/query=" + value;
            return response.json();
        });
    }
    catch(ex){
        const page = Npage - 1;
        window.location.href = "http://127.0.0.1:5050/retrieve/page" + page + "/query=" + value;
    }
}

function previous(query, npage){

    const value = query;
    const Npage = parseInt(npage, 10) - 1;
    if(Npage < 1){
        const page = Npage + 1;
        window.location.href = "http://127.0.0.1:5050/retrieve/page" + page + "/query=" + value;
    }
    else{
        fetch('http://127.0.0.1:5050/retrieve/page'+Npage + '/query=' + value, {
            method : 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(function(response){
            window.location.href = "http://127.0.0.1:5050/retrieve/page" + Npage + "/query=" + value;
            return response.json();
        });
    }
}