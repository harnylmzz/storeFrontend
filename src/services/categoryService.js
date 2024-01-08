import axios from "axios";

export default class CategoryService {
  getCategories() {
    return axios.get("http://localhost:8080/api/v1/categories/getall");
  }

  getCategoryById(id) {
    return axios.get( "http://localhost:8080/api/v1/categories/getById?id=" + id);
  }
}
