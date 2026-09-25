# FitLog

FitLog is a modern and responsive workout library and workout planning web application. It allows users to browse workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track their workout progress.

## 📌 Project Description

FitLog helps users organize their workouts in a simple and focused interface. Users can explore a collection of exercises, add workouts to today's plan, save their favorite workouts, and manage their daily routine.

The application is designed to work smoothly across desktop, tablet, and mobile devices.

## 🛠️ Technologies Used

- **Next.js** – React framework for building the application
- **React** – User interface development
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Responsive styling and UI design
- **React Toastify** – Toast notifications
- **LocalStorage** – Persistent workout plan and saved workouts
- **REST API** – Workout data fetching
- **Vercel** – Deployment

## ✨ Key Features

### 1. Workout Library

Browse a collection of workouts with useful information such as:

- Workout name
- Muscle groups
- Equipment
- Duration
- Calories
- Rating

### 2. Workout Details

Each workout has a dedicated details page containing:

- Workout image
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Workout instructions

### 3. Today's Workout Plan

Users can add workouts to their daily plan and manage them easily.

- Maximum of 5 workouts
- Remove workouts
- Mark workouts as completed
- Automatic exercise, duration, and calorie calculations

### 4. Save Workouts for Later

Users can save workouts for future use.

Saved workouts are stored locally and remain available after refreshing the page.

### 5. Responsive Design

FitLog is fully responsive and optimized for:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

The interface includes a responsive navigation bar, workout cards, detailed workout pages, and a mobile-friendly workout planner.

## 🔔 User Feedback

FitLog uses React Toastify to provide instant feedback for user actions, including:

- Added to today's plan
- Already in today's plan
- Saved for later
- Already saved
- Workout marked as done
- Workout removed

## 📊 Workout Sorting

Users can sort their workouts by:

- Duration
- Calories
- Rating

## 💾 Data Persistence

Workout plans and saved workouts are stored using browser LocalStorage, allowing the user's data to remain available after refreshing the page.

## 📁 Main Project Structure

```text
src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navber.tsx
│   ├── PlanCard.tsx
│   ├── SortDropdown.tsx
│   ├── WorkoutActions.tsx
│   ├── WorkoutCard.tsx
│   └── WorkoutGrid.tsx
│
├── context/
│   └── FitLogContext.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── workout.ts
