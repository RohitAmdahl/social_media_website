export function saveItem(key, store) {
  localStorage.setItem(key, JSON.stringify(store));
}

export function StoredData(key) {
  try {
    const store = localStorage.getItem(key);
    return JSON.parse(store);
  } catch (error) {
    return error;
  }
}
