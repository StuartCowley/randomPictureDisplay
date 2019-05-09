let wrapper = document.getElementById("wrapper");

// BUG: When using filter same image is always returned
let picture = () => {
  let content = document.getElementById("content");
  if (!content.value) {
    let pic = new Image();
    let randomNum = Math.floor(Math.random() * 600) + 1;
    pic.src = "https://source.unsplash.com/random/?sig=" + randomNum;
    return pic;
  } else {
    let pic = new Image();
    pic.src = "https://source.unsplash.com/random/?" + content.value;
    return pic;
  }
};

function submitButtonpress() {
  let number = document.getElementById("numBoxes").value;
  for (i = 0; i < number; i++) {
    let box = document.createElement("div");
    box.className = "littleBox";
    let pic = picture();
    box.appendChild(pic);
    wrapper.appendChild(box);
  }
}
