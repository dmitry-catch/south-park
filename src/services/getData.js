export default class GetData {
  async fetchRequest(id) {
    const url = `https://spapi.dev/api/characters/`;
    let res = await fetch(url + id);
    return await res.json();
  }
}
