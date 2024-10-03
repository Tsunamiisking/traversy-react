import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";


const App = () => {
  const addJob = (newJob) => {

    console.log(newJob); 
  
  }
  
  const router = createBrowserRouter (
   createRoutesFromElements (
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/jobs" element={<JobsPage/>}/>
      <Route path="/add-job" element={<AddJob  addJobSubmit={addJob}/>}/>
      <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
   )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
