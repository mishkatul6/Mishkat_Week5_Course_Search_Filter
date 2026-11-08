// Course list page: search, filters, sorting and reset.
// Course data and createCourseCard() come from courses.js

// ---------- DOM references ----------
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const sortSelect = document.getElementById("sortSelect");
const resetBtn = document.getElementById("resetBtn");
const courseContainer = document.getElementById("courseContainer");
const noResults = document.getElementById("noResults");
const courseCount = document.getElementById("courseCount");

// ---------- Functions ----------

// Show a list of courses (or the no-results message)
function displayCourses(list) {
  courseContainer.innerHTML = "";

  list.forEach(function (course) {
    courseContainer.appendChild(createCourseCard(course));
  });

  noResults.hidden = list.length > 0;
  courseCount.textContent = String(list.length).padStart(2, "0");
}

// Search: partial, case-insensitive match on the title (or a keyword)
function searchCourses(course, searchText) {
  if (searchText === "") return true;

  const inTitle = course.title.toLowerCase().includes(searchText);
  const inKeywords = course.keywords.some(function (word) {
    return word.includes(searchText);
  });
  return inTitle || inKeywords;
}

// "6 weeks" -> 6, so durations can be sorted
function getWeeks(course) {
  return parseInt(course.duration, 10);
}

// Apply search + category + level + sort together
function filterCourses() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedLevel = levelFilter.value;

  const filtered = courses.filter(function (course) {
    const matchesSearch = searchCourses(course, searchText);
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  if (sortSelect.value === "title") {
    filtered.sort(function (a, b) { return a.title.localeCompare(b.title); });
  } else if (sortSelect.value === "duration") {
    filtered.sort(function (a, b) { return getWeeks(a) - getWeeks(b); });
  }

  displayCourses(filtered);
}

// Reset every control and show all courses again
function clearFilters() {
  searchInput.value = "";
  categoryFilter.value = "All";
  levelFilter.value = "All";
  sortSelect.value = "default";
  displayCourses(courses);
}

// ---------- Events ----------
searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);
levelFilter.addEventListener("change", filterCourses);
sortSelect.addEventListener("change", filterCourses);
resetBtn.addEventListener("click", clearFilters);

// Pressing Enter in the search box should not reload the page
document.getElementById("filterForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

// ---------- Initial render ----------
displayCourses(courses);
