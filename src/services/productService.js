import axios from 'axios';

export default class ProductService {

    getProducts() {
        return axios.get("http://localhost:8080/api/v1/products/getAll")
    }

    getProductById(id) {
        return axios.get("http://localhost:8080/api/v1/products/getById?id="+ id)
    }
}

