export function saveItem(key, store) {
  localStorage.setItem(key, JSON.stringify(store));
}
