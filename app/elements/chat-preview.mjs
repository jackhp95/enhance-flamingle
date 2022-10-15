export default function chatPreview({ html, state }) {
  let { name, datetime, message, avi, commonEvent } = {
    name: "name",
    datetime: "dateime",
    message: "message",
    avi: "avi",
    commonEvent: "commonEvent",
  };
  return html`<li
    class="max-w-full m-0 p-0 flex border-b border-opacity-10 border-white"
  >
    <user-avi class="m-4 mr-0 text-sm"></user-avi>
    <a href="#" class="p-4 flex-auto flex flex-col">
      <h1 class="flex gap-2 whitespace-nowrap">
        <span class="leading-tight font-bold">${name}</span>
        <span class="leading-tight opacity-60">${commonEvent}</span>
        <time
          class="leading-tight flex-auto text-right text-sm opacity-60"
          datetime="${datetime}"
          >${datetime}</time
        >
      </h1>
      <p class="leading-tight truncate opacity-60">${message}</p>
    </a>
  </li>`;
}
