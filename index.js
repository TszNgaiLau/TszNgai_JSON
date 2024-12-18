async function getMultipleUsers() {
    for (let i = 1; i <= 10; i++) {
        const [fir, sec, thi] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/' + i),
            fetch('https://jsonplaceholder.typicode.com/comments/' + i),
            fetch('https://jsonplaceholder.typicode.com/posts/' + i)
        ]);

        let response1 = await fir.json();
        let response2 = await sec.json();
        let response3 = await thi.json();

        let user = "User: " + response1.username;
        let comment = "Comment: "+ response2.body;
        let post = "Post: " + response3.body;

        let para = document.createElement("p");
        para.innerHTML = user + "<br>" + comment + "<br>" + post;
        document.getElementById("container").appendChild(para);
    }
    
}

getMultipleUsers()
    .then(users => {
        console.log("Worked")
    })
    .catch(error => {
        console.log("Error")
    })