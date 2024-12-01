const LOCAL_STORAGE_KEY = 'books'; // Define constant for the localStorage key

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : { books: [] }; // Return default state if nothing found
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return { books: [] }; // Return default state in case of error
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
