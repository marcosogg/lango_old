import { db } from "../models/db.js";
import { SchoolSpec } from "../models/joi-schemas.js";

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
    validate: {
      payload: SchoolSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("category-view", { title: "Add school error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newSchool = {
        schoolname: request.payload.schoolname,
        language: request.payload.language,
        location: Number(request.payload.location),
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