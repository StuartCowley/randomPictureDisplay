let wrapper = document.getElementById("wrapper");

let picture = () => {
  let content = document.getElementById("content");
  let randomNum = Math.floor(Math.random() * 600) + 1;
  if (!content.value) {
    let pic = new Image();
    pic.src = "https://source.unsplash.com/random/?sig=" + randomNum;
    return pic;
  } else {
    let pic = new Image();
    pic.src =
      "https://source.unsplash.com/random/500x500/?sig=" +
      randomNum +
      "&" +
      content.value;
    return pic;
  }
};

function submitButtonpress() {
  let number = document.getElementById("numBoxes").value;
  console.log(number);
  for (i = 0; i < number; i++) {
    let box = document.createElement("div");
    box.className = "littleBox";
    let pic = picture();
    box.appendChild(pic);
    wrapper.appendChild(box);
  }
}
