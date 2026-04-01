import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";

// Lazy pages
const Home = lazy(() => import("../pages/Home"));
const Courses = lazy(() => import("../pages/Courses"));
const Lab = lazy(() => import("../pages/Lab"));
const Quizzes = lazy(() => import("../pages/Quizzes"));
const Profile = lazy(() => import("../pages/Profile"));

// Loader (fallback UI)
const Loader = () => (
    <div className="text-white flex items-center justify-center h-screen">
        Loading...
    </div>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loader />}>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "courses",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Courses />
                    </Suspense>
                ),
            },
            {
                path: "lab",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Lab />
                    </Suspense>
                ),
            },
            {
                path: "quizzes",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Quizzes />
                    </Suspense>
                ),
            },
            {
                path: "profile",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Profile />
                    </Suspense>
                ),
            },
            {
                path: "*",
                element: <div>404 Not Found</div>
            }
        ],
    },
]);