export const CheckOrderStatus = (type) => {
  switch (type) {
    case "OP":
      return "Order Received";
    case "OC":
      return "Order Cancelled";
    case "PP" || "SHP":
      return "Order Dispatched";
    case "OT":
      return "Order in Transit";
    case "NDR":
      return "Failed Attempt at Delivery";
    case "OO":
      return "Order Out for Delivery";
    case "DL":
      return "Your Order has been delivered";
    case "RTO" || "RTD":
      return "Order Returned";
    case "LT":
      return "Shipment Lost";
    default:
      return "Order Initiated";
  }
};

export const Color = (orderStatus) => {
  switch (orderStatus) {
    case "OP" || "OT":
      return "#38446D";
    case "NDR" || "RTO" || "RTD":
      return "#EF7E00";
    case "DL":
      return "#3B9A00";
    case "OC":
      return "#FA5357";
    case "LT":
      return '#800000';
    default:
      return "#38446D";
  }
};

export const icons = {
  NDR: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  DL: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  RTO: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  RTD: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  OC: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  OT: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OO: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  PP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  SHP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  LT : "https://d10srchmli830n.cloudfront.net/1657270253214_d2f26fef-6d1c-4f46-8f2c-764fc68b38b4_Group-1116599574-(1).svg"
};
