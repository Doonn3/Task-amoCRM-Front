export function UseLocalStorage<T>(key: string, data: T) {
  const SetItem = () => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const GetItem = () => {
    const result = localStorage.getItem(key);
    if (result === null) return null;
    const data = JSON.parse(result) as T;
    return data;
  };

  return {
    SetItem,
    GetItem,
  };
}
