
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrainById } from '../api';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrainById(trainId);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching single train:', error);
      }
    };

    fetchData();
  }, [trainId]);

  return (
    <div>
      {/* Display single train details */}
    </div>
  );
};

export default SingleTrain;
