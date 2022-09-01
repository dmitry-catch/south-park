export default class GetData {
  async fetchRequest(req, id) {
    const url = `https://spapi.dev/api/${req}/`;
    let res = await fetch(url + id);
    return await res.json();
  }
}
