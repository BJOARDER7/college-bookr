import img1 from '../../assets/group1.jpg'
import img2 from '../../assets/group2.jpg'
import img3 from '../../assets/group3.jpg'
import img4 from '../../assets/group4.jpg'
import img5 from '../../assets/group5.jpg'
import img6 from '../../assets/group6.jpg'

const Home = () => {
  return (
    <header className='grid grid-cols-1 md:grid-cols-2 my-5'>
      <div className='pr-6'>
        <h2><span className='text-2xl font-bold'>College Photo Gallery <br /></span></h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 my-5 gap-2'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        </div>
        
      </div>
      
    </header>
  );
};

export default Home;