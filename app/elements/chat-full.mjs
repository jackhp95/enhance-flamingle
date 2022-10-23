export default function chatFull({ html, state }) {
  let { name, datetime, message, avi, commonEvent } = {
    name: "name",
    datetime: "dateime",
    message: "message",
    avi: "avi",
    commonEvent: "commonEvent",
  };
  return html`
    <section
      class="flex flex-col relative items-stretch flex-shrink-0 w-full max-w-md overflow-y-auto snap-center"
    >
      <header
        class="z-10 bg-canvas bg-a-80 backdrop-blur sticky top-0 w-full flex text-lg"
      >
        <a
          href="#Inbox"
          class="flex-none px-4 rounded int:border-act border border-transparent text-xl flex items-center m-1"
        >
          <span class="icon chevron-left"></span>
          <div class="sr-only">back</div>
        </a>
        <div class="flex-auto relative flex gap-2 p-4 items-center">
          <span class="-my-2 -mb-8 text-base">
            <user-avi></user-avi>
          </span>
          <span class="text-sm flex-auto flex flex-col -my-2">
            <h1 class="leading-tight font-bold">${name}</h1>
            <span class="leading-tight opacity-60 text-xs line-clamp-1"
              >${commonEvent}</span
            >
          </span>
          <a href="#" class="inset-0 absolute"
            ><span class="sr-only">View User</span></a
          >
        </div>
        <a
          href="#"
          class="flex-none px-4 rounded int:border-act border border-transparent text-xl flex items-center m-1"
        >
          <span class="icon ellipsis-vertical"></span>
          <div class="sr-only">more</div>
        </a>
      </header>
      <hr id="OldestMessages" class="opacity-10">
      <ol
        class="flex-auto flex flex-col gap-3 p-4 relative text-a-80 mt-6 text-sm leading-tight"
      >
        <chat-bubble class="contents"></chat-bubble>
        <chat-bubble class="contents"></chat-bubble> 
        <chat-bubble class="contents"></chat-bubble> 
        <chat-bubble class="contents"></chat-bubble> 
        <chat-bubble class="contents"></chat-bubble> 
        <chat-bubble class="contents"></chat-bubble>
      </ol>
      <hr id="RecentMessages" class="opacity-10">
      <footer
        class="
        touch-manipulation 
        z-10 sticky bottom-0 w-full bg-canvas bg-a-80 backdrop-blur flex justify-end1
        "
      >
        <form
          class="focus-within:hide-footer bg-mute-10 sm:bg-transparent rounded-full sm:rounded-none overflow-hidden sm:overflow-visible m-3 sm:gap-2 flex-auto flex group"
        >
          <label
            class="int:scale-125 sm:int:scale-105 active:scale-95 relative rounded-none sm:rounded box items-center transition ease-out flex sm:bg-mute-10 sm:int:ring sm:ring-1 sm:ring-fg sm:fg-a-20 int:text-act sm:int:ring-a-100 ring-a-20"
          >
            <span class="icon text-[1.2em] plus"></span>
            <input type="file" class="sr-only" />
          </label>
          <label
            class="relative rounded-sm sm:rounded -mx-1 my-px sm:m-0 bg-canvas flex-auto text-lg ring-1 ring-transparent sm:ring-fg fg-a-20 int:ring-a-100 sm:fg-a-20 transition ease-out"
          >
            <textarea
              oninput="$textareaAutoResizer.textContent = this.value"
              class="break-words peer resize-none z-10 outline-none !appearance-none border-none border-0 outline-0 bg-mute-10 transition ease-out bg-a-10 absolute inset-0 box m-0 h-full w-full focus:bg-a-100"
            ></textarea>
            <div
              id="$textareaAutoResizer"
              class="
              break-words
              after:content-['Compose_Message'] empty:after:inline after:hidden 
              min-h-[1em] box opacity-40 overflow-hidden pointer-events-none
              "
            ></div>
          </label>
          <button
            class="int:scale-125 sm:int:scale-105 active:scale-95 relative rounded-none sm:rounded box items-center transition ease-out flex sm:bg-mute-10 sm:int:ring sm:ring-1 sm:ring-fg sm:fg-a-20 int:text-act sm:int:ring-a-100 ring-a-20"
          >
            <span class="icon text-[1.2em] paper-airplane"></span>
            <span
              class="
              hidden sm:block
              group-focus-within:text-[0] group-focus-within:tracking-[0] group-focus-within:ml-0 group-focus-within:opacity-0 
              tracking-normal transition-all ease-out ml-2 opacity-100
              "
            >
              send
            </span>
          </button>
        </form>
      </footer>
    </section>
  `;
}
