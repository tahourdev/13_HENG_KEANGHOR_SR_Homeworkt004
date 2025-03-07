import React from 'react';
import AddNewProjectComponent from './AddNewProjectComponent';

export default function AssignmentsComponent({ assignmentHandle }) {
  return (
    <div>
      <div className="flex justify-between">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent assignmentHandle={assignmentHandle} />
      </div>
    </div>
  );
}
