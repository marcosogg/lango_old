import { db } from "../models/db.js";

export const categoryController = {
  index: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      console.log("Category data sent to view:", category); // Log the category data
      const viewData = {
        title: "Category",
        category: category,
      };
      return h.view("category-view", viewData);
    },
  },

  addSchool: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newSchool = {
        schoolname: request.payload.schoolname,
        focus: request.payload.focus,
        location: request.payload.location,
      };
      await db.schoolStore.addSchool(category._id, newSchool);
      return h.redirect(`/category/${category._id}`);
    },
  },

  deleteSchool: {
    handler: async function(request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      await db.schoolStore.deleteSchool(request.params.schoolid);
      return h.redirect(`/category/${category._id}`);
    },
  },
};