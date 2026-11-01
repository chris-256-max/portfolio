// ADD A PROJECT: copy one block { ... }, paste it below, and change the values.
// image: put the photo in the "images" folder and write its path here.
// link:  the real link (GitHub repo, live site, Behance, Google Drive, etc.)
const projects = [
  {
    name: "X-COVER GRAPHICS",
    description: "A Graphic-designing website that displays the files, and more information about the company",
    image: "images/xcovergraphics.jpg",
    link: "https://xcovergraphics.pages.dev"
  },
  {
    name: "ONLINE JOB PORTAL",
    description: "A system that connects Job Employers and Job Seekers. ",
    image: "images/onlinejobportal.jpg",
    link: "https://github.com/chris-256-max/OnlineJobPortal"
  },
  /*{
    name: "Project three",
    description: "A short line about what it does and what you used.",
    image: "images/project3.jpg",
    link: "https://example.com"
  }*/
];

// How many cards show first. "View more projects" reveals the rest.
const PER_PAGE = 6;
let shown = 0;

const grid = document.getElementById("projectGrid");
const moreBtn = document.getElementById("moreBtn");

function makeCard(p) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = p.image;
  img.alt = p.name;
  // If the photo is missing, show a grey placeholder instead of a broken image
  img.onerror = () => { img.replaceWith(placeholder()); };

  const title = document.createElement("h3");
  title.textContent = p.name;

  const desc = document.createElement("p");
  desc.textContent = p.description;

  const link = document.createElement("a");
  link.href = p.link;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Open project";

  const body = document.createElement("div");
  body.className = "card-body";
  body.append(desc, link);

  card.append(img, title, body);
  return card;
}

function placeholder() {
  const d = document.createElement("div");
  d.className = "photo-placeholder";
  d.textContent = "Photo";
  return d;
}

function showMore() {
  projects.slice(shown, shown + PER_PAGE).forEach(p => grid.appendChild(makeCard(p)));
  shown += PER_PAGE;
  if (shown >= projects.length) moreBtn.style.display = "none";
}

moreBtn.addEventListener("click", showMore);
showMore();