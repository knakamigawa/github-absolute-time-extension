function listUpAndExecute() {
    Array.from(document.getElementsByTagName('relative-time')).forEach(apply);
    Array.from(document.getElementsByTagName('time-ago')).forEach(apply);
}

function apply(node) {
    let date = new Date(node.getAttribute('datetime'));
    let absDateTime = date.toLocaleString('ja-JP', {timeZone:'JST'});
    node.innerHTML +=  '(' + absDateTime + 'JST)';
    node.shadowRoot.innerHTML += '(' + absDateTime + 'JST)';
}

addEventListener('load', listUpAndExecute);
