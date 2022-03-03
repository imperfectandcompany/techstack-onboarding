import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="bg-red-500">
      <div className="flex flex-row border-red-200 border-8">
<div className="flex flex-row mx-auto mt-32 mb-32 md:hidden">
  For mobile view
</div>
<div className="flex-row mx-auto mt-32 mb-32 hidden md:block">
  For desktop view
</div>
</div>

    </div>
  );
};

export default ExploreContainer;
