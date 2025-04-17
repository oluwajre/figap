import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({title}) => {
    const location = useLocation();

    useEffect(() => {
      if (title === '') {
        document.title = 'Figap';
      }
      else {
        document.title = `Figap - ${title}`;
      };
      
    }, [location.pathname, title]);
  
    return null;
}

export default PageTitle