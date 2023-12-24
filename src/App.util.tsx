import ButtonTest from "./components/general/Button/ButtonTest";
import Dropdown from "./components/general/Dropdown/Dropdown.component";
import ErrorComponent from "./components/general/ErrorComponent/ErrorComponent.component";
import IconTest from "./components/general/Icon/IconTest";
import Input from "./components/general/Input/Input.component";
import Loader from "./components/general/Loader/Loader.component";
import LogoTest from "./components/general/Logo/LogoTest";
import Popup from "./components/general/Popup/Popup.component";
import ProfileImage from "./components/general/ProfileImage/ProfileImage.component";
import RatingTest from "./components/general/Rating/RatingTest";
import ReviewCardTest from "./components/general/ReviewCard/ReviewCardTest";
import SubmoduleSideCardTest from "./components/general/SubmoduleSideCard/SubmoduleSideCardTest";
import TimeLeftChipTest from "./components/general/TimeLeftChip/TimeLeftChipTest";

export const routes = [
    {
        path: "/button",
        element: <ButtonTest />
    },{
        path: "/dropdown",
        element: <Dropdown />
    },{
        path: "/error-component",
        element: <ErrorComponent />,
    },{
        path: "/icon",
        element: <IconTest />
    },{
        path: "/input",
        element: <Input />
    },{
        path: "/loader",
        element: <Loader />
    },{
        path: "/logo",
        element: <LogoTest />
    },{
        path: "/profile-image",
        element: <ProfileImage />
    },{
        path: "/rating",
        element: <RatingTest />
    },{
        path: "/review-card",
        element: <ReviewCardTest />
    },{
        path: "/submodule-side-card",
        element: <SubmoduleSideCardTest />
    },{
        path: "/time-left-chip",
        element: <TimeLeftChipTest />
    },{
        path: "/popup",
        element: <Popup isVisible={true} >This is a popup</Popup>
    }
]