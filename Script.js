function addPost() {
  let text = document.getElementById("postText").value;

  if (text.trim() === "") return;

  let post = document.createElement("div");

  post.innerHTML = `
    <p>${text}</p>

    <button onclick="likePost(this)">❤️ 0</button>

    <input type="text" placeholder="Comment...">

    <button onclick="addComment(this)">💬 Comment</button>

    <div class="comments"></div>
  `;

  document.getElementById("feed").prepend(post);

  document.getElementById("postText").value = "";
}

function likePost(btn) {
  let count = parseInt(btn.innerText.split(" ")[1]);
  btn.innerText = `❤️ ${count + 1}`;
}

function addComment(btn) {
  let input = btn.previousElementSibling;
  let comments = btn.nextElementSibling;

  if (input.value.trim() === "") return;

  let p = document.createElement("p");
  p.innerText = input.value;

  comments.appendChild(p);

  input.value = "";
}
function addPost() {
  let text = document.getElementById("postText").value;
  let image = document.getElementById("imageInput").files[0];

  if (text.trim() === "" && !image) return;

  let post = document.createElement("div");

  let imageHtml = "";

  if (image) {
    imageHtml = `<img src="${URL.createObjectURL(image)}" width="250">`;
  }

  post.innerHTML = `
    <p>${text}</p>

    ${imageHtml}

    <button onclick="likePost(this)">❤️ 0</button>

    <input type="text" placeholder="Write a comment">

    <button onclick="addComment(this)">💬 Comment</button>

    <div class="comments"></div>
  `;

  document.getElementById("feed").prepend(post);

  document.getElementById("postText").value = "";
  document.getElementById("imageInput").value = "";
}function addPost() {
  let text = document.getElementById("postText").value;

  if (text.trim() === "") return;

  let post = document.createElement("div");

  post.innerHTML = `
    <p>${text}</p>

    <button onclick="likePost(this)">❤️ 0</button>

    <input type="text" placeholder="Write a comment">

    <button onclick="addComment(this)">💬 Comment</button>

    <div class="comments"></div>
  `;

  document.getElementById("feed").prepend(post);

  document.getElementById("postText").value = "";
}

function likePost(btn) {
  let count = parseInt(btn.innerText.split(" ")[1]);

  btn.innerText = `❤️ ${count + 1}`;
}

function addComment(btn) {
  let input = btn.previousElementSibling;

  let comments = btn.nextElementSibling;

  if (input.value.trim() === "") return;

  let p = document.createElement("p");

  p.innerText = input.value;

  comments.appendChild(p);

  input.value = "";
}function addPost(){
  let text=document.getElementById("postText").value;

  if(text==="") return;

  let div=document.createElement("div");

  div.innerText=text;

  document.getElementById("feed").prepend(div);

  document.getElementById("postText").value="";
}
