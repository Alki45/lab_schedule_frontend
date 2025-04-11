<template>
  <div class="min-h-screen bg-slate-100">
    <!-- Top Header -->
    <header class="bg-slate-700 p-6 shadow-md text-white">
      <h1 class="text-3xl font-bold font-sans">Admin Dashboard</h1>
    </header>

    <!-- Main Layout -->
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-[260px] bg-blue-400 text-white p-6 shadow-lg">
        <div class="text-center mb-6">
          <h2 class="text-xl font-semibold font-serif">Dashboard</h2>
        </div>

        <!-- Sidebar Navigation -->
        <nav class="space-y-4 text-lg font-medium">
          <button 
            @click="setView('loadDistribution')" 
            :class="{'bg-blue-500': currentView === 'loadDistribution'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Load
          </button>
          <button 
            @click="setView('assignment')" 
            :class="{'bg-blue-500': currentView === 'assignment'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Assignment
          </button>
          <button 
            @click="setView('courses')" 
            :class="{'bg-blue-500': currentView === 'courses'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Course
          </button>
          <button 
            @click="setView('assistant')" 
            :class="{'bg-blue-500': currentView === 'assistant'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Assistant
          </button>
          <button 
            @click="setView('labAssigned')" 
            :class="{'bg-blue-500': currentView === 'labAssigned'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Lab
          </button>
          <button 
            @click="setView('department')" 
            :class="{'bg-blue-500': currentView === 'department'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Department
          </button>
          <button 
            @click="setView('schedule')" 
            :class="{'bg-blue-500': currentView === 'schedule'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Schedule
          </button>
          <button 
            @click="setView('lecturer')" 
            :class="{'bg-blue-500': currentView === 'lecturer'}"
            class="block w-full py-3 text-center hover:bg-blue-500 transition rounded shadow"
          >
            Lecturer
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Dynamic Content Section -->
        <section>
          <p class="text-gray-700">Welcome to the Admin Dashboard.</p>

          <!-- Dynamic Content -->
          <div v-if="currentView === 'loadDistribution'">
            <p>Load Distribution content...</p>
          </div>
          <div v-if="currentView === 'assignment'">
            <p>Assignment content...</p>
          </div>
          <div v-if="currentView === 'courses'">
            <course-manager></course-manager>
          </div>
          <div v-if="currentView === 'assistant'">
            <p>Assistant content...</p>
          </div>
          <div v-if="currentView === 'labAssigned'">
            <p>Lab Assigned content...</p>
          </div>
          <div v-if="currentView === 'department'">
            <p>Department content...</p>
          </div>
          <div v-if="currentView === 'schedule'">
            <p>Schedule content...</p>
          </div>
          <div v-if="currentView === 'lecturer'">
            <p>Lecturer content...</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import CourseManager from './Courses.vue'; // Import the CourseManager component

export default {
  name: "AdminDashboard",
  components: {
    CourseManager, // Register CourseManager component
  },
  data() {
    return {
      currentView: '', // Tracks which section to display
    };
  },
  methods: {
    setView(view) {
      this.currentView = view; // Set the current view dynamically based on button click
    },
  },
};
</script>

<style scoped>
/* custom styles here */
</style>
