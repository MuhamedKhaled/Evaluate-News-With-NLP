function checkUrl(inputUrl) {
    // get fields for update status
    const urlField = document.getElementById('url-field');
    const urlStatus = document.getElementById('url-status');
    const status = document.getElementById('status');
    const main = document.querySelector('main').classList;
    
    // Clean status from previous checks
    status.innerHTML = '';
    if(main.contains('show_results')){
        main.remove('show_results');
    }
    
    Client.updateStatus('stat_ok', 'Checking the url');
   
    //Pattern for a valid URL
    const pattern =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    
    if(pattern.test(inputUrl)) {
        urlStatus.innerText = 'The URL is correct';
        urlStatus.className = 'input-ok';

        Client.updateStatus('stat_ok', 'The URL format is valid');
        return true;
        
    } else {
        urlStatus.innerText = 'Please enter a valid url';
        urlStatus.className = 'input-error';

        Client.updateStatus('stat_error', `The URL is not valid`);
        return false;
    }

}

export { checkUrl }
 