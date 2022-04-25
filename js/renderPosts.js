

export function renderPosts(posts) {

    const container = document.getElementById("postDisplay");

    container.innerHTML = "";

    posts.forEach(post => {

        let title = post.title.rendered;
        let date = post.date;
        let content = post.content.rendered;

        let renderContainer = document.createElement("div");
        renderContainer.classList.add("flex", "flexColumn", "contentContainer")
        container.append(renderContainer);

        let titleH = document.createElement("h2");
        titleH.innerHTML = title;

        let dateContainer = document.createElement("p");
        dateContainer.innerHTML = date;

        let contentContainer = document.createElement("div");
        contentContainer.classList.add("postContentContainer");
        contentContainer.innerHTML = content;

        renderContainer.append(titleH, dateContainer, contentContainer);

    });

    let removeButton = document.getElementById("removePosts");
    removeButton.style.display = "block";

    document.getElementById("loadingContainer").style.display = "none";

}

export function removePosts() {
    const container = document.getElementById("postDisplay");
    container.innerHTML = "";

    let removeButton = document.getElementById("removePosts");
    removeButton.style.display = "none";
}