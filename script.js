function updateCalender() {
    const now = new Date();
    const day = now.getDate();
    const montNames = ["January", "February", "March", "Arpil", "May", "June", "July", "Augest", "September", 
        "October", "November", "December"]
        const month = montNames[now.getMonth()];

        document.getElementById("Day").textContent = day;
        document.getElementById("Month").textContent = month;
    
}

updateCalender();