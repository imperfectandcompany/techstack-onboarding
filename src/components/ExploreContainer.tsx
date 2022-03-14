import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="bg-red-500">
      <div className="flex flex-row border-8 border-red-200">
<div className="flex flex-row mx-auto mt-32 mb-32 md:hidden">
  For mobile view
</div>
<div className="flex-row hidden mx-auto mt-32 mb-32 md:block">
  For desktop view
</div>
</div>



    </div>
  );
};

export default ExploreContainer;
