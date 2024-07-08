function createElement(html) {
  const element = document.createElement("div");
  element.insertAdjacentHTML("beforeend", html);
  return element.firstElementChild;
}

class FitnessTask {
  _state = {
    done: false,
  };

  constructor(title, time) {
    this._title = title;
    this._time = time;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._addlisteners();
  }

  _getTemplate() {
    return `<div class="fitness-task">
        <div class="fitness-task__left">
          <div class="fitness-task__icon">
						<i class="fa-regular fa-circle-check"></i>
					</div>
          <h3 class="fitness-task__title">Lorem, ipsum dolor.</h3>
        </div>
        <span class="fitness-task__time">10-00</span>
      </div>`;
  }

  _setStateDone() {
    this._state.done = !this._state.done;
  }

  _addlisteners() {
    this._element.addEventListener("click", () => {
      this._setStateDone();
      this._render();
    });
  }

  _render() {
    if (this._state.done === true) {
      this._element.querySelector(".fitness-task__icon").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      this._element.classList.add("fitness-task__task--done");
    } else {
      this._element.querySelector(".fitness-task__icon").innerHTML = '<i class="fa-regular fa-circle-check"></i>';
      this._element.classList.remove("fitness-task__task--done");
    }

    // this._element.classList.toggle("fitness-task__task--done");
  }

  get element() {
    return this._element;
  }
}

const root = document.querySelector(".root");
const card1 = new FitnessTask("Do push ups", "10 minutes");
root.insertAdjacentElement("beforeend", card1.element);
