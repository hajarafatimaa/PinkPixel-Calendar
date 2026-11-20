function updateCalender() {
    const now = new Date();
    const day = now.getDate();
    const montNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
        "October", "November", "December"]
        const month = montNames[now.getMonth()];

        document.getElementById("Day").textContent = day;
        document.getElementById("Month").textContent = month;
    
}

updateCalender();
