export default function authForm({ html, state }) {
  return html`
    <form class="space-y-6">
      <div class="flex flex-col">
        <input
          id="$email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="valid:translate-y-0 transition duration-700 ease-out translate-y-24 peer appearance-none mb-4 rounded ring-none outline-none bg-mute-5 block w-full box border border-a-30 int:border-act sm:text-sm order-2"
        />
        <label
          for="email"
          class="peer-focus:text-act peer-valid:translate-y-0 transition duration-700 ease-out translate-y-24 mx-2 mb-1 block text-sm font-medium opacity-80 order-1"
          >Email address</label
        >
        <div
          class="peer-valid:opacity-100 opacity-0 peer-valid:translate-y-0 peer-valid:delay-300 transition duration-700 ease-out translate-y-24 order-3 flex flex-col"
        >
          <input
            id="$password"
            name="password"
            type="password"
            oninput="$submit.textContent = $password.value ? 'Login' : 'Magic Link'"
            placeholder="Leave blank for magic link"
            autocomplete="current-password"
            class="peer order-1 appearance-none mb-4 rounded ring-none outline-none bg-mute-5 block w-full box border border-a-30 int:border-act sm:text-sm"
          />
          <label
            for="password"
            class="peer-focus:text-act order-0 mx-2 mb-1 block text-sm font-medium opacity-80"
            >Password</label
          >
          <button
            type="submit"
            id="$submit"
            onclick="
                event.preventDefault();
                if (!$password.value) supabase.auth.signInWithOtp({ email: $email.value });
                supabase.auth.signInWithPassword({ email: $email.value, password: $password.value })
                  .catch(() => supabase.auth.signUp({ email: $email.value, password: $password.value }));
          "
            class="order-1 w-full box flex justify-center ring-fg text-a-80 fg-a-30 my-4 font-medium int:bg-act int:ring-2 ring-1 int:ring-act transition ease-out"
          >
            Magic Link
          </button>
          <button
            type="button"
            onclick="supabase.auth.api.resetPasswordForEmail(email)"
            class="order-1 opacity-80 text-sm line int:text-act ml-auto w-max"
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </form>
    <div class="mt-6 hidden">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border opacity-30"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-canvas text-a-70">Or continue with</span>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-3 gap-3">
        <div>
          <a
            href="/"
            class="cursor-pointer w-full inline-flex justify-center box border border-current rounded-md bg-canvas text-sm font-medium text-a-70 ring-none outline-none int:text-act"
            ><span class="icon star"
              ><span class="sr-only">Sign in with Facebook</span></span
            ></a
          >
        </div>
        <div>
          <a
            href="/"
            class="cursor-pointer w-full inline-flex justify-center box border border-current rounded-md bg-canvas text-sm font-medium text-a-70 ring-none outline-none int:text-act"
            ><span class="icon star"
              ><span class="sr-only">Sign in with Twitter</span></span
            ></a
          >
        </div>
        <div>
          <a
            href="/"
            class="cursor-pointer w-full inline-flex justify-center box border border-current rounded-md bg-canvas text-sm font-medium text-a-70 ring-none outline-none int:text-act"
            ><span class="icon star"
              ><span class="sr-only">Sign in with GitHub</span></span
            ></a
          >
        </div>
      </div>
    </div>
  `;
}
