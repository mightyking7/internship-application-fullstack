addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Return response from request to a variant
 * @param {Request} request
 */
async function handleRequest(request) {
  // query endpoint
  const endpoint = "https://cfw-takehome.developers.workers.dev/api/variants";

  // fetch url and save results
  let urls = await fetch(endpoint)
    .then(res => {
      return res.json();
    })
    .then(data => data.variants);

  // make a request to a random URL
  let luckyUrl = urls[Math.floor(Math.random() * urls.length)];

  let res = await fetch(luckyUrl);

  // return response as if it was loaded directly

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers
  });
}
