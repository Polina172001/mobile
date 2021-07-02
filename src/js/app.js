export default class Mobile {
  constructor(mobile) {
    this.mobile = mobile;
  }

  validateMobile() {
    const start = /((8|\+\d)[-| ]?)/.test(this.mobile);
    const end = /[\d\- ]{7}$/.test(this.mobile);
    const main = /(\(?\d{3}\)?[- ]?)/.test(this.mobile);
    const num = !/[a-z|A-Z]/.test(this.mobile);
    return start && end && main && num;
  }

  format() {
    const split = this.mobile.split(/[- ()]/).join('');
    return split.replace(/^(8|7)/, '+7');
  }
}
