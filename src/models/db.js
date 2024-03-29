import { userMemStore } from "./mem/user-mem-store.js";
import { categoryMemStore } from "./mem/category-mem-store.js";
import { schoolMemStore } from "./mem/school-mem-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  schoolStore: null,

  init() {
    this.userStore = userMemStore;
    this.categoryStore = categoryMemStore;
    this.schoolStore = schoolMemStore;
  },
};
