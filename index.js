window.addEventListener("load", () => {
  const slideNames = {
    travelers: {
      title: "For travelers",
      listItems: [
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
      ],
      image: "img/slider-traveler.jpg",
    },
    organizations: {
      title: "For travel organization",
      listItems: [
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
      ],
      image: "img/slider-organization.jpg",
    },
    employees: {
      title: "For employees",
      listItems: [
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
        "Highlight one word in the text on the page.",
        "Word meaning, pronunciation, synonyms, hypernyms, hyponyms . and more.",
      ],
      image: "img/slider-emploees.jpg",
    },
  };

  const sliderButtons = document.querySelectorAll(".slider__controlls button");
  sliderButtons.forEach((button) => {
    button.addEventListener("click", changeSlide);
  });

  function changeSlide(event) {
    const slideName = event.target.dataset.slide;
    const slideData = getSlideData(slideName);
    drawSlideList(slideData.listItems);
    changeTitle(slideData.title);
    changeImage(slideData.image);
    showActiveButton(event.target);
  }

  function getSlideData(slideName) {
    const title = slideNames[slideName].title;
    const listItems = slideNames[slideName].listItems;
    const image = slideNames[slideName].image;
    return { title, listItems, image };
  }

  function drawSlideList(listItems) {
    const list = document.querySelector(".slide__promo--list");
    list.innerHTML = "";
    listItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("slide__promo--list-item");
      listItem.textContent = item;
      list.append(listItem);
    });
  }

  function changeTitle(title) {
    const slideTitle = document.querySelector(".slide__promo--title");
    slideTitle.textContent = title;
  }

  function changeImage(link) {
    const image = document.querySelector(".slide__image img");
    image.src = link;
  }

  function showActiveButton(button) {
    sliderButtons.forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });
    button.classList.add("active");
  }
});
