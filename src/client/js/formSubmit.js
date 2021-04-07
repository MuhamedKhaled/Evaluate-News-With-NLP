function  submitForm(event) {
    event.preventDefault()

    // URL to test
    const formUrl = document.getElementById('url-field').value

    const main = document.querySelector('main').classList;

    // Only send to API if url is correct
    if (Client.checkUrl(formUrl)==true){
        Client.updateStatus('stat_ok', 'Loading from Meaning cloud...');

       fetch('http://localhost:8081/read',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({url:formUrl})
        })
        .then(res => res.json())
        .then(function(res) {

            //Update status
            Client.updateStatus('stat_ok', 'Data Recived');

            //show results
            main.toggle('show_results');
            
            let polarOrigin = res.confidence;
            let subjOrigin = res.confidence;
            let popularity = res.score_tag;
            if(polarOrigin < 1) {
                polarOrigin = polarOrigin.toFixed(2)
            } 

            if(subjOrigin < 1) {
                subjOrigin = subjOrigin.toFixed(2)
            }
            
            let pop_map = new Map();
            pop_map.set('P+','strong positive');
            pop_map.set('P','positive');
            pop_map.set('NEU','neutral');
            pop_map.set('N','negative');
            pop_map.set('N+','strong negative');
            pop_map.set('NONE','without polarity');


            //Show results
            document.getElementById('polarity').innerHTML = pop_map.get(res.score_tag);
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('polar-confidence').innerHTML = polarOrigin
            document.getElementById('subj-confidence').innerHTML = subjOrigin
            
        })
    } 
}


export { submitForm }
