import RelativeTime from "@yaireo/relative-time";

export async function get(req) {
  const { query } = req;
  const clientId = "MzUwNDE1NnwxNDgxNjA1ODM2";
  const url = `https://api.seatgeek.com/2/events
    ?client_id=     ${clientId}
    &postal_code=   ${query.zip || "65203"}
    &per_page=      ${query.perPage || 24}
    `.replace(/\s/g, "");
  const { events, meta } = await (await fetch(url)).json();

  const normalizeSgEvent = (sge) => {
    const dateTime = new Date(sge.datetime_utc);
    return {
      id: sge.id,
      title: sge.short_title,
      location: sge.venue.name,
      dateTime,
      relativeTime: new RelativeTime().from(dateTime),
      images: [
        ...sge.performers.reduce(
          (acc, x) => (x.image ? acc.add(x.image) : acc),
          new Set()
        ),
      ].filter((url) => !url.includes("/generic-")),
    };
  };
  const seatgeek = {
    events: events.map(normalizeSgEvent),
    meta,
  };
  return { json: { seatgeek } };
}
