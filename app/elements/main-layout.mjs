export default function layout({ html, state }) {
  return html`
    <div
      class="
          h-screen min-h-screen w-full max-w-full 
          flex flex-col sm:flex-row-reverse gap-x-px"
    >
      <main class="flex-auto relative bg-mute-5">
        <div class="absolute inset-0 overflow-auto">
          <slot></slot>
        </div>
      </main>
      <main-footer class="flex-none border-t sm:border-0 sm:border-r border-a-20"></main-footer>
    </div>
  `;
}
