// Update status ordered list with a message and color green or red
function updateStatus(type='type_ok',message) {
    const statusList = document.getElementById('status');
    const htmlTextToAdd = `<li class="${type}">${message}</li>`;
    statusList.insertAdjacentHTML('beforeend', htmlTextToAdd);
}

export { updateStatus }
