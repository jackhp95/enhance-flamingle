export async function get(req) {
  const { params } = req;
  console.log(params)
  const clientId = "MzUwNDE1NnwxNDgxNjA1ODM2";
  const url = `https://api.seatgeek.com/2/events
    /${params.event}
    ?client_id=     ${clientId}
    `.replace(/\s/g, "");
  const seatgeek = await (await fetch(url)).json();
  console.log({seatgeek})
  return { json: { seatgeek } };
}
