export default async function (req, res) {
  if (req.method !== "PUT") {
    return res.status(400).json({
      success: false,
      errors: [{ message: "This has to be a PUT request" }],
      data: null,
    });
  }
  const { id: mainId } = req.query;
  const id = mainId[0];
  const targettedProduct = productList.filter((each) => each.id === id)[0];
  const updatedEnabledField = !(targettedProduct?.enabled ?? false);
  const finalResult = targettedProduct
    ? {
        ...targettedProduct,
        enabled: updatedEnabledField,
      }
    : null;
  return res.status(200).json({
    success: true,
    errors: null,
    data: finalResult,
  });
}

const productList = [
  {
    id: "1",
    name: "Water, 500 mL",
    price: 300,
    enabled: true,
    imageUrl:
      "https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  },
  {
    id: "2",
    name: "Milk, 1000mL",
    price: 250,
    enabled: false,
    imageUrl:
      "https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  },
  {
    id: "3",
    name: "Rice, 1000g",
    price: 1000,
    enabled: true,
    imageUrl:
      "https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
  },
];
