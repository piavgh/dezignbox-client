export default class Utils {

  /**
   * Handle option input (convert back to boolean)
   * @param value
   * @return {*}
   */
  static handleOptionInput(value) {
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }

    return value;
  }
}
