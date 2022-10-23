export default function chatInbox({ html, state }) {
  return html`
    <header
      class="z-10 bg-canvas bg-a-80 backdrop-blur sticky top-0 w-full p-4 flex text-lg font-bold justify-between"
    >
      <h1 class="leading-none">Inbox</h1>
      <nav class="flex gap-2">
        <a
          href="#"
          class="bg-fg bg-a-20 hover:bg-a-80 rounded-full aspect-square icon"
        >
        </a>
        <a
          href="#"
          class="bg-fg bg-a-20 hover:bg-a-80 rounded-full aspect-square icon"
        >
        </a>
      </nav>
    </header>
    <a
      href="#"
      class="flex items-center mx-4 my-2 gap-2 px-4 py-3 border border-a-30 border-fg rounded-md leading-5 bg-a-90 bg-a-10 opacity-80 focus:bg-a-100 placeholder-a-50 focus:placeholder-a-40 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
    >
      <span class="icon magnifying-glass"></span>
      Search Direct Messages</a
    >
    <ol class="min-h-full flex flex-col p-0 m-0 relative">
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
      <chat-preview></chat-preview>
    </ol>
  `;
}
