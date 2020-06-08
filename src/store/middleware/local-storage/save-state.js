export function saveState({ storageKey, state }) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(storageKey, serializedState);
  } catch (err) {
  }
}
