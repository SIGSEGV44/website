// script.js
function updateClock() {
    const now = new Date();
    
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
    
    const finalStr = `${timeStr}, ${dateStr}`;
    
    document.getElementById('clock').textContent = finalStr;
}

setInterval(updateClock, 1000);
updateClock(); 
