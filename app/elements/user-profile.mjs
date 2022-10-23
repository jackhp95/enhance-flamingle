export default function chatBubble({ html, state }) {
  return html`
    <!-- Profile header -->
    <div class="relative cursor-pointer">
      <img
        class="h-32 w-full object-cover lg:h-48 opacity-60 hover:opacity-100 transition ease-out duration-150"
        src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
        alt=""
      />
      <label
        class="absolute inset-0 text-base transition-all ease-out int:text-lg text-a-0 int:text-a-100 gap-3 int:backdrop-blur int:bg-a-60 bg-a-0 bg-canvas flex items-center justify-center"
      >
        <input type="file" class="sr-only" />
        <span class="icon photo text-[1.38em]"></span>
        <span>Update Cover Photo</span>
      </label>
    </div>
    <div class="max-w-5xl mx-auto px-edge">
      <div class="flex flex-wrap-reverse pb-3">
        <div
          class="flex-auto flex flex-col gap-edge"
        >
          <label
            class="relative -mt-16 cursor-pointer flex items-center justify-center text-4xl transition-all ease-out int:text-5xl int:bg-act bg-canvas h-24 w-24 rounded-full ring-4 ring-canvas sm:h-32 sm:w-32"
          >
            <input type="file" class="hidden" />
            <span class="absolute inset-0 bg-mute-10 rounded-full"></span>
            <span class="icon camera"></span>
          </label>
          <div class="flex flex-col min-w-0 gap-1 flex-auto">
            <div class="focus-within:box w-max focus-within:bg-canvas focus-within:ring-1 ring-transparent sm:ring-fg fg-a-20 focus-within:ring-a-100 sm:fg-a-20 transition-all ease-out">
                <input
                type="text"
                class="text-3xl font-bold text-a-90 min-w-max leading-none
                "
                placeholder="Your Name"
                value="Ricardo Cooper"
                />
            </div>
            <div class="focus-within:box w-max focus-within:bg-canvas focus-within:ring-1 ring-transparent sm:ring-fg fg-a-20 focus-within:ring-a-100 sm:fg-a-20 transition-all ease-out">
                <label for="" class="text-base text-a-60 min-w-max leading-none">
                    @<input
                    type="text"
                    class="leading-none"
                    placeholder="your_username"
                    value="username"
                    />
                </label>
            </div>
          </div>
        </div>
        <menu
          id="$visitMenu"
          class="hidden flex justify-stretch flex-row gap-4 mt-edge ml-auto"
        >
          <button
            type="button"
            class="flex gap-2 leading-none items-center justify-center box border border-a-10 int:border-act shadow-sm sm:text-sm font-medium h-min text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-act"
          >
            <span class="icon envelope"></span>
            <span class="hidden sm:inline">Message</span>
          </button>
          <button
            type="button"
            class="flex gap-2 leading-none items-center justify-center box border border-a-10 int:border-act shadow-sm sm:text-sm font-medium h-min text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-act"
          >
            <span class="icon phone"></span>
            <span class="hidden sm:inline">Call</span>
          </button>
        </menu>
        <menu
          id="$selfMenu"
          class="hidden flex justify-stretch flex-row gap-4 mt-edge ml-auto"
        >
          <button
            type="button"
            class="flex gap-2 leading-none items-center justify-center box border border-a-10 int:border-act shadow-sm sm:text-sm font-medium h-min text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-act"
          >
            <span class="icon check"></span>
            <span class="hidden sm:inline">Save</span>
          </button>
          <button
            type="button"
            class="flex gap-2 leading-none items-center justify-center box border border-a-10 int:border-act shadow-sm sm:text-sm font-medium h-min text-a-70 bg-mute-5 int:bg-a-50 focus:outline-none focus:ring-2 focus:ring-act"
          >
            <span class="icon arrow-up-tray"></span>
            <span class="hidden sm:inline">Logout</span>
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
    <!-- Radios  -->
    <!-- Account Radio -->
    <input
      type="radio"
      checked
      name="radioTabs"
      id="radioAccountTab"
      class="peer sr-only"
    />
    <!-- Calendar Radio -->
    <input
      type="radio"
      name="radioTabs"
      id="radioCalendarTab"
      class="peer sr-only"
    />

    <!-- Setting Radio -->
    <input
      type="radio"
      name="radioTabs"
      id="radioSettingsTab"
      class="peer sr-only"
    />

    <!-- Tabs -->
    <div class="mt-6 sm:mt-2 2xl:mt-5">
      <div class="border-b border-a-10">
        <div class="max-w-5xl mx-auto px-edge">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <label
              for="radioAccountTab"
              class="[#radioAccountTab:checked~*_&]:border-act [#radioAccountTab:checked~*_&]:text-a-90 border-a-5 text-a-50 cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Account
            </label>

            <label
              for="radioCalendarTab"
              class="[#radioCalendarTab:checked~*_&]:border-act [#radioCalendarTab:checked~*_&]:text-a-90 border-a-5 text-a-50 cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Calendar
            </label>

            <label
              for="radioSettingsTab"
              class="[#radioSettingsTab:checked~*_&]:border-act [#radioSettingsTab:checked~*_&]:text-a-90 border-a-5 text-a-50 cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Settings
            </label>
          </nav>
        </div>
      </div>
    </div>

    <!-- Radio Account Tab -->
    <div
      class="[#radioAccountTab:checked~&]:flex hidden mt-6 max-w-5xl mx-auto px-edge pb-12 flex-col gap-8"
    >
      <!-- Description list -->
      <user-info></user-info>

      <!-- Team member list -->
      <section>
        <h2 class="text-sm font-medium text-a-50">Connections</h2>
        <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
          ${[
            {
              avi: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              name: "Leslie Alexander",
              title: "Activity",
            },
            {
              avi: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              name: "Michael Foster",
              title: "Event",
            },
            {
              avi: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              name: "Dries Vincent",
              title: "Activity",
            },
            {
              avi: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              name: "Lindsay Walton",
              title: "Activity, Event",
            },
          ]
            .map(
              ({ name, avi, title }) => html`
                <div
                  class="relative rounded-lg border border-a-10 hover:bg-a-50 bg-mute-5 px-edge py-5 shadow-sm flex items-center space-x-3 int:border-act focus-within:ring-2 focus-within:ring-act"
                >
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="${avi}" alt="" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-a-90">${name}</p>
                      <p class="text-sm text-a-50 truncate">${title}</p>
                    </a>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
    <!-- Other -->
    <div
      class="[#radioCalendarTab:checked~&]:flex hidden mt-6 max-w-5xl mx-auto px-edge pb-12 flex-col gap-8
      w-full h-screen"
    >
      <state-wip class="mt-32"></state-wip>
    </div>

    <div
      class="[#radioSettingsTab:checked~&]:flex hidden mt-6 max-w-5xl mx-auto px-edge pb-12 flex-col gap-8
      w-full h-screen"
    >
      <state-wip class="mt-32"></state-wip>
    </div>
  `;
}
