export const handleSeeMore = (state, setState) => {
    state == 0 ? setState((state += 1)) : setState((state -= 1));
  };

export const styleSeeMore = (state, showingStyle, hidingStyle) => {
    if(state == 0){
        return hidingStyle;
    } else if(state == 1){
        return showingStyle;
    }
};
export const textSeeMore = (state) => {
    if (state == 0){
        return "See more";
    } else if(state == 1){
        return "See less"
    }
};

export const styleOfFullPicture = (state) => {
    if (state == 0){
        return "fullPictureHide";
    } else if(state == 1){
        return "fullPictureShow";
    }
}