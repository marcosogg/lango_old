// import { userMemStore } from "./mem/user-mem-store.js";
// import { categoryMemStore } from "./mem/category-mem-store.js";
// import { schoolMemStore } from "./mem/school-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";
import { schoolJsonStore } from "./json/school-json-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  schoolStore: null,

  init() {
    this.userStore = userJsonStore;
    this.categoryStore = categoryJsonStore;
    this.schoolStore = schoolJsonStore;
  },
};
