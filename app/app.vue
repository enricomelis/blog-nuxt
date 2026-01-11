<script setup lang="ts">
import { ref } from "vue";
const theme = ref("tokyonight");
const currently_reading = ref("vinland saga");
const currently_watching = ref("neon genesis evangelion");
</script>

<template>
    <!-- top bar section -->
    <nav>
        <ul class="flex flex-row justify-between p-4">
            <li>~/melis</li>
            <li>blog</li>
            <li>
                <button
                    class="bg-blue-400"
                    @click="theme == 'tokyonight' ? (theme = 'gruvbox') : (theme = 'tokyonight')"
                >
                    {{ theme }}
                </button>
            </li>
        </ul>
    </nav>

    <!-- main/hero section -->
    <main class="flex flex-row justify-center mt-16">
        <div class="w-900 h-900 bg-blue-800">
            <!-- ascii animation inside here -->
        </div>
        <div>
            <!-- personal information here -->
            <ul>
                <li>melis</li>
                <li>studying cs @ <a href=" https://www.di.unipi.it">unipisa</a></li>
                <li>tinkerer, gymnast, programmer</li>
                <li>
                    <div>i dislike:</div>
                    <div>
                        capitalism, closed-source software, individualism, closed-mindedness,
                        mindlessness, snob people
                    </div>
                </li>
                <li>currently reading: {{ currently_reading }}</li>
                <li>currently watching: {{ currently_watching }}</li>
            </ul>
        </div>
    </main>
</template>
