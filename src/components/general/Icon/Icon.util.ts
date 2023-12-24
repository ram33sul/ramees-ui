import assessmentBlack from "./assets/assessment_black.png";
import assessmentWhite from "./assets/assessment_white.png";
import cartBlack from "./assets/cart_black.png";
import cartWhite from "./assets/cart_white.png";
import dropdownArrowBlack from "./assets/dropdown_arrow_white.png";
import dropdownArrowWhite from "./assets/dropdown_arrow_white.png";
import loaderWhite from "./assets/loader_white.png";
import loaderBlack from "./assets/loader_black.png";
import notificationBlack from "./assets/notification_black.png";
import notificationWhite from "./assets/notification_white.png";
import quizBlack from "./assets/quiz_black.png";
import quizWhite from "./assets/quiz_white.png";
import readingBlack from "./assets/reading_black.png";
import readingWhite from "./assets/reading_white.png";
import searchBlack from "./assets/search_black.png";
import searchWhite from "./assets/search_white.png";
import videoBlack from "./assets/video_black.png";
import videoWhite from "./assets/video_white.png";
import star from "./assets/star_.png";
import rightArrow from "./assets/right_arrow_.png";
import { IconType } from "../../../Types/general";

export const icons: {
  [K in IconType]: {
    black: any;
    white?: any;
  };
} = {
  assessment: {
    black: assessmentBlack,
    white: assessmentWhite,
  },
  cart: {
    black: cartBlack,
    white: cartWhite,
  },
  dropdownArrow: {
    black: dropdownArrowBlack,
    white: dropdownArrowWhite,
  },
  loader: {
    black: loaderBlack,
    white: loaderWhite,
  },
  notification: {
    black: notificationBlack,
    white: notificationWhite,
  },
  quiz: {
    black: quizBlack,
    white: quizWhite,
  },
  reading: {
    black: readingBlack,
    white: readingWhite,
  },
  search: {
    black: searchBlack,
    white: searchWhite,
  },
  video: {
    black: videoBlack,
    white: videoWhite,
  },
  star: {
    black: star,
  },
  rightArrow: {
    black: rightArrow,
  },
};
