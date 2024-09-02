import { ref } from "vue";
import axios from "axios";
export default function useCategories() {
    const categories = ref({});
    const getCategories = async () => {
        axios.get("/api/categories").then((response) => {
            categories.value = response.data.data;
        });
    };
    return { categories, getCategories };
}
// This composable is similar to the usePosts composable, but it fetches categories instead of posts.
// The getCategories function sends a GET request to the /api/categories endpoint and sets the categories ref to the response data.
// The useCategories function returns the categories ref and the getCategories function.
// Now, you can use this composable in the CategoriesIndex.vue component.
