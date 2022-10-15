export default function eventDetails({ html, state }) {
  const { attrs, store } = state;
  const sge = store.seatgeek;
  const asImg = (url) => html`<img
    src="${url}"
    alt=""
    class="snap-center flex-none object-center object-cover"
    width="280"
    height="210"
  />`;
  let { title, location, dateTime, relativeTime, images } = sge || {
    title: "title",
    location: "location",
    dateTime: "dateTime",
    relativeTime: "relativeTime",
    images: [{ url: "url", desc: "desc" }],
  };

  return html`<main class="flex flex-col justify-center lg:flex-row-reverse">
    <section
      class="flex-col items-stretch w-full max-w-sm gap-4 contents lg:p-edge lg:pl-0 lg:flex"
    >
      <form
        class="sticky flex justify-end gap-4 text-xl lg:text-3xl lg:static top-edge"
      >
        <button
          class="p-2 border border-transparent rounded-full hover:border-current bg-canvas bg-a-80"
        >
          <span class="icon heart"><span class="sr-only">Like</span></span>
        </button>
        <button
          class="p-2 border border-transparent rounded-full hover:border-current bg-canvas bg-a-80"
        >
          <span class="icon share"><span class="sr-only">Share</span></span>
        </button>
      </form>
      ${
        sge.stats.lowest_price
          ? html`
              <form
                class="sticky bottom-0 z-10 flex flex-col items-stretch order-9 gap-4 p-4 text-center border-y border-a-10 lg:rounded bg-a-50 backdrop-blur lg:border bg-canvas top-edge"
              >
                <p>
                  <a href="https://seatgeek.com/" class="line int:text-act">SeatGeek</a> has tickets for
                  $${sge.stats.lowest_price}
                </p>
                <a
                  target="_BLANK"
                  href="${sge.url}"
                  class="w-full px-4 py-2 rounded font-bold ring-1 int:bg-act int:text-canvas int:ring-2 text-act ring-act transition ease-out"
                >
                  Buy Tickets
                </a>
              </form>
            `
          : ""
      }
    </section>
    </section>
    <section class="max-w-3xl prose p-edge">
      <img src="" alt="" />
      <time class="text-lg">Oct 29</time>
      <h1 class="text-5xl">${title}</h1>
      <p>
        Join us the Saturday before Halloween for a haunted evening of music,
        dancing, wine and more!
      </p>
      <section class="flex items-center gap-edge">
        <p>By <a href="">Cedar Lake Cellars</a></p>
        <form action="" class="flex items-center gap-4">
          <p>3600 followers</p>
          <button class="px-4 py-2 border">Follow</button>
        </form>
      </section>
      <h2>When and where</h2>
      <div class="flex gap-edge">
        <section>
          <h3>Date and time</h3>
          <time>Sat, October 29, 2022, 7:00 PM – 11:00 PM CDT</time>
        </section>
        <section>
          <h3>Location</h3>
          <p>
            Cedar Lake Cellars 11008 Schreckengast Road Wright City, MO 63390
          </p>
          <label
            for="map-toggle"
            class="flex items-center gap-2 transition ease-out border border-current rounded-full cursor-pointer max-w-max hover:text-act active:text-a-75 px-em -mx-em"
          >
            <span class="icon map"></span> Toggle map
          </label>
        </section>
      </div>
      <div class="flex flex-col items-center py-edge">
        <div class="contents">
          <input
            type="checkbox"
            name="map-toggle"
            id="map-toggle"
            class="hidden peer"
          />
          <div
            class="peer-checked:w-0 peer-checked:opacity-0 opacity-100 transition-all ease-out w-full max-w-full rounded bg-gradient-to-tr from-neutral-900 aspect-[16/9] border"
          ></div>
        </div>
        <h4>How to get there</h4>
        <menu class="flex gap-4">
          <span class="icon star">car</span>
          <span class="icon star">walk</span>
          <span class="icon star">bus</span>
          <span class="icon star">bike</span>
        </menu>
      </div>
      <section>
        <h2>About this event</h2>
        <p>
          Gather your friends and get ready to party Halloween-style with the
          Retro Boogie Band! Treat yourself to your drink of choice from The
          Barrel Room’s full bar and delicious food from our Smokehouse or
          Burger Shack. Dress to impress - the best Halloween costume will win
          an awesome prize!
        </p>
        <p>Featured Drink: Black Widow Wine Slushy</p>
        <p>
          Please Note: All guests must be at least 21 years of age. This is a
          free and open event. All seating is first come, first served.
        </p>
      </section>
      <section>
        <h2>Share with Friends</h2>
        <nav class="flex gap-4 text-3xl">
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share with friends</span></a
          >
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share on Facebook</span></a
          >
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share on Facebook Messenger</span></a
          >
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share on Linkedin</span></a
          >
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share on Twitter</span></a
          >
          <a href="">
            <span class="icon share"></span>
            <span class="sr-only">Share by Email</span></a
          >
        </nav>
      </section>
    </section>
  </main>`;
}
