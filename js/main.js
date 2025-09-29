import { blogs } from "./blogs.js"

const container = document.getElementById("blog-container")

// console.log(blogs)

blogs.forEach((blog) => {
  const card = document.createElement("article")
  card.className = "blog-card";
  card.innerHTML = `${blog.image ? `<img src="${blog.image}" alt="${blog.title}">` : ""}
        <div class="blog-content">
            <h3>${blog.title}</h3>
            <p>Posted on ${blog.date}</p>
            <span><a href="#" class="read-more" data-index="${blog.id}" data-bs-toggle="modal" data-bs-target="#blogModal">Read more →</a></span>
        </div>`
  container.appendChild(card);
});


const blogModalLabel = document.getElementById("blogModalLabel")
const blogModalImage = document.getElementById("blogModalImage")
const blogModalDate = document.getElementById("blogModalDate")
const blogModalContent = document.getElementById("blogModalContent")

document.querySelectorAll('.read-more').forEach(btn => {

    btn.addEventListener('click', (event) => {

        event.preventDefault()
        
        const index = btn.dataset.index;
        const blog = blogs[index];

        blogModalLabel.textContent = blog.title
        blogModalImage.src = blog.image
        // blogModalDate.textContent = `Posted on ${blog.date}`
        blogModalContent.textContent = blog.desc
        
    })


})