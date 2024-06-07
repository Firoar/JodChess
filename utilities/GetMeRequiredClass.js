const GetMeRequiredClass = (ClassStartsWith, Element) => {
  var Classes = Element.classList;

  for (let i = 0; i < Classes.length; i++) {
    if (Classes[i].startsWith(ClassStartsWith)) {
      return Classes[i];
    }
  }
};
export default GetMeRequiredClass;
