export default function chatFull({ html, state }) {
  let { name, datetime, message, avi, commonEvent } = {
    name: "name",
    datetime: "dateime",
    message: "message",
    avi: "avi",
    commonEvent: "commonEvent",
  };
  return html`
    <header
      class="z-10 bg-black bg-opacity-80 backdrop-blur sticky gap-4 top-0 w-full p-4 flex text-lg"
    >
      <a href="#" class="flex-none">
        <div
          class="bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon"
        ></div>
        <div class="sr-only">back</div>
      </a>
      <a href="#" class="flex-auto flex gap-2 items-center">
        <div class="-my-2 -mb-8 text-base">
          <user-avi></user-avi>
        </div>
        <div class="text-sm flex-auto flex flex-col -my-2">
          <h1 class="leading-tight font-bold">${name}</h1>
          <span class="leading-tight opacity-60 text-xs line-clamp-1"
            >${commonEvent}</span>
        </div>
      </a>
      <nav class="flex-none flex gap-2">
        <a
          href="#"
          class="bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon"
        >
        </a>
        <a
          href="#"
          class="bg-white bg-opacity-20 hover:bg-opacity-80 rounded-full aspect-square icon"
        >
        </a>
      </nav>
    </header>
    <ol
      class="flex-auto flex flex-col gap-3 p-2 relative text-sm leading-tight"
    >
      <chat-bubble class="contents"></chat-bubble>
      <chat-bubble class="contents"></chat-bubble>
      <chat-bubble class="contents"></chat-bubble>
      <chat-bubble class="contents"></chat-bubble>
      <chat-bubble class="contents"></chat-bubble>
      <chat-bubble class="contents"></chat-bubble>
    </ol>
    <footer
      class="z-10 sticky bottom-0 w-full bg-black bg-opacity-80 backdrop-blur flex justify-end"
    >
      <menu class="p-4 gap-4 flex-auto flex">
        <div
          class="relative flex-auto rounded-lg overflow-hidden border border-opacity-40 border-white focus-within:border-opacity-100 focus-within:border-fuchsia-500 transition ease-out focus:border-opacity-60"
        >
          <textarea
            class="resize-none z-10 outline-none !appearance-none border-none border-0 outline-0 bg-neutral-900 transition ease-out bg-opacity-10 absolute inset-0 px-4 py-3 m-0 h-full w-full focus:bg-opacity-100"
          >Compose Message</textarea
          >
          <div class="min-h-[1em] px-4 py-3 opacity-40 pointer-events-none">
            Compose Message
          </div>
        </div>
      </menu>
    </footer>
  `;
}
