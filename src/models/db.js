// import { userMemStore } from "./mem/user-mem-store.js";
// import { categoryMemStore } from "./mem/category-mem-store.js";
// import { schoolMemStore } from "./mem/school-mem-store.js";

// import { userJsonStore } from "./json/user-json-store.js";
// import { categoryJsonStore } from "./json/category-json-store.js";
// import { schoolJsonStore } from "./json/school-json-store.js";

import UserMongo from "./mongo/users/index.js";
import CategoryMongo from "./mongo/category/index.js";
import SchoolsMongo from "./mongo/schools/index.js";
import AnalyticsData from "./mongo/analytics/index.js";

export const db = {
  userStore: null,
  categoryStore: null,
  schoolStore: null,
  analyticsStore: null,

  init() {
    this.userStore = UserMongo;
    this.categoryStore = CategoryMongo;
    this.schoolStore = SchoolsMongo;
    this.analyticsStore = AnalyticsData;
  },
};
