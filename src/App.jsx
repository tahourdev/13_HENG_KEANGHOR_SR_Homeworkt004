import React, { useState } from 'react';
import AssignmentsComponent from './components/AssignmentsComponent';
import DashboardComponent from './components/DashboardComponent';
import SidebarComponent from './components/SidebarComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import LearningMaterialsComponent from './components/LearningMaterialsComponent';
import './App.css';
import CardComponent from './components/CardComponent';

function App() {
  const [assignments, setAssignments] = useState([
    {
      name: 'Web Designing',
      dueDate: 'Feb 17, 2025',
      description:
        'You should make web design pack with 30 different pose and with other component on the internet as well.',
      progress: 100,
    },
    {
      name: 'Mobile App',
      dueDate: 'May 01, 2025',
      description:
        'You should make web design pack with 30 different pose and with other component on the internet as well.',
      progress: 50,
    },
    {
      name: 'Ticket API',
      dueDate: 'Mar 14, 2025',
      description:
        'You should make web design pack with 30 different pose and with other component on the internet as well.',
      progress: 75,
    },
    {
      name: 'Movie System',
      dueDate: 'Mar 15, 2025',
      description:
        'You should make web design pack with 30 different pose and with other component on the internet as well.',
      progress: 25,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const assignmentHandle = (name, dueDate, progress, description) => {
    const newAssignment = { name, dueDate, progress, description };
    setAssignments((prevAssignment) => [...prevAssignment, newAssignment]);
  };

  return (
    <section className="flex gap-6 pr-8">
      <SidebarComponent />
      <section className="w-full space-y-8 mt-6">
        <TopNavbarComponent setSearchQuery={setSearchQuery} />
        <div className="flex gap-10">
          <div className="space-y-8  w-full">
            <DashboardComponent />
            <AssignmentsComponent assignmentHandle={assignmentHandle} />
            <div className="h-[50vh] py-4 no-scrollbar overflow-auto w-full">
              <CardComponent searchQuery={searchQuery} assignments={assignments} />
            </div>
          </div>
          <LearningMaterialsComponent />
        </div>
      </section>
    </section>
  );
}

export default App;
