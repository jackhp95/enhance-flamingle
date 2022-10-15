export default function FourOhFour({ html, state }) {
  const error = state.attr?.error;

  return html`
    <main-layout>
      <div
        class="bg-mute-5 min-h-full min-h-full pt-16 pb-12 flex-auto flex flex-col"
      >
        <main
          class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div class="flex-shrink-0 flex justify-center">
            <a href="/" class="inline-flex icon logo text-6xl"
              ><span class="sr-only">Flamingle</span></a
            >
          </div>
          <div class="py-16">
            <div class="text-center">
              <p
                class="text-sm font-semibold opacity-60 uppercase tracking-wide"
              >
                404 error
              </p>
              <h1
                class="mt-2 text-4xl font-extrabold text-neutral-100 tracking-tight sm:text-5xl"
              >
                Page not found.
              </h1>
              <p class="mt-2 text-base text-neutral-500">
                Sorry, we couldn’t find the page you’re looking for.
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
        </main>
        <footer
          class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <nav class="flex justify-center space-x-4">
            <a
              href="mailto:flaminglesocial.com@gmail.com"
              class="text-sm font-medium text-neutral-500 hover:text-neutral-400"
              >Email Support</a
            ><span
              class="inline-block border-l border-neutral-700"
              aria-hidden="true"
            ></span
            ><a
              href="https://www.isitdownrightnow.com/flaminglesocial.com.html"
              class="text-sm font-medium text-neutral-500 hover:text-neutral-400"
              >Status</a
            ><span
              class="inline-block border-l border-neutral-700"
              aria-hidden="true"
            ></span
            ><a
              href="https://twitter.com/FlamingleSocial"
              class="text-sm font-medium text-neutral-500 hover:text-neutral-400"
              >Twitter</a
            >
          </nav>
        </footer>
      </div>
    </main-layout>
  `;
}
