export default function chatPreview({ html, state }) {
  let { avi } = {
    avi: "avi",
  };
  return html`<a href="#" class="flex-none">
    <div
      class="hover:bg-gradient-to-t bg-gradient-to-tl from-rose-500 to-fuchsia-500 aspect-square w-[3em] h-[3em] rounded-full flex items-center justify-center hover:scale-100 scale-105 transition ease-out ring ring-black"
    >
      <div
        class="bg-neutral-700 rounded-full hover:ring ring-black aspect-square scale-90 ring-1 transition ease-out hover:scale-75 w-[3em] h-[3em]"
      >
        <img src="${avi}" alt="" />
      </div>
    </div>
  </a>`;
}
