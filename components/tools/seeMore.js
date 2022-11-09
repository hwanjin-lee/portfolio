export const handleSeeMore = (state, setState) => {
    state ===  false ? setState(true) : setState(false);
  };

export const styleSeeMore = (state, showingStyle, hidingStyle) => {
    if(state === false){
        return hidingStyle;
    } else if(state === true){
        return showingStyle;
    }
};
export const textSeeMore = (state) => {
    if (state ===  false){
        return "See more";
    } else if(state === true){
        return "See less"
    }
};

export const styleOfFullPicture = (state) => {
    if (state === false){
        return "fullPictureHide";
    } else if(state ===  true){
        return "fullPictureShow";
    }
}