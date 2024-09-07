<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-100">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <a href="/">
                                <svg viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 fill-current text-indigo-500">
                                    <path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.75" />
                                </svg>
                            </a>
                        </div>
                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <router-link :to="{ name: 'posts.index' }" active-class="border-b-2 border-indigo-400"
                                class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Posts
                            </router-link>
                            <router-link :to="{ name: 'posts.create' }" active-class="border-b-2 border-indigo-400"
                                class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Create Post
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Page Heading -->
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ currentPageTitle }}
                </h2>
            </div>
        </header>

        <main>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-b border-gray-200">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const currentPageTitle = computed(() => route.meta.title);
</script>
