export default class GetData {
  async fetchRequest() {
    let res = await fetch(`https://spapi.dev/api/characters/2`);
    return await res.json();
  }
}
