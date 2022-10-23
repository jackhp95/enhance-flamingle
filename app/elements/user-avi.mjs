export default function chatPreview({ html, state }) {
  let { avi } = {
    avi: "avi",
  };
  return html`<a href="#" class="flex-none">
    <div
      class="hover:bg-gradient-to-t bg-gradient-to-tl from-rose-500 to-fuchsia-500 aspect-square w-[3em] h-[3em] rounded-full flex items-center justify-center hover:scale-100 scale-105 transition ease-out ring ring-canvas"
    >
      <div
        class="relative bg-canvas bg-a-90 rounded-full overflow-hidden hover:ring ring-canvas aspect-square scale-90 ring-1 transition ease-out hover:scale-75 w-[3em] h-[3em]"
      >
        <span class="icon user solid absolute -bottom-[.38em] text-fg text-a-20 inset-x-1/2 -translate-x-1/2 h-[2.62em] w-auto"></span>
        <img src="${avi}" alt="" class="relative" />
      </div>
    </div>
  </a>`;
}
