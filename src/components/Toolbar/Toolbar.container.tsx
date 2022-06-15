import { useState } from 'react';
import ToolbarComponent from './Toolbar.component';
import './Toolbar.css'

const Toolbar: React.FC = () => {

  const [isMobileMenuOpen, setMobileMenu] = useState(false);


  return (
<ToolbarComponent setMobileMenu={setMobileMenu} isMobileMenuOpen={isMobileMenuOpen}></ToolbarComponent>
    )
}

export default Toolbar