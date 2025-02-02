import React from 'react';
import Card from './Cards';

const CardBlock = () => {
  const cards = [
    { id: 1, title: 'Total Course', value: '1345', icon: '/icons/TotalCourse.png' },
    { id: 2, title: 'Active Students', value: '23k', icon: '/icons/ActiveStudents.png' },
    { id: 3, title: 'Total Revenue', value: '$1234.90', icon: '/icons/TotalRevenue.png' },
    { id: 4, title: 'New Enrollment', value: '34', icon: '/icons/NewEnrollment.png' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 p-4">
      {cards.map(({ id, title, value, icon }) => (
        <Card key={id} title={title} value={value} icon={icon} />
      ))}
    </div>
  );
};

export default CardBlock;
