/*-----------------------------------------------Parte 1-------------------------------------------------------------------------------*/

function validateProperty(obj, validation) {
  return validation.validators.every((elem) => elem(obj[validation.name]));
}

/*-----------------------------------------------Parte 2-------------------------------------------------------------------------------*/

function validateProperties(obj, validation) {
  return validation
    .map((elem, index) => elem.name)
    .filter((elem, index) => !validateProperty(obj, validation[index]));
}

/*-----------------------------------------------Parte 3-------------------------------------------------------------------------------*/

Object.prototype.validateProperties = function (validation) {
  return validateProperties(this, validation);
};

export const validatorModule = {
  validateProperty,
  validateProperties,
};

export default validatorModule;
