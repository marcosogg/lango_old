import { v4 } from "uuid";
import { schoolMemStore } from "./school-mem-store.js";

let categories = [];

export const categoryMemStore = {
  async getAllCategories() {
    return categories;
  },

  async addCategory(category) {
    category._id = v4();
    console.log("Adding category:", category); // Log the category being added
    categories.push(category);
    return category;
  },

  async getCategoryById(id) {
    const list = categories.find((category) => category._id === id);
    list.schools = await schoolMemStore.getSchoolsByCategoryId(list._id);
    return list;
  },

  async getUserCategories(userid) {
    return categories.filter((category) => category.userid === userid);
  },

  async deleteCategoryById(id) {
    const index = categories.findIndex((category) => category._id === id);
    categories.splice(index, 1);
  },

  async deleteAllCategories() {
    categories = [];
  },
};