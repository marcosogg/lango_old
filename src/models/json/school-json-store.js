import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const schoolJsonStore = {
  async getAllSchools() {
    await db.read();
    return db.data.schools;
  },

  async addSchool(categoryId, school) {
    await db.read();
    school._id = v4();
    school.categoryid = categoryId;
    db.data.schools.push(school);
    await db.write();
    return school;
  },

  async getSchoolsByCategoryId(id) {
    await db.read();
    return db.data.schools.filter((school) => school.categoryid === id);
  },

  async getSchoolById(id) {
    await db.read();
    return db.data.schools.find((school) => school._id === id);
  },

  async deleteSchool(id) {
    await db.read();
    const index = db.data.schools.findIndex((school) => school._id === id);
    db.data.schools.splice(index, 1);
    await db.write();
  },

  async deleteAllSchools() {
    db.data.schools = [];
    await db.write();
  },

  async updateSchool(school, updatedSchool) {
    school.schoolname = updatedSchool.schoolname;
    school.focus = updatedSchool.focus;
    school.location = updatedSchool.location;
    await db.write();
  },
};
