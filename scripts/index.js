class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }
  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    const id = ++this.id;

    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

function createHTMLActivity(activity) {
  const { id, title, description, imgUrl } = activity;

  const htmlTitle = document.createElement("h3"); //<h3><h3>
  htmlTitle.innerHTML = title; //<h3>title<h3>
  htmlTitle.classList.add("title-class"); //class="title-class"

  const htmlDescription = document.createElement("p");
  htmlDescription.innerHTML = description;

  const htmlImg = document.createElement("img");
  htmlImg.src = imgUrl;

  const containerHtml = document.createElement("div");
  containerHtml.appendChild(htmlTitle);
  containerHtml.appendChild(htmlDescription);
  containerHtml.appendChild(htmlImg);
  containerHtml.className = "card";
  containerHtml.id = "activity-card-" + id; // activity-card-1
  return containerHtml;
}

function convertAllActivities() {
  const containerActivities = document.getElementById("container-activities");
  containerActivities.innerHTML = "";
  const activities = repository.getAllActivities();
  const htmlActivities = activities.map((activity) =>
    createHTMLActivity(activity)
  );

  htmlActivities.forEach((activityhtml) => {
    containerActivities.appendChild(activityhtml);
  });
}

function handlerButton() {
  const titleInput = document.getElementById("title-input");
  const descriptionInput = document.getElementById("description-input");
  const imgInput = document.getElementById("img-input");

  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const imgValue = imgInput.value;

  if (!titleValue || !descriptionValue || !imgValue) {
    return alert("Por favor llene todos los campos");
  }
  repository.createActivity(titleValue, descriptionValue, imgValue);
  convertAllActivities();
}
const button = document.getElementById("botonActividad");
console.log(button);
