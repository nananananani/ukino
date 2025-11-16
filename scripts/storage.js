// scripts/storage.js
const Storage = {
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); },
  get(key, fallback=null){
    const v = localStorage.getItem(key); return v? JSON.parse(v): fallback;
  },
  remove(key){ localStorage.removeItem(key); }
};
