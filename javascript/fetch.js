getposts();

async function getposts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const posts = await res.json();

      const reducedposts = posts.slice(0,5)

      const postsdiv = document.getElementById("posts");
      
      reducedposts.forEach(post =>{
            const p = document.createElement("p");
            p.textContent = post.body;
            postsdiv.appendChild(p);
      })
}


