const params = new URLSearchParams(location.search)
const id = parseInt(params.get("id"))

const products = products.find(x => x.id == id)

