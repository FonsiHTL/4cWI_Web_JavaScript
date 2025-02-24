LoadFootballTable();

   
   function LoadFootballTable() {
   
       fetch('https://api.openligadb.de/getbltable/bl1/2024')
           .then(response => response.json())
           .then((json) => {
                console.log(json);
   
               let html = "<div>";
               for (let index = 0; index < json.length; index++) {
                html += `<div data-teamId="${json[index].teamInfoId}">${json[index].teamName}</div>`;
                
               }
               html += "</div>";
   
               document.getElementById("table").innerHTML = html;
           })
   };
   

   document.getElementById("table").addEventListener("click", (event) => {
    let selectedTeamId = event.target.getAttribute("data-teamId");
    console.log("selectedTeamId", selectedTeamId);
    getNextMatchForTeam(selectedTeamId)
   });

   function getNextMatchForTeam(teamId) {
        fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`)
        .then(response => response.json())
           .then((json) => {
                console.log(json);
                let html = "<div id='nextMatch'>";
                html += `<div>${json.matchDateTime}</div>`;

                html += `<div><img width="60px" src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs. ${json.team2.teamName} <img width="60px" src="${json.team2.teamIconUrl}"/></div>`;
                html += "</div>";
                document.getElementById('nextMatch').innerHTML = html;
           })

        }