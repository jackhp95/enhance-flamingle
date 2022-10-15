export default function eventPreview({ html, state }) {
  let { store } = state;
  const location = store.seatgeek.meta.geolocation.display_name;

  return html`<header
    class="relative flex flex-col max-w-full p-2 sm:p-4 md:p-6 lg:p-8 group"
  >
    <h1
      class="pt-2 sm:pt-4 md:pt-6 lg:pt-8 mx-4 text-2xl group-focus-within:-translate-y-1 transition-all ease-out text-white group-focus-within:text-act"
    >
      Upcoming Events in <span class="sr-only">${location}</span>
    </h1>
    <form
      action="/events/"
      class="
        flex h-14 text-sm relative w-full max-w-lg bg-act
        focus-within:rounded-lg transition-all ease-out"
    >
      <label for="search" class="sr-only">Search</label>
      <div
        class="bg-black absolute inset-0 transition-all ease-out overflow-hidden group-focus-within:rounded-lg group-focus-within:inset-0.5"
      >
        <input
          id="postal-code"
          name="zip"
          autocomplete="postal-code"
          class="
        !ring-0 bg-mute-5 !leading-none p-0 m-0 border-none h-full w-full outline-none transition-all ease-out max-w-full group-focus-within:px-4 group-focus-within:py-3 
        flex-auto block text-5xl font-bold text-current rounded-lg placeholder-fg focus:fg-a-30 group-focus-within:bg-black group-focus-within:text-3xl"
          placeholder="${location}"
          type="search"
        />
        <button
          class="absolute inset-y-0 right-0 z-10 flex items-center border-l-2 border-act p-4 font-bold transition-all ease-out opacity-0 pointer-events-none whitespace-nowrap focus:bg-act bg-black group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          type="submit"
        >
          Find Events
        </button>
      </div>
    </form>
  </header> `;
}
