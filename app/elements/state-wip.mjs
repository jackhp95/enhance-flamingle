export default function FourOhFour({ html, state }) {
  const error = state.attr?.error;

  return html`<main
    class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="flex-shrink-0 flex justify-center">
      <a href="/" class="inline-flex solid icon wrench text-6xl"
        ><span class="sr-only">Flamingle</span></a
      >
    </div>
    <div class="py-16">
      <div class="text-center">
        <p class="text-sm font-semibold opacity-60 uppercase tracking-wide">
          WIP
        </p>
        <h1
          class="mt-2 text-4xl font-extrabold text-a-90 tracking-tight sm:text-5xl"
        >
          Work in Progress
        </h1>
        <p class="mt-2 text-base text-a-50">
          Still workin' on it,
        </p>
        <div class="mt-6">
          <a
            href="/"
            class="text-base font-medium int:text-act inline-flex gap-1"
            >Go back home<span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>
  </main>`;
}
