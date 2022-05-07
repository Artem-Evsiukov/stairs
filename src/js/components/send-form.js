const constraints = {
  email: {
    presence: true,
    email: true,
  },
  subject: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20,
    },
    format: {
      pattern: '[a-z 0-9]+',
      flags: 'i',
      message: 'can only contain a-z and 0-9',
    },
  },

  message: {
    presence: true,
    // format: {
    //   pattern: '[a-z0-9]+',
    //   flags: 'i',
    //   message: 'can only contain a-z and 0-9',
    // },
  },
};

const FORM = document.getElementById('form-contact');
const FORM1 = document.getElementById('form-contact2');
const FORM2 = document.getElementById('Quiz');
const FORM3 = document.getElementById('form-masterscall');
const FORM4 = document.getElementById('form-contact-tree');
const FORM_GROUP = 'form__group';
const MESSAGE = '.form__error-text';

const sendForm = (() => {
  const addError = (messages, error) => {
    const block = document.createElement('p');
    block.classList.add('help-block');
    block.classList.add('error');
    block.innerHTML = error;
    messages.appendChild(block);
  };

  const resetFormGroup = (formGroup) => {
    formGroup.classList.remove('has-error');
    formGroup.classList.remove('has-success');
    formGroup.querySelectorAll('.help-block.error').forEach((el) => {
      el.parentNode.removeChild(el);
    });
  };

  const closestParent = (child, className) => {
    if (!child || child === document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    }
    return closestParent(child.parentNode, className);
  };

  const showErrorsForInput = (input, errors) => {
    const formGroup = closestParent(input.parentNode, FORM_GROUP);
    const messages = formGroup.querySelector(MESSAGE);
    resetFormGroup(formGroup);
    if (errors) {
      formGroup.classList.add('has-error');
      errors.forEach((error) => {
        addError(messages, error);
      });
    } else {
      formGroup.classList.add('has-success');
    }
  };

  const showErrors = (form, errors) => {
    form.querySelectorAll('input[name], select[name], textarea').forEach((input) => {
      showErrorsForInput(input, errors && errors[input.name]);
    });
  };

  const sendData = (data) => {
    $.ajax({
      type: 'POST',
      url: '../sendContact.php',
      data, // serializes the form's elements.
      dataType: 'json',
      encode: true,
    }).done((response) => {
      // console.log(response)
      if (response.success) {
        // popups.hidePopup();
        // popups.showPopup('success-popup');
        $("#form-contact").parent().parent().children(".js-popup-close").click()
        $("#form_success").click()
      }
    });
  };
  const sendData1 = (data) => {
    $.ajax({
      type: 'POST',
      url: '../getCatalog.php',
      data, // serializes the form's elements.
      dataType: 'json',
      encode: true,
    }).done((response) => {
      // console.log(response)
      if (response.success) {
        popups.hidePopup();
        popups.showPopup('success-popup');
      }
    });
  };
  const sendData2 = (data) => {
    $.ajax({
      type: 'POST',
      url: '../sendQuiz.php',
      data, // serializes the form's elements.
      dataType: 'json',
      encode: true,
    }).done((response) => {
      // console.log(response)
      if (response.success) {
        // popups.hidePopup();
        // popups.showPopup('success-popup');
        $("#form-contact2").parent().parent().children(".js-popup-close").click()
        $("#form_success").click()
      }
    });
  };
  const sendData3 = (data) => {
    $.ajax({
      type: 'POST',
      url: '../getMaster.php',
      data, // serializes the form's elements.
      dataType: 'json',
      encode: true,
    }).done((response) => {
      // console.log(response)
      if (response.success) {
        // popups.hidePopup();
        // popups.showPopup('success-popup');
        // $("#form-contact").parent().parent().children(".js-popup-close").click()
        $("#form_success").click()
      }
    });
  };

  const sendData4 = (data) => {
    $.ajax({
      type: 'POST',
      url: '../getExcursion.php',
      data, // serializes the form's elements.
      dataType: 'json',
      encode: true,
    }).done((response) => {
      // console.log(response)
      if (response.success) {
        // popups.hidePopup();
        // popups.showPopup('success-popup');
        $("#form-contact-tree").parent().parent().children(".js-popup-close").click()
        $("#form_success").click()
      }
    });
  };

  const validationForm = () => {
    if (FORM !== null) {
      FORM.addEventListener('submit', function sub(ev) {
        ev.preventDefault();
        // const values = validate.collectFormValues(this);
        // const errors = validate(values, constraints);
        // if (errors) {
          // showErrors(this, errors || {});
        // } else {
          const data = $(this).serialize();
          sendData(data);
        // }
      });
    }
  };

  const validationForm1 = () => {
    if (FORM1 !== null) {
      FORM1.addEventListener('submit', function sub(ev) {
        ev.preventDefault();
        // const values = validate.collectFormValues(this);
        // const errors = validate(values, constraints);
        // if (errors) {
          // showErrors(this, errors || {});
        // } else {
          const data = $(this).serialize();
          sendData1(data);
        // }
      });
    }
  };
  const validationForm2 = () => {
    if (FORM2 !== null) {
      FORM2.addEventListener('submit', function sub(ev) {
        ev.preventDefault();
        // const values = validate.collectFormValues(this);
        // const errors = validate(values, constraints);
        // if (errors) {
          // showErrors(this, errors || {});
        // } else {
          const data = $(this).serialize();
          sendData2(data);
        // }
      });
    }
  };
  const validationForm3 = () => {
    if (FORM3 !== null) {
      FORM3.addEventListener('submit', function sub(ev) {
        ev.preventDefault();
        // const values = validate.collectFormValues(this);
        // const errors = validate(values, constraints);
        // if (errors) {
          // showErrors(this, errors || {});
        // } else {
          const data = $(this).serialize();
          sendData3(data);
        // }
      });
    }
  };
  const validationForm4 = () => {
    if (FORM4 !== null) {
      FORM4.addEventListener('submit', function sub(ev) {
        ev.preventDefault();
        // const values = validate.collectFormValues(this);
        // const errors = validate(values, constraints);
        // if (errors) {
          // showErrors(this, errors || {});
        // } else {
          const data = $(this).serialize();
          sendData4(data);
        // }
      });
    }
  };

  const init = () => {
    if (document.getElementsByClassName('form').length > 0) {
      validationForm();
      validationForm1();
      validationForm2();
      validationForm3();
      validationForm4();
    }
  };

  return {
    init,
  };
})();

export default sendForm;
