document.getElementById("btnLoad").addEventListener("click", function(){
 LoadData();
});


function LoadData() {

    fetch('https://67b844b3699a8a7baef35a63.mockapi.io/Todo')
        .then(response => response.json())
        .then((json) => {


            let html = [];

            json.forEach((Todo) => {

                html.push(
                    "<div><div>" +
                    Todo.responsible +
                    "</div> <img src='" +
                    Todo.avatar +
                    "?id=" +
                    Math.random() + 
                    " '/><div>------------------------------------</div></div>"




                )

            });
            document.getElementById('content').innerHTML = html.join("");
        })
};

