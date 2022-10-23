export default function eventPreview({ html, state }) {
  const { attrs, store } = state;
  const sgId = attrs["seatgeek-id"];
  const seatgeekEvent = store?.seatgeek?.events?.find((sg) => sg.id == sgId);
  const asImg = (url) => html`<img
    src="${url}"
    alt=""
    class="snap-center flex-none object-center object-cover"
    width="280"
    height="210"
  />`;
  let { title, location, dateTime, relativeTime, images } = seatgeekEvent || {
    short_title: "short_title",
    location: "location",
    dateTime: "dateTime",
    relativeTime: "relativeTime",
    images: [{ url: "url", desc: "desc" }],
  };

  return html`<a
    href="/events/seatgeek/${sgId}"
    id="/events/seatgeek/${sgId}"
    class="group relative focus:ring-2 transition-all sm:pb-0 ring-1 ring-fg focus:ring-act hover:ring-a-100 fg-a-10 sm:fg-a-20 rounded sm:rounded-lg flex flex-col overflow-hidden ${images.length
      ? "row-span-2"
      : ""}"
  >
    ${images.length ?
    html`
      <div
        class="bg-opacity-20 dark:opacity-90 group-hover:opacity-100 overflow-x-scroll thin-scrollbar flex snap-x snap-mandatory"
      >
        ${images.map(asImg).join("")}
      </div>
    ` : ""}
    <div class="flex-1 p-4 space-y-2 flex flex-col">
      <h3 class="font-medium opacity-90 text-sm">${title}</h3>
      <div class="flex-1 flex flex-col justify-end text-xs">
        <p class="italic opacity-50">${location}</p>
        <p class="font-medium opacity-70">
          <output>${dateTime}</output> <output>${relativeTime}</output>
        </p>
      </div>
    </div>
  </a> `;
}
