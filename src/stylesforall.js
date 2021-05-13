const copycatfontFamily = "Comic Sans MS, Lucida Handwriting, cursive";
const copycatinputfontSize = "2vh";
const copycatbackgroundColor = "rgb(150, 161, 227)";
const copycatminHeight = "100vh";
const copycatminWidth = 500;
const copycatdisplay = "flex";
const copycatflexDirection = "column";
const copycatalignItems = "center";
const copycatjustifyContent = "center";
const copycatcolor = "rgb(66, 245, 212)";
const copycatmarginTop = "10px";
const copycatwidth = "30%";
const copycatp = "#fff";
const copycatpfontSize = "4rem";

const copycatpStyles = {
  color: copycatp,
  fontSize: copycatpfontSize,
};
const copycatinputStyles = {
  fontSize: copycatinputfontSize,
};
const copycatdivStyles = {
  fontFamily: copycatfontFamily,
  // fontSize: copycatinputfontSize,
  color: copycatcolor,
  backgroundColor: copycatbackgroundColor,
  minHeight: copycatminHeight,
  minWidth: copycatminWidth,
  display: copycatdisplay,
  flexDirection: copycatflexDirection,
  alignItems: copycatalignItems,
  justifyContent: copycatjustifyContent,
};

const copycatimgStyles = {
  marginTop: copycatmarginTop,
  width: copycatwidth,
};

export const copycatstyles = {
  copycatdivStyles: copycatdivStyles,
  copycatimgStyles: copycatimgStyles,
  copycatpStyles: copycatpStyles,
  copycatinputStyles: copycatinputStyles,
};

// ramdom text colpor styles

// .textColor {
const randomcolordivmargintop = "5rem";
const randomcolordivmarginleft = "25rem";
const randomcolourdivfontfamily = "serif";
// randomtext color h1 styles
const randomcolorh1width = "36rem";
const randomcolorh1marginbottom = "2rem";

const randomcolordivStyles = {
  marginTop: randomcolordivmargintop,
  marginLeft: randomcolordivmarginleft,
  fontFamily: randomcolourdivfontfamily,
};
const randomcolorh1Styles = {
  width: randomcolorh1width,
  marginBottom: randomcolorh1marginbottom,
};
export const randomcolorstyles = {
  randomcolorh1Styles: randomcolorh1Styles,
  randomcolordivStyles: randomcolordivStyles,
};

// FLIP ROOM LIGHT LIT STYLES

// page div style
const roomdivmarginLeft = "38rem";

// button div style
const roombuttonbackgroundColor = "rgb(190, 225, 143)";
const roombuttonborderradius = " 50%";

const fliproomdivStyles = {
  marginLeft: roomdivmarginLeft,
};

const fliproombuttonStyles = {
  backgroundColor: roombuttonbackgroundColor,
  borderRadius: roombuttonborderradius,
};
export const fliproomstyles = {
  fliproomdivStyles: fliproomdivStyles,
  fliproombuttonStyles: fliproombuttonStyles,
};

//
const buttonpresstransitionDuration = "0.1s";
const buttonpressbackgroundColor = `#f4595b`;
const buttonpressborderRadius = "8px";
const buttonpresspadding = `15px 32px`;
const buttonpressfontFamily = `"Oxygen", sans-serif`;
const buttonpressmargintop = `5rem`;
const buttonpresswidth = `15rem`;
const buttonpressmarginLeft = `32rem`;
// p tag in class app
const buttonpresspmarginLeft = `32rem`;
const buttononhover = "#ff7375;";
// border-bottom: 4px solid #c24648;
const buttononhoverStyle = {
  backgroundColor: buttononhover,
};
const buttonpressStyle = {
  transitionDuration: buttonpresstransitionDuration,
  backgroundColor: buttonpressbackgroundColor,

  borderRadius: buttonpressborderRadius,
  padding: buttonpresspadding,
  fontFamily: buttonpressfontFamily,
  marginTop: buttonpressmargintop,
  width: buttonpresswidth,
  marginLeft: buttonpressmarginLeft,
};

const buttonpresspStyle = {
  marginLeft: buttonpresspmarginLeft,
};

export const buttonpressstyle = {
  buttonpressStyle: buttonpressStyle,
  buttonpresspStyle: buttonpresspStyle,
  buttononhoverStyle: buttononhoverStyle,
};

// class app styles

const classappdivmarginLeft = `15rem`;
const classappbuttonmarginLeft = `3rem`;
const classappbuttonwidth = `7rem`;

const classappdivmarginStyle = {
  marginLeft: classappdivmarginLeft,
};
const classappbuttonStyle = {
  marginLeft: classappbuttonmarginLeft,
  transitionDuration: buttonpresstransitionDuration,
  backgroundColor: buttonpressbackgroundColor,
  borderRadius: buttonpressborderRadius,
  padding: buttonpresspadding,
  fontFamily: buttonpressfontFamily,
  marginTop: buttonpressmargintop,
  width: classappbuttonwidth,
};

export const classappstyles = {
  classappdivmarginStyle: classappdivmarginStyle,
  classappbuttonStyle: classappbuttonStyle,
};
