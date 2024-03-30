import { userMemStore } from "./mem/user-mem-store.js";
import { categoryMemStore as categoryMemStore } from "./mem/category-mem-store.js";
import { schoolMemStore as schoolMemStore } from "./mem/school-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore as categoryJsonStore } from "./json/category-json-store.js";
import { schoolJsonStore as schoolJsonStore } from "./json/school-json-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  schoolStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.categoryStore = categoryJsonStore;
        this.schoolStore = schoolJsonStore;
        break;
      default:
        this.userStore = userMemStore;
        this.categoryStore = categoryMemStore;
        this.schoolStore = schoolMemStore;
    }
  },
};