export default function FiveHundo({ html, state }) {
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
            <a href="/" class="inline-flex icon solid bug-ant text-6xl"
              ><span class="sr-only"></span
            ></a>
          </div>
          <div class="py-16">
            <div class="text-center">
              <p
                class="text-sm font-semibold opacity-40 uppercase tracking-wide"
              >
                500 error
              </p>
              <h1
                class="mt-2 text-4xl font-extrabold text-a-90 tracking-tight sm:text-5xl"
              >
                Technical Difficulties
              </h1>
              <p class="mt-2 text-base text-a-70">
                Our servers encountered a bug, and they're
                <button class="inline relative group line">
                  entomophobic
                  <div
                    class="text-left group-int:scale-100 scale-0 transition ease-out origin-bottom-left absolute top-0 left-1/2 -translate-y-full rounded-2xl border bg-a-70 backdrop-blur rounded-bl-none max-w-xs text-sm bg-canvas box"
                  >
                    <b>Entomophobia</b> is a fear of insects. People with this
                    specific phobia feel anxious when they think about or see an
                    insect.
                  </div></button
                >.
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
              class="text-sm font-medium text-a-50 hover:text-a-40"
              >Email Support</a
            ><span
              class="inline-block border-l border-a-70"
              aria-hidden="true"
            ></span
            ><a
              href="https://www.isitdownrightnow.com/flaminglesocial.com.html"
              class="text-sm font-medium text-a-50 hover:text-a-40"
              >Status</a
            ><span
              class="inline-block border-l border-a-70"
              aria-hidden="true"
            ></span
            ><a
              href="https://twitter.com/FlamingleSocial"
              class="text-sm font-medium text-a-50 hover:text-a-40"
              >Twitter</a
            >
          </nav>
        </footer>
      </div>
    </main-layout>
  `;
}
