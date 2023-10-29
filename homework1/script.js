const data = [
  {
    id: 1,
    firstname: "Molly",
    lastname: "Begbie",
    email: "mbegbie0@parallels.com",
    gender: "Non-binary",
    age: 12,
    job: "Tax Accountant",
  },
  {
    id: 2,
    firstname: "Mayer",
    lastname: "Kuhnke",
    email: "mkuhnke1@myspace.com",
    gender: "Agender",
    age: 39,
    job: "Legal Assistant",
  },
  {
    id: 3,
    firstname: "Susy",
    lastname: "Kyneton",
    email: "skyneton2@buzzfeed.com",
    gender: "Male",
    age: 36,
    job: "Director of Sales",
  },
  {
    id: 4,
    firstname: "Raquela",
    lastname: "Littlefield",
    email: "rlittlefield3@google.co.uk",
    gender: "Genderqueer",
    age: 69,
    job: "Business Systems Development Analyst",
  },
  {
    id: 5,
    firstname: "Robinetta",
    lastname: "Loughney",
    email: "rloughney4@typepad.com",
    gender: "Female",
    age: 40,
    job: "Financial Advisor",
  },
  {
    id: 6,
    firstname: "Orelle",
    lastname: "Domanski",
    email: "odomanski5@angelfire.com",
    gender: "Polygender",
    age: 32,
    job: "VP Accounting",
  },
  {
    id: 7,
    firstname: "Brandi",
    lastname: "Haliburton",
    email: "bhaliburton6@baidu.com",
    gender: "Bigender",
    age: 57,
    job: "Engineer IV",
  },
  {
    id: 8,
    firstname: "Ario",
    lastname: "Cormack",
    email: "acormack7@sfgate.com",
    gender: "Bigender",
    age: 43,
    job: "Speech Pathologist",
  },
  {
    id: 9,
    firstname: "Kirsti",
    lastname: "Kimmerling",
    email: "kkimmerling8@statcounter.com",
    gender: "Female",
    age: 27,
    job: "Design Engineer",
  },
  {
    id: 10,
    firstname: "Orton",
    lastname: "Renachowski",
    email: "orenachowski9@amazon.co.uk",
    gender: "Genderfluid",
    age: 55,
    job: "Technical Writer",
  },
];


const root = document.querySelector("#root");

class DomItem {
  constructor(attributes, children) {
    this.attributes = attributes;
    this.children = children;
  } 

  render() {
    return "Text";
  }
}

class Card extends DomItem {
  constructor(attributes, children) {
    super(attributes, children);
  }

  #buildTitle() {
    const h3 = document.createElement("h3");
    h3.textContent = `${this.attributes.firstname} ${this.attributes.lastname}`;
    return h3;
  }

  #buildEmail() {
    const p = document.createElement("p");
    p.textContent = `Email: ${this.attributes.email}`;
    return p;
  }

  #buildGender() {
    const p = document.createElement("p");
    p.textContent = `Gender: ${this.attributes.gender}`;
    return p;
  }

  #buildAge() {
    const p = document.createElement("p");
    p.textContent = `Age: ${this.attributes.age}`;
    return p;
  }

  #buildJob() {
    const p = document.createElement("p");
    p.textContent = `Job: ${this.attributes.job}`;
    return p;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("shopping-item");
    card.append(
      this.#buildTitle(),
      this.#buildEmail(),
      this.#buildGender(),
      this.#buildAge(),
      this.#buildJob()
    );

    return card;
  }
}

class App extends DomItem {
  constructor(attributes, children) {
    super(attributes, children);
  }

  render() {
    const main = document.createElement("main");
    main.classList.add(this.attributes.className);

    main.append(...this.children.map((card) => card.render())); 
    return main;
  }
}

const cards = data.map((item) => {
  return new Card(item);
});

const app = new App({ className: "container" }, cards);

root.appendChild(app.render());