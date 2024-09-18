console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


const postArticle = document.createElement("A");
postArticle.classList.add("post");

const postContent = document.createElement("P");
postContent.classList.add("post__content");
postContent.textContent = "Lorem ipsum dolor, sit amet consectetur bla bla bla.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@JaneDoe2000";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";

document.body.append(postArticle);

postArticle.append(postContent);
postArticle.append(postFooter);

postFooter.append(postUsername);
postFooter.append(postButton);
postButton.addEventListener("click", handleLikeButtonClick);    
// hier am besten eine universlle Lösung finden, weil man sonst bei jedem neuen Post einen eventListener braucht


// vielleicht besser: 
// const allLikeButtons = document.querySelectorAll('post__button');

// allLikeButtons.addEventListener("click", handleLikeButtonClick);

// -> funktioniert nicht -> eventuell funktioniert das nur mit loops -> aber das hatten wir noch nicht
