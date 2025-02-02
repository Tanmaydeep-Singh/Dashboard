import React from 'react';
import Card from './Cards';

const CardBlock = () => {
  const cards = [
    { title: 'Total Course', value: '1345', icon: '/icons/TotalCourse.png' },
    { title: 'Active Students', value: '23k', icon: '/icons/ActiveStudents.png' },
    { title: 'Total Revenue', value: '$1234.90', icon: '/icons/TotalRevenue.png' },
    { title: 'New Enrollment', value: '34', icon: '/icons/NewEnrollment.png' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} value={card.value} icon={card.icon} />
      ))}
    </div>
  );
};

export default CardBlock;
