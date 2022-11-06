export default async function (req, res) {
  if (req.method === "POST") {
    const { name, price, cost, description, units, weightPerUnit } = req.body;
    if (!name || !price || !cost) {
      return res.status(400).json({
        success: false,
        errors: [
          {
            message:
              "name, price, cost have to be provided for product creation",
          },
        ],
        data: null,
      });
    }
    if (unit && !weightPerUnit) {
      return res.status(400).json({
        success: false,
        errors: [
          {
            message:
              "weightPerUnit must be provided for non-zero value of units",
          },
        ],
      });
    }
    const newProduct = {
      name,
      price,
      description: description || "",
      units: units || 0,
      weightPerUnit: weightPerUnit || 0,
    };
    return res.status(200).json({
      success: true,
      errors: null,
      data: newProduct,
    });
  }

  if (req.method === "GET") {
    const productList = [
      {
        name: "Water, 500 mL",
        price: 300,
        enabled: true,
        imageUrl:
          "https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
      },
      {
        name: "Milk, 1000mL",
        price: 250,
        enabled: false,
        imageUrl:
          "https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
      },
      {
        name: "Rice, 1000g",
        price: 1000,
        enabled: true,
        imageUrl:
          "https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
      },
    ];

    return res.status(200).json({
      success: true,
      errors: null,
      data: productList,
    });
  }

  return res.status(200).json({
    message: "API Method Unknown",
  });
}