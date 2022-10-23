export default function mainFooter({ html, state }) {
  return html`<footer
    class="will-change-[max-width] sm:int:max-w-max sm:max-w-min font-light sm:h-screen sm:w-auto sm:flex-col group sticky inset-0 w-full flex justify-between overflow-x-auto overflow-y-hidden sm:overflow-hidden bg-canvas bg-opacity-75 backdrop-blur ring-1 ring-fg fg-a-5"
  >
    <div class="contents fg-a-100">
      <nav class="sticky top-0 flex sm:flex-col flex-none" aria-label="Sidebar">
        <a
          id="Home"
          href="/#Home"
          class="p-4 sm:px-3 sm:py-5 sm:my-8 flex h-16 gap-x-0 sm:group-int:gap-x-1 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-3xl sm:text-4xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon logo"
          ></span>
          <span
            class="sm:group-int:tracking-normal tracking-[-0.25ch] font-bold sm:group-int:text-lg text-xs sm:group-int:max-w-[max(10ch,10vw)] group-int:mr-em max-w-0 overflow-hidden transition-all ease-out h-[1.5em] flex gap-x-0 items-center flex-wrap gap-y-64"
          >
            Flamingle<wbr />Social<wbr />.com
          </span>
        </a>
        <a
          id="Events"
          href="/events/#Events"
          class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon ticket"
          ></span>
          <span
            class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
            >Events</span
          >
        </a>
        <a
          id="Activities"
          href="/activities/#Activities"
          class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon puzzle-piece"
          ></span>
          <span
            class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
            >Activities</span
          >
        </a>
        <a
          id="Chats"
          href="/chats/#Chats"
          class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon chat-bubble-left-right"
          ></span>
          <span
            class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
            >Chats</span
          >
        </a>
        <a
          id="Calendar"
          href="/calendar/#Calendar"
          class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon calendar"
          ></span>
          <span
            class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
            >Calendar</span
          >
        </a>
        <a
          id="Notifications"
          href="/notifications/#Notifications"
          class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center text-fg dark:opacity-60 opacity-90 int:opacity-100 target:opacity-100 int:text-act sm:origin-left int:scale-105 active:scale-95 transition-all ease-out"
        >
          <span
            class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center icon bell"
          ></span>
          <span
            class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
            >Notifications</span
          >
        </a>
      </nav>
      <a
        id="Account"
        href="/account/#Account"
        class="p-5 flex h-16 gap-x-0 sm:group-int:gap-x-3 items-center sticky right-0 bg-canvas text-fg transition-all ease-out fg-a-60 int:fg-a-100 target:fg-a-100 int:text-act sm:origin-left"
      >
        <span
          class="text-2xl transition-all ease-out opacity-60 flex-shrink-0 flex justify-center int:scale-105 active:scale-95 transition-all ease-out icon user-circle"
        ></span>
        <span
          class="sm:group-int:tracking-wide tracking-[-0.25ch] sm:group-int:text-base text-xs sm:group-int:max-w-[max(10ch,10vw)] max-w-0 overflow-hidden transition-all ease-out overflow-hidden"
          >Account</span
        >
      </a>
    </div>
  </footer>`;
}
