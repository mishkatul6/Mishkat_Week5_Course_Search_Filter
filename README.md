# YSSE Course Search & Filter System


## Features

- 11 courses stored in a JavaScript array of objects, with cards generated dynamically
- **Search** by course title, with partial and case-insensitive matching
- **Category filter** (Web Development, Programming, Graphic Design, Digital Marketing, Data Science)
- **Difficulty filter** (Beginner, Intermediate, Advanced)
- Search and both filters work **together**
- **Clear Filters** button resets everything and shows all courses
- Friendly **"No courses found"** message when nothing matches
- Live result counter and sorting by title or duration
- **Dynamic course page** (`course.html?id=4`) that changes with the course id
- Enrollment form with the course pre-selected from the URL
- Home, About, Events and Contact demo pages
- Responsive layout: 4 cards per row on desktop, 2 on tablet, 1 on mobile

## Pages

| Page | Purpose |
|------|---------|
| `home.html` | Landing page with live stats and featured courses |
| `about.html` | Mission, vision and values |
| `events.html` | Sample upcoming events |
| `index.html` | **Courses**: search, filters and course cards |
| `course.html` | Course details, loaded by `?id=` |
| `enroll.html` | Enrollment form (`?course=` pre-selects a course) |
| `contact.html` | Contact details and message form |

## Project Structure

```
course-search-filter/
├── index.html
├── course.html
├── enroll.html
├── home.html
├── about.html
├── events.html
├── contact.html
├── style.css
├── MAIN.js     
├── script.js      
└── assets/
    ├── logo.png
    ├── wd.png
    ├── gde.jpeg
    ├── dm.jpeg
    └── ppc.png
```

## How It Works

1. **Data:** every course is an object in the `courses` array in `courses.js`.

   ```js
   {
     id: 1,
     title: "Introduction to Web Development",
     category: "Web Development",
     level: "Beginner",
     duration: "6 weeks",
     lessons: 12,
     ...
   }
   ```

2. **Course list:** `filterCourses()` in `script.js` runs on every `input` or `change` event. It keeps only the courses that match the search text, category and level, then `displayCourses()` rebuilds the cards.
3. **Course page:** each card links to `course.html?id=N`. `course.js` reads `id` with `URLSearchParams`, finds the course with `findCourse()` and fills in the page. An unknown id shows a "Course not found" message.
4. **Enrollment:** "Enroll Now" opens `enroll.html?course=N`, and `enroll.js` selects that course in the dropdown.

## JavaScript Concepts Used

- Variables with `const` and `let`, plus strings, numbers and booleans
- Arrays of objects and property access
- Functions: `displayCourses()`, `searchCourses()`, `filterCourses()`, `clearFilters()`, `findCourse()`
- Array methods: `filter`, `some`, `map`, `forEach`, `reduce`, `sort`
- Events: `input`, `change`, `click`, `submit`
- DOM: `getElementById`, `createElement`, `appendChild`, `innerHTML`, `textContent`
- `URLSearchParams` to read values from the address bar

## Run Locally

1. Download or clone the repository.
2. Make sure the `assets/` folder is next to the HTML files.
3. Open `index.html` in a browser. No server or install is needed.

## Add a New Course

Add one object to the `courses` array in `courses.js` with the next unused `id`. It will appear in the course list, get its own detail page and show up in the enrollment dropdown automatically.


## Notes

- Built with **HTML, CSS and vanilla JavaScript**. Bootstrap 5 is used for CSS only, loaded from a CDN, with no Bootstrap JavaScript and no other frameworks or libraries.
- There is no backend or database. The enrollment and contact forms show a confirmation message only.
- Events, contact details and some course content are **sample content** for demonstration.
- The Data Science courses reuse `ppc.png` until they get their own image.

## Author

Mishkatul Islam
Web Development & CMS Wing ·
YSSE IT Department ·
