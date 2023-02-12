fetch(document.location.href, {
  method: "PUT",
  mode: "same-origin",
  credentials: "same-origin",
  redirect: "follow",
  cache: "default",
  headers: { "Content-Type": document.contentType },
  body: document.body.outerHTML
})
  .then(response => {
    alert(response.statusText || response.status)
  })
