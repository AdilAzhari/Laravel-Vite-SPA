<template>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <div class="mb-4">
                <select v-model="selectedCategory" class="block mt-1 w-full sm:w-1/4 rounded-md shadow-sm">
                    <option value="" selected>-- Filter by category --</option>
                    <option v-for="category in categories" :value="category.id" :key="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <table class="min-w-full divide-y divide-gray-200 border">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase">
                                ID
                            </span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase">
                                Category
                            </span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase">
                                Title
                            </span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase">
                                Content
                            </span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase">
                                Created At
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="post in posts.data" :key="post.id">
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                            {{ post.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                            {{ post.category }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                            {{ post.title }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                            {{ post.content }}
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                            {{ post.created_at }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- <TailwindPagination :data="posts" @pagination-change-page="getPosts" class="mt-4" /> -->
            <TailwindPagination :data="posts" @pagination-change-page="page => getPosts(page, selectedCategory)" class="mt-4" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { TailwindPagination } from "laravel-vue-pagination";
import usePosts from "@/composables/posts";
import useCategories from "@/composables/categories";

const { categories, getCategories } = useCategories()
const { posts, getPosts } = usePosts();
const selectedCategory = ref('');

onMounted(() => {
    getPosts();
    getCategories()
});

watch(selectedCategory, (current, previous) => {
    getPosts(1, current);
});
</script>
