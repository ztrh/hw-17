const incrementBtn = document.querySelector(".counter .increment");
const cart = document.querySelector(".counter input");
const decrementBtn = document.querySelector(".counter .decrement");

const increment = () => {
  cart.value = Number(cart.value) + 1;
  decrementBtn.classList.remove("disable");
};

incrementBtn.addEventListener("click", increment);

const decrement = () => {
  let oldValue = Number(cart.value);
  if (oldValue > 0) {
    let newValue = oldValue - 1;
    cart.value = newValue;
  }

  if (cart.value <= 1) {
    decrementBtn.classList.add("disable");
  }
};

decrementBtn.addEventListener("click", decrement);

/*range start*/
const rangeSlider = document.querySelector(".rangeSlider input");
const rangeHeading = document.querySelector(".rangeSlider h2");

const updateSliderValue = () => {
  rangeHeading.innerHTML = rangeSlider.value;
};

rangeSlider.addEventListener("input", updateSliderValue);
/*range end */
const togglerBtn = document.querySelector(".passToggler button");
const passwordInput = document.querySelector(".passToggler input");

const passwordToggler = () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    togglerBtn.innerHTML = `<i class="bi bi-eye"></i>`;
  } else {
    passwordInput.type = "password";
    togglerBtn.innerHTML = ` <i class="bi bi-eye-slash"></i>`;
  }
};

togglerBtn.addEventListener("click", passwordToggler);

const showTogglerBtn = () => {
  if (passwordInput.value.length >= 6) {
    togglerBtn.classList.add("show");
  } else {
    togglerBtn.classList.remove("show");
  }
};

passwordInput.addEventListener("keyup", showTogglerBtn);
