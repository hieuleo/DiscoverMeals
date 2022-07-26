
import { Navigate , useOutlet} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { getStateUser} from '../../../redux/selector/auth/stateAuth';
import { useSelector} from 'react-redux';

const ProtectedLayout = ({children}) => {
    const {user} = useSelector(createStructuredSelector({
        user: getStateUser,
    }));
    
    const outlet = useOutlet();
    if ( user === null ) {
        return <Navigate to={"/DiscoverMeals/login"}/>
    }

    return(
        <>
            <>
                {children}
            </>
            {outlet}    
        </>
    )
};

export default ProtectedLayout