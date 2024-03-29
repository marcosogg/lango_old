import { v4 } from "uuid";

let schools = [];

export const schoolMemStore = {
  async getAllSchools() {
    return schools;
  },

  async addSchool(categoryId, school) {
    school._id = v4();
    school.categoryid = categoryId;
    schools.push(school);
    return school;
  },

  async getSchoolsByCategoryId(id) {
    return schools.filter((school) => school.categoryid === id);
  },

  async getCategoryById(id) {
    const list = category.find((category) => category._id === id);
    list.schools = await schoolMemStore.getSchoolsByCategoryId(list._id);
    return list;
  },

  async getCategorySchools(categoryId) {
    return schools.filter((school) => school.categoryid === categoryId);
  },

  async deleteSchool(id) {
    const index = schools.findIndex((school) => school._id === id);
    schools.splice(index, 1);
  },

  async deleteAllSchools() {
    schools = [];
  },

  async updateSchool(school, updatedSchool) {
    school.schoolname = updatedSchool.schoolname;
    school.language = updatedSchool.language;
    school.location = updatedSchool.location;
  },
};