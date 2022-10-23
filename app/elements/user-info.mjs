export default function layout({ html, state }) {
  const bio = `Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.

Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
`;
  return html`<section class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    ${[
      ["foo", "bar"],
      ["foo", "bar"],
      ["foo", "bar"],
      ["foo", "bar"],
    ]
      .map(
        ([k, v]) => html`
          <label class="flex flex-col gap-1 h-12 sm:col-span-1 group">
            <span class="text-sm font-medium text-a-50 transition ease-out group-focus-within:text-act">${k}</span>
            <input type="text" class="
            text-sm text-a-90 group-focus-within:box w-max group-focus-within:bg-canvas
            group-focus-within:ring-1 ring-transparent sm:ring-fg fg-a-20 group-focus-within:ring-a-100 sm:fg-a-20 transition-all ease-out
            " value="${v}" />
          </label>
        `
      )
      .join("")}

    <label class="sm:col-span-2 flex flex-col gap-1 group">
      <span class="text-sm font-medium text-a-50 transition ease-out group-focus-within:text-act">Bio</span>
        <text-area placeholder="About Yourself" class="text-a-60 group-focus-within:box w-max group-focus-within:bg-canvas flex-auto group-focus-within:ring-1 ring-transparent sm:ring-fg fg-a-20 group-focus-within:ring-a-100 sm:fg-a-20 transition-all ease-out"
        >${bio}</text-area>
      </div>
    </label>
  </section>`;
}
