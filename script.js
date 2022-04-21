let htmlData = [];
fetch(`stories.json`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((story) => {
      htmlData.push(`
      <a href=${story.link}>
        <h4>${story.title}</h4>
        </a>`);
      document.querySelector("#storyHolder").innerHTML = htmlData.join(' ');
    });
  });