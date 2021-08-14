import { useMediaQuery } from 'react-responsive'
import desktopLightImage from '../images/bg-desktop-light.jpg';
import desktopDarkImage from '../images/bg-desktop-dark.jpg';
import mobileDarkImage from '../images/bg-mobile-dark.jpg';
import mobileLightImage from '../images/bg-mobile-light.jpg';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';
import '../css/header.css';


export default function Header(props){
    const isMobile = useMediaQuery({
        query: 'only screen and (max-width: 700px)'
    })
    const desktopImage = props.theme === 'light' ? desktopLightImage : desktopDarkImage;
    const mobileImage = props.theme === 'light' ? mobileLightImage : mobileDarkImage;
    const image = isMobile ? mobileImage : desktopImage;
    return (<>
        <div className="header">
            <img className="header-image" src={image} />
            <div className="header__nav">
                <div className="header__nav-title">
                    Todo
                </div>
                <div className="header__nav-mode">
                    <img src={props.theme === 'light' ? moonIcon : sunIcon} onClick={() => {
                        props.changeTheme();
                    }}></img>
                </div>
            </div>
        </div>
    </>)
}