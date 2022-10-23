export default function textArea({ html, state }) {
  const { attrs } = state;
  const placeholder = attrs["placeholder"];

  return html`<style>
      :host {
        position: relative;
        min-height: 1em;
      }
    </style>
    <textarea
      oninput="this.nextElementSibling.textContent = this.value"
      class="
      whitespace-pre-wrap break-words resize-none z-10 overflow-hidden outline-none !appearance-none border-none border-0 outline-0 absolute inset-0 p-[inherit] m-0 h-full w-full
      text-inherit font-inherit
      "
    ></textarea>
    <div class="peer whitespace-pre-wrap break-words
    text-inherit font-inherit
    "><slot></slot></div>
    <script>
      [...document.querySelectorAll("text-area")].forEach((el) => {
        const textarea = el.querySelector("textarea");
        const resizer = textarea.nextElementSibling;
        console.log({ resizer, textarea });
        textarea.value = resizer.textContent;
      });
    </script>
    <div class="peer-empty:inline-block hidden">${placeholder || ""}</div>`;
}
