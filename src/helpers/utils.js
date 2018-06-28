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
    } else if ((typeof value === 'string' || value instanceof String) && parseInt(value, 10)) {
      value = parseInt(value, 10);
    }

    return value;
  }

  static processTransactionStatus(value) {
    let processedValue;
    switch (value) {
      case 1:
        processedValue = "Đã tiếp nhận đơn hàng";
        break;
      case 2:
        processedValue = "Đã giao hàng";
        break;
      case 3:
        processedValue = "Đã hủy";
        break;
      default:
        processedValue = "Đã tiếp nhận đơn hàng";
        break;
    }

    return processedValue;
  }
}
