import { IonButton, IonIcon } from '@ionic/react';
import './ExploreContainer.css';
import { ellipsisHorizontal, ellipsisVertical, mail } from 'ionicons/icons';

interface ContainerProps { }

const printPost=()=>{
return (
  <div className="flex justify-center h-auto overflow-hidden">
  <div className="mb-2 transition bg-white rounded shadow-sm md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96 border-6">
    <div className="px-6 py-3 md:px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://codingforum.site/img/default/avatar9.jpg" className="bg-gray-300 border border-2 border-red-300 rounded-full h-11 w-11" alt="hyperandey" />
          <div>
            <h2 className="font-semibold text-black">Username</h2>
            <p className="text-xs text-gray-400">11 hours ago</p>
          </div>
        </div>
        <div className='flex text-black'>
        <IonIcon slot="start" icon={ellipsisVertical} />
          </div>
      </div>
    </div>
    <div className="px-6 md:px-0">
      <p className="text-base text-gray-700 ">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
    <div className="px-6 py-3 text-gray-600 md:px-0 ">
      <div className="flex space-x-3">
        <div className="text-xs text-center text-gray-500">
          <p>0</p>
          <p>Likes</p>
        </div>
        <div className="text-xs text-center text-gray-500">
          <p>0</p>
          <p>Comments</p>
        </div>
        <div className="text-xs text-center text-gray-500">
          <p>0</p>
          <p>Shares</p>
        </div>
      </div>
    </div>
  </div>
</div>

)
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (<div>
  {printPost()}
  {printPost()}
  {printPost()}
  {printPost()}
  {printPost()}
  </div>
    
  );
};

export default ExploreContainer;