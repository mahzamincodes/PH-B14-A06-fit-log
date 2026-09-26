# FitLog — Workout Library

FitLog is a modern and responsive workout library built with Next.js. It allows users to explore different workouts, view detailed workout information, add workouts to today's plan, save workouts for later, and manage their workout progress from the My Plan page.

## Technologies Used

* Next.js
* React
* JavaScript
* Tailwind CSS
* DaisyUI
* React Toastify
* React Icons
* REST API

## Key Features

1. **Workout Library**
   Browse a collection of workouts with information such as category, equipment, duration, calories, and rating.

2. **Workout Details**
   View detailed information about each workout, including description, difficulty, sets, reps, and instructions.

3. **Today's Plan**
   Add workouts to today's plan and manage them from the My Plan page.

4. **Save for Later**
   Save favorite workouts and access them later from the Saved tab.

5. **Workout Progress**
   Mark workouts as completed without removing them from today's plan.

6. **Sorting**
   Sort workouts by duration, calories, or rating.

7. **Toast Notifications**
   Get instant feedback when adding, saving, completing, or removing workouts.

8. **Responsive Design**
   The application is responsive and works across mobile, tablet, and desktop devices.

## Project Structure

The project uses Next.js App Router and separates reusable UI components, context, and pages for easier development and maintenance.

## API

Workout data is fetched from the FitLog API:

`https://api.abcz.workers.dev/api/fitlog`

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

`http://localhost:3000`

## Project Goal

The goal of FitLog is to provide a simple and focused workout management experience where users can discover workouts, build their daily plan, save workouts, and track completed exercises.
