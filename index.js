addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const URL = "https://cfw-takehome.developers.workers.dev/api/variants";

  // fetch url and save results
  urls = await fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => data.variants);

  // Make a fetch request to a random URL
  luckyUrl = urls[Math.floor(Math.random() * urls.length)];

  promise = fetch(luckyUrl);

  promise.resolve(Response());

  return new Response(fetch(luckyUrl));
}
