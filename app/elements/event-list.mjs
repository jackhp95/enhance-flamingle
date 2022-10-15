export default function eventList({ html, state }) {
  const { attrs, store } = state;
  const sgEventIds = store.seatgeek.events.map(e => e.id);
  const eventPreview = (id) =>
    html`<event-preview class="contents" seatgeek-id="${id}"></event-preview>`;

  return html`<div
    class="grid-cols-[repeat(auto-fit,minmax(clamp(140px,18vw,210px),1fr))] grid gap-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
  >
    ${sgEventIds.map(eventPreview).join("") || ""}
  </div>`;
}
