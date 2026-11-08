// Shared data and helpers used by index.html, course.html and enroll.html

const courses = [
  {
    id: 1, title: "Introduction to Web Development", category: "Web Development", level: "Beginner",
    duration: "6 weeks", lessons: 12, keywords: ["html", "css", "website"],
    description: "Learn HTML and CSS and create your first responsive webpage.",
    overview: "Learn how websites are built from the ground up. You will write HTML and CSS, style real pages, and finish with your own responsive webpage.",
    learn: ["Structure a webpage with semantic HTML", "Style layouts and typography with CSS", "Build pages that work on phones and desktops", "Publish your first webpage"],
    syllabus: ["How the web works", "HTML basics and page structure", "Links, images, lists and forms", "CSS selectors, colours and fonts", "Layout with Flexbox", "Responsive design and final project"],
    audience: "Complete beginners who want to build websites. No coding experience is needed."
  },
  {
    id: 2, title: "Graphic Design Fundamentals", category: "Graphic Design", level: "Beginner",
    duration: "4 weeks", lessons: 10, keywords: ["colour", "typography", "composition"],
    description: "Explore colour, typography, composition, and visual communication.",
    overview: "Learn the core principles behind good design and apply them to posters, social media posts and simple layouts.",
    learn: ["Choose colour palettes that work together", "Pair and set typefaces with care", "Create balanced, readable compositions", "Export designs for print and screen"],
    syllabus: ["Design principles", "Colour theory", "Typography basics", "Composition and layout", "Visual communication", "Final poster project"],
    audience: "Beginners who want to start designing. No design experience is needed."
  },
  {
    id: 3, title: "Digital Marketing Essentials", category: "Digital Marketing", level: "Beginner",
    duration: "5 weeks", lessons: 10, keywords: ["social media", "content", "online"],
    description: "Understand social media, content strategy, and online marketing.",
    overview: "Learn how to plan, publish and measure online content that reaches a real audience.",
    learn: ["Define goals and target audiences", "Plan a content calendar", "Write engaging social media posts", "Read basic analytics"],
    syllabus: ["Digital marketing overview", "Audience research", "Social media strategy", "Content planning", "Email and online ads", "Measuring results"],
    audience: "Students, volunteers and small business owners who want to promote their work online."
  },
  {
    id: 4, title: "Python Programming Basics", category: "Programming", level: "Intermediate",
    duration: "6 weeks", lessons: 14, keywords: ["python", "coding"],
    description: "Learn variables, conditions, loops, and basic problem-solving.",
    overview: "Build a solid foundation in Python. You will learn core programming concepts and use them to solve small, practical problems.",
    learn: ["Store and use data with variables", "Make decisions with conditions", "Repeat tasks with loops", "Break problems into small, solvable steps"],
    syllabus: ["Setting up Python", "Variables and data types", "Conditions", "Loops", "Functions", "Problem-solving practice and mini project"],
    audience: "Learners with some basic computer experience who are ready to start programming."
  },
  {
    id: 5, title: "Frontend Development with JavaScript", category: "Web Development", level: "Intermediate",
    duration: "8 weeks", lessons: 16, keywords: ["javascript", "dom", "interactive"],
    description: "Make webpages interactive with JavaScript and the DOM.",
    overview: "Turn static pages into interactive applications. You will learn JavaScript fundamentals and use the DOM to respond to what users do.",
    learn: ["Write JavaScript with functions, arrays and objects", "Select and update elements with the DOM", "Handle events such as clicks and typing", "Build a small interactive project"],
    syllabus: ["JavaScript fundamentals", "Arrays and objects", "Functions", "DOM manipulation", "Events and forms", "Working with data", "Debugging", "Capstone project"],
    audience: "Learners who already know basic HTML and CSS."
  },
  {
    id: 6, title: "Advanced Web Design", category: "Web Development", level: "Advanced",
    duration: "6 weeks", lessons: 12, keywords: ["responsive", "grid", "layout"],
    description: "Create polished, responsive layouts with modern CSS techniques.",
    overview: "Go beyond the basics and design professional, accessible and fully responsive interfaces using Flexbox, Grid and modern CSS.",
    learn: ["Build complex layouts with Grid and Flexbox", "Design mobile-first responsive pages", "Create a consistent system with CSS variables", "Improve accessibility and performance"],
    syllabus: ["Advanced Flexbox", "CSS Grid", "Responsive strategies", "CSS variables", "Accessibility and performance", "Final redesign project"],
    audience: "Learners with solid HTML and CSS skills."
  },
  {
    id: 7, title: "Brand Identity and Logo Design", category: "Graphic Design", level: "Intermediate",
    duration: "6 weeks", lessons: 12, keywords: ["logo", "branding"],
    description: "Design logos and visual identities that tell a clear story.",
    overview: "Develop a complete brand identity, from research and sketches to a finished logo and style guide.",
    learn: ["Research a brand and its audience", "Sketch and refine logo concepts", "Build a colour and type system", "Present a brand style guide"],
    syllabus: ["Brand research", "Logo concepts", "Vector refinement", "Colour and typography", "Brand guidelines", "Final presentation"],
    audience: "Learners who have completed a design fundamentals course or have equal experience."
  },
  {
    id: 8, title: "SEO and Content Strategy", category: "Digital Marketing", level: "Intermediate",
    duration: "5 weeks", lessons: 10, keywords: ["seo", "search", "web"],
    description: "Improve search rankings with keyword research and quality content.",
    overview: "Understand how search engines rank pages and create content that people actually find and read.",
    learn: ["Research keywords", "Optimise on-page elements", "Plan search-friendly content", "Track results with analytics"],
    syllabus: ["How search engines work", "Keyword research", "On-page SEO", "Content planning", "Measuring results"],
    audience: "Learners who know the basics of digital marketing."
  },
  {
    id: 9, title: "Data Structures and Algorithms", category: "Programming", level: "Advanced",
    duration: "10 weeks", lessons: 20, keywords: ["dsa", "problem solving", "sorting"],
    description: "Solve problems efficiently with arrays, trees, graphs and sorting.",
    overview: "Build the problem-solving skills used in real software and technical interviews, with a focus on efficiency and clear reasoning.",
    learn: ["Analyse time and space complexity", "Implement stacks, queues, trees and graphs", "Apply searching and sorting algorithms", "Approach new problems systematically"],
    syllabus: ["Complexity analysis", "Arrays and linked lists", "Stacks and queues", "Trees", "Graphs", "Sorting and searching", "Dynamic programming basics"],
    audience: "Learners who are comfortable programming in at least one language."
  },
  {
    id: 10, title: "Data Analysis with Python", category: "Data Science", level: "Intermediate",
    duration: "8 weeks", lessons: 16, keywords: ["python", "pandas", "charts"],
    description: "Clean, analyse and visualise data using Python libraries.",
    overview: "Work with real datasets to clean data, find patterns and present your findings with clear charts.",
    learn: ["Load and clean data with pandas", "Summarise and group data", "Create charts", "Tell a story with data"],
    syllabus: ["Python refresher", "Introduction to pandas", "Cleaning data", "Grouping and summarising", "Visualisation", "Exploratory analysis", "Final report"],
    audience: "Learners who know basic Python."
  },
  {
    id: 11, title: "Machine Learning Foundations", category: "Data Science", level: "Advanced",
    duration: "12 weeks", lessons: 24, keywords: ["ml", "ai", "models"],
    description: "Train and evaluate your first predictive models.",
    overview: "An introduction to the core ideas of machine learning, from preparing data to training and judging models.",
    learn: ["Understand supervised and unsupervised learning", "Train regression and classification models", "Evaluate models and avoid overfitting", "Prepare data for modelling"],
    syllabus: ["Machine learning concepts", "Data preparation", "Linear regression", "Classification", "Model evaluation", "Overfitting and tuning", "Clustering", "Capstone project"],
    audience: "Learners with Python skills and basic maths."
  }
];

// Course images by category (Data Science reuses ppc.png until you add its own image)
const categoryImages = {
  "Web Development":   "assets/wd.png",
  "Graphic Design":    "assets/gde.jpeg",
  "Digital Marketing": "assets/dm.jpeg",
  "Programming":       "assets/ppc.png",
  "Data Science":      "assets/ppc.png"
};

// Build one course card (a Bootstrap column) - used on the list page and the detail page
function createCourseCard(course) {
  const column = document.createElement("div");
  column.className = "col-12 col-md-6 col-xl-3";

  column.innerHTML = `
    <article class="card course-card h-100">
      <img src="${categoryImages[course.category]}" class="card-img-top course-image"
           alt="${course.title} course" loading="lazy">
      <div class="card-body d-flex flex-column p-4">
        <div class="d-flex justify-content-between align-items-center gap-2 flex-wrap mb-2">
          <span class="badge category-badge">${course.category}</span>
          <span class="level">${course.level}</span>
        </div>
        <h3 class="card-title"><a href="course.html?id=${course.id}">${course.title}</a></h3>
        <p class="card-text">${course.description}</p>
        <div class="course-facts d-flex flex-wrap gap-3 mt-auto pt-3 mb-3">
          <span>◷ ${course.duration}</span>
          <span>▤ ${course.lessons} lessons</span>
        </div>
        <a href="course.html?id=${course.id}" class="btn btn-success course-button w-100">
          Enroll Course <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>`;

  return column;
}

/* =====================================================================
   PAGE SCRIPTS
   Each page only runs its own section: a section starts only if the
   elements it needs exist on the current page, so nothing breaks.
   ===================================================================== */

// ---------- HOME PAGE (index with featured courses) ----------
function initHome() {
  const featuredContainer = document.getElementById("featuredCourses");
  if (!featuredContainer) return;

  const totalLessons = courses.reduce(function (sum, course) { return sum + course.lessons; }, 0);
  const categoryCount = new Set(courses.map(function (course) { return course.category; })).size;

  const statCourses = document.getElementById("statCourses");
  const statCategories = document.getElementById("statCategories");
  const statLessons = document.getElementById("statLessons");
  if (statCourses) statCourses.textContent = courses.length;
  if (statCategories) statCategories.textContent = categoryCount;
  if (statLessons) statLessons.textContent = totalLessons;

  // Featured courses: the first four
  courses.slice(0, 4).forEach(function (course) {
    featuredContainer.appendChild(createCourseCard(course));
  });
}

// ---------- COURSE LIST PAGE: search, filters, sorting, reset ----------
function initCourseList() {
  const courseContainer = document.getElementById("courseContainer");
  if (!courseContainer) return;

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const levelFilter = document.getElementById("levelFilter");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetBtn");
  const noResults = document.getElementById("noResults");
  const courseCount = document.getElementById("courseCount");
  const filterForm = document.getElementById("filterForm");

  // Show a list of courses (or the no-results message)
  function displayCourses(list) {
    courseContainer.innerHTML = "";

    list.forEach(function (course) {
      courseContainer.appendChild(createCourseCard(course));
    });

    if (noResults) noResults.hidden = list.length > 0;
    if (courseCount) courseCount.textContent = String(list.length).padStart(2, "0");
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

  // Events
  searchInput.addEventListener("input", filterCourses);
  categoryFilter.addEventListener("change", filterCourses);
  levelFilter.addEventListener("change", filterCourses);
  sortSelect.addEventListener("change", filterCourses);
  resetBtn.addEventListener("click", clearFilters);

  // Pressing Enter in the search box should not reload the page
  if (filterForm) {
    filterForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  // Initial render
  displayCourses(courses);
}

// ---------- COURSE DETAIL PAGE: reads ?id=4 from the URL ----------
function initCourseDetail() {
  const detailEl = document.getElementById("courseDetail");
  if (!detailEl) return;

  const breadcrumbTitle = document.getElementById("breadcrumbTitle");
  const notFoundEl = document.getElementById("notFound");
  const relatedSection = document.getElementById("relatedSection");
  const relatedGrid = document.getElementById("relatedGrid");
  const relatedHeading = document.getElementById("relatedHeading");

  // 1. Read the id from the address bar
  function getCourseId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
  }

  // 2. Find the matching course object
  function findCourse(id) {
    return courses.find(function (course) { return course.id === id; });
  }

  // Turn an array into list items
  function toListItems(items, itemClass) {
    return items.map(function (item) {
      return `<li class="${itemClass}">${item}</li>`;
    }).join("");
  }

  // 3. Render the course
  function renderCourse(course) {
    document.title = `${course.title} | YSSE Learning`;
    breadcrumbTitle.textContent = course.title;

    detailEl.innerHTML = `
      <div class="col-lg-8 order-2 order-lg-1">
        <img src="${categoryImages[course.category]}" class="detail-image w-100 rounded-4 mb-4"
             alt="${course.title} course">

        <div class="d-flex align-items-center gap-3 mb-2">
          <span class="badge category-badge">${course.category}</span>
          <span class="level">${course.level}</span>
        </div>

        <h2 class="display-6 fw-bold mb-3">${course.title}</h2>
        <p class="intro">${course.overview}</p>

        <h3 class="h4 fw-bold mt-5 mb-3">What you will learn</h3>
        <ul class="list-group list-group-flush mb-5">${toListItems(course.learn, "list-group-item px-0")}</ul>

        <h3 class="h4 fw-bold mb-3">Course content</h3>
        <ol class="list-group list-group-numbered mb-5">${toListItems(course.syllabus, "list-group-item")}</ol>

        <h3 class="h4 fw-bold mb-3">Who is this course for?</h3>
        <p class="text-muted mb-0">${course.audience}</p>
      </div>

      <aside class="col-lg-4 order-1 order-lg-2">
        <div class="card enroll-card sticky-lg-top p-4">
          <h3 class="h5 fw-bold mb-3">Course details</h3>

          <ul class="list-unstyled course-facts border-0 mb-4">
            <li class="d-flex justify-content-between py-2 border-bottom"><span>Duration</span><strong>${course.duration}</strong></li>
            <li class="d-flex justify-content-between py-2 border-bottom"><span>Lessons</span><strong>${course.lessons} lessons</strong></li>
            <li class="d-flex justify-content-between py-2"><span>Level</span><strong>${course.level}</strong></li>
          </ul>

          <a href="enroll.html?course=${course.id}" class="btn btn-success course-button w-100 mb-2">
            Enroll Now <span aria-hidden="true">↗</span>
          </a>
          <a href="index.html" class="btn btn-outline-success w-100">Back to all courses</a>
        </div>
      </aside>`;

    renderRelated(course);
  }

  // More courses from the same category
  function renderRelated(course) {
    const related = courses.filter(function (c) {
      return c.category === course.category && c.id !== course.id;
    });

    if (related.length === 0) return;

    relatedHeading.textContent = `More in ${course.category}`;
    related.forEach(function (c) {
      relatedGrid.appendChild(createCourseCard(c));
    });
    relatedSection.hidden = false;
  }

  // 4. Start
  const currentCourse = findCourse(getCourseId());

  if (currentCourse) {
    renderCourse(currentCourse);
  } else {
    breadcrumbTitle.textContent = "Not found";
    notFoundEl.hidden = false;
  }
}

// ---------- ENROLL PAGE: ?course=4 pre-selects a course ----------
function initEnroll() {
  const enrollForm = document.getElementById("enrollForm");
  const courseSelect = document.getElementById("course");
  if (!enrollForm || !courseSelect) return;

  const enrollMessage = document.getElementById("enrollMessage");

  // Add one <option> per course
  courses.forEach(function (course) {
    const option = document.createElement("option");
    option.value = course.id;
    option.textContent = course.title;
    courseSelect.appendChild(option);
  });

  // Pre-select the course from the URL, if there is one
  const selectedId = new URLSearchParams(window.location.search).get("course");
  if (selectedId && courses.some(function (c) { return String(c.id) === selectedId; })) {
    courseSelect.value = selectedId;
  }

  // No backend: show a confirmation message instead of sending the form
  enrollForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const chosen = courseSelect.options[courseSelect.selectedIndex].textContent;

    enrollMessage.textContent = `Thank you, ${name}! Your enrollment request for "${chosen}" has been received.`;
    enrollMessage.hidden = false;
    enrollMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    enrollForm.reset();
  });
}

// ---------- CONTACT PAGE ----------
function initContact() {
  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");
  if (!contactForm || !contactMessage) return;

  // No backend: show a confirmation message instead of sending
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("cname").value.trim();
    contactMessage.textContent = `Thank you, ${name}! Your message has been received. We will reply soon.`;
    contactMessage.hidden = false;
    contactForm.reset();
  });
}

// ---------- START ----------
// Scripts load at the end of <body>, but this also works if placed in <head> with "defer"
function initPage() {
  initHome();
  initCourseList();
  initCourseDetail();
  initEnroll();
  initContact();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
