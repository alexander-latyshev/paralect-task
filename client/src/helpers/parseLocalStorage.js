export default function (storageKey) {
  try {
    const data = JSON.parse(localStorage.getItem(`${storageKey}`));
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error(`Error parsing ${storageKey}`, e);
  }
}
