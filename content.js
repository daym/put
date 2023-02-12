fetch(document.location.href, {
  method: "PUT",
  mode: "same-origin",
  credentials: "same-origin",
  redirect: "follow",
  cache: "default",
  headers: { "Content-Type": document.contentType,
             // TODO: Also pass Previous-Etag
             "Previous-Last-Modified": document.lastModified },
  body: document.body.outerHTML
})
  .then(response => {
    alert(response.statusText || response.status)
  })
