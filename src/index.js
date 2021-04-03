let videos = ["K-K13wmF8cI", "cKkAnVzXMT8", "7vSptcbT_ds"];
const iframes = `<div class="container">
  <div class="monitor">
    <div class="monitorscreen">
       <img src="./original.gif" alt="img....." style="width:100%; ">
    </div>
  </div>
</div>`;

const appendIframes = () => {
  const tVs = document.querySelectorAll(".tv");
  tVs.forEach((tv) => {
    tv.insertAdjacentHTML("beforeend", iframes);
  });
};
appendIframes();
function mapContent(arr) {
  return arr.map(({ id, title, body }) => {
    return {
      title: `<div
            type="button"
            class="py-4 thumb d-flex justify-content-between border border-light"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${id}"
          >
            <h3 class="ms-3 my-auto">${title}</h3>
            <i class="fas fa-plus me-3 my-auto"></i>
          </div>`,
      body: `<div class="collapse questions p-2" id="collapse${id}">
            ${body}
          </div>`,
    };
  });
}
const append2ContentDiv = (contents) => {
  const content = document.querySelectorAll(".content");
  const hTML = mapContent(contents);
  for (data of hTML) {
    let title = data.title;
    let body = data.body;
    content.forEach((div) => {
      div.insertAdjacentHTML("beforeend", title);
      div.insertAdjacentHTML("beforeend", body);
    });
  }
};

const netflixContent = [
  {
    id: 0,
    title: "What is netflix ?",
    body: ` Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!`,
  },
  {
    id: 1,
    title: "How much does Netflix cost?",
    body: ` Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR13.99 a month. No extra costs, no contracts.`,
  },
  {
    id: 2,
    title: "Where can I watch?",
    body: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    id: 3,
    title: "How do I cancel?",
    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    id: 4,
    title: "What can I watch on Netflix?",
    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    id: 5,
    title: "How does the free trial work?",
    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
];
append2ContentDiv(netflixContent);
