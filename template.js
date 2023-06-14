export function template(obj) {
    let tempalteString;
    let wordLimit = 250;
    if (obj.media_type == "other") {
        obj.url == "/IMAGES/no-image-available.jpeg";
        obj.media_type = "image";
    }
    if (obj.media_type == "image") {
        tempalteString = `<div class="post">
    <h1 class="post-heading">${obj.title}</h1>
    <div class="post-details">
        <span class="post-date">${obj.FullDate}</span>
        <span class="person-name">${(obj.copyright == undefined) ? "" : obj.copyright}</span>
    </div><div class="image-container-template">
    <img onerror="(this.src='/IMAGES/no-image-available.jpeg')" src="${(obj.hdurl == undefined) ? (obj.url == undefined) ? "/IMAGES/no-image-available.jpeg" : obj.url : obj.hdurl}" alt="Content Image" class="post-image"> 
    </div>
    <p class="post-description">${(obj.explanation).slice(0, wordLimit) + '...'}
    </br><a href="./cosmos.html?query=${obj.date}" class="hyper-link my-link">read more</a>
    </p>
    </div>`
    } else if (obj.media_type == "video") {

        tempalteString = `<div class="post">
        <h1 class="post-heading">${obj.title}</h1>
        <div class="post-details">
            <span class="post-date">${obj.FullDate}</span>
            <span class="person-name">${(obj.copyright == undefined) ? "" : obj.copyright}</span>
        </div><div class="image-container-template">
        <iframe src="${(obj.hdurl == undefined) ? obj.url : obj.hdurl}" class="post-video"> </iframe>
        </div>
        <p class="post-description">${(obj.explanation).slice(0, wordLimit) + '...'}</p>
        </br><a href="./cosmos.html?query=${obj.date}" class="hyper-link my-link">read more</a>
        </div>`
    } else {
        tempalteString = `<div class="post">
        <h1 class="post-heading">${obj.title}</h1>
        <div class="post-details">
            <span class="post-date">${obj.FullDate}</span>
            <span class="person-name">${(obj.copyright == undefined) ? "" : obj.copyright}</span>
        </div>
        <img src="${(obj.hdurl == undefined) ? obj.url : obj.hdurl}" alt="Content Image" class="post-image"> 
        <div>
        <p class="post-description">${(obj.explanation).slice(0, wordLimit) + '...'}</p>
        </div>`
    }
    return tempalteString;
}