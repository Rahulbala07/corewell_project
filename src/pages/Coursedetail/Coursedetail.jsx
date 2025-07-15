import { useParams } from 'react-router-dom';
import slideDetails from '../../data/sliderdetails.json'; // Assuming you have a data file with slide details



function DetailsPage() {
  const { id } = useParams();
   const slideData = slideDetails.find(item => item.id === parseInt(id));

  if (!slideData) return <p style={{ padding: '2rem' }}>Slide not found</p>;

  return (
    <div className='parent-home'>
      <h2>{slideData.title}</h2>
      <p>{slideData.description}</p>
    </div>
  );
}

export default DetailsPage;
