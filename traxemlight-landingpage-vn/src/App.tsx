// routing
import Routes from './Routes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import ThemeCustomization from 'themes';

// ==============================|| APP ||============================== //

const App = () => (
    <ThemeCustomization>
        <Locales>
            <NavigationScroll>
                <>
                    <Routes />
                </>
            </NavigationScroll>
        </Locales>
    </ThemeCustomization>
);

export default App;
