export default function chatBubble({ html, state }) {
  return html`
    <!-- Profile header -->
    <div>
      <div>
        <img
          class="h-32 w-full object-cover lg:h-48 opacity-60 hover:opacity-100 transition ease-out duration-150"
          src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
          alt=""
        />
      </div>
      <div class="max-w-5xl mx-auto px-edge">
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div class="flex">
            <label
              class="relative cursor-pointer flex items-center justify-center text-4xl transition-all ease-out int:text-5xl int:bg-act bg-canvas h-24 w-24 rounded-full ring-4 ring-canvas sm:h-32 sm:w-32"
            >
              <input type="file" class="hidden" />
              <span class="absolute inset-0 bg-mute-10 rounded-full"></span>
              <span class="icon camera"></span>
            </label>
            <!-- <img
              onclick="this.classList.add('hidden')"
              class="h-24 w-24 rounded-full ring-4 ring-canvas sm:h-32 sm:w-32"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
              alt=""
            /> -->
          </div>
          <div
            class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
          >
            <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
              <h1 class="text-2xl font-bold text-a-90 truncate">
                Ricardo Cooper
              </h1>
            </div>

            <menu
              id="$visitMenu"
              class="hidden mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <button
                type="button"
                class="inline-flex items-center gap-2 justify-center box border border-a-10 int:border-act shadow-sm text-sm font-medium rounded-md text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act"
              >
                <span class="icon envelope"></span>
                <span>Message</span>
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 justify-center box border border-a-10 int:border-act shadow-sm text-sm font-medium rounded-md text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act"
              >
                <span class="icon phone"></span>
                <span>Call</span>
              </button>
            </menu>
            <menu
              id="$selfMenu"
              class="hidden mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <button
                type="button"
                class="inline-flex items-center gap-2 justify-center box border border-a-10 int:border-act shadow-sm text-sm font-medium rounded-md text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act"
              >
                <span class="icon pencil"></span>
                <span>Edit</span>
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 justify-center box border border-a-10 int:border-act shadow-sm text-sm font-medium rounded-md text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act"
              >
                <span class="icon check"></span>
                <span>Save Changes</span>
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 justify-center box border border-a-10 int:border-act shadow-sm text-sm font-medium rounded-md text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-act"
              >
                <span class="icon arrow-up-tray"></span>
                <span>Logout</span>
              </button>
            </menu>
            <script>
              addEventListener("user:init", () => {
                user
                  ? ($visitMenu.classList.add("hidden"),
                    $selfMenu.classList.remove("hidden"))
                  : ($selfMenu.classList.add("hidden"),
                    $visitMenu.classList.remove("hidden"));
              });
            </script>
          </div>
        </div>
        <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-a-90 truncate">Ricardo Cooper</h1>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-6 sm:mt-2 2xl:mt-5">
      <div class="border-b border-a-10">
        <div class="max-w-5xl mx-auto px-edge">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-act text-a-90", Default: "border-transparent text-a-50 hover:text-a-70 hover:border-a-10" -->
            <a
              href="#"
              class="border-act text-a-90 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              Profile
            </a>

            <a
              href="#"
              class="border-transparent text-a-50 hover:text-a-70 hover:border-a-10 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Calendar
            </a>

            <a
              href="#"
              class="border-transparent text-a-50 hover:text-a-70 hover:border-a-10 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Recognition
            </a>
          </nav>
        </div>
      </div>
    </div>

    <!-- Description list -->
    <div class="mt-6 max-w-5xl mx-auto px-edge">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        ${[
          ["foo", "bar"],
          ["foo", "bar"],
          ["foo", "bar"],
          ["foo", "bar"],
        ]
          .map(
            ([k, v]) => html`
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-a-50">${k}</dt>
                <dd class="mt-1 text-sm text-a-90">${v}</dd>
              </div>
            `
          )
          .join("")}

        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-a-50">About</dt>
          <dd class="mt-1 max-w-prose text-sm text-a-90 space-y-5">
            <p>
              Tincidunt quam neque in cursus viverra orci, dapibus nec
              tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed.
              Cursus risus congue arcu aenean posuere aliquam.
            </p>
            <p>
              Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
              rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
              senectus vitae. Scelerisque fermentum, cursus felis dui
              suspendisse velit pharetra. Augue et duis cursus maecenas eget
              quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
              dictum risus suspendisse.
            </p>
          </dd>
        </div>
      </dl>
    </div>

    <!-- Team member list -->
    <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 px-edge">
      <h2 class="text-sm font-medium text-a-50">Team members</h2>
      <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          class="relative rounded-lg border border-a-10 hover:bg-a-50 bg-mute-5 px-edge py-5 shadow-sm flex items-center space-x-3 int:border-act focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-act"
        >
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-a-90">Leslie Alexander</p>
              <p class="text-sm text-a-50 truncate">Co-Founder / CEO</p>
            </a>
          </div>
        </div>

        <div
          class="relative rounded-lg border border-a-10 hover:bg-a-50 bg-mute-5 px-edge py-5 shadow-sm flex items-center space-x-3 int:border-act focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-act"
        >
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-a-90">Michael Foster</p>
              <p class="text-sm text-a-50 truncate">Co-Founder / CTO</p>
            </a>
          </div>
        </div>

        <div
          class="relative rounded-lg border border-a-10 hover:bg-a-50 bg-mute-5 px-edge py-5 shadow-sm flex items-center space-x-3 int:border-act focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-act"
        >
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-a-90">Dries Vincent</p>
              <p class="text-sm text-a-50 truncate">
                Manager, Business Relations
              </p>
            </a>
          </div>
        </div>

        <div
          class="relative rounded-lg border border-a-10 hover:bg-a-50 bg-mute-5 px-edge py-5 shadow-sm flex items-center space-x-3 int:border-act focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-act"
        >
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-a-90">Lindsay Walton</p>
              <p class="text-sm text-a-50 truncate">Front-end Developer</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
