export default async function (req, res) {
  if (req.method === "POST") {
    const { name, price, cost, description, units, weightPerUnit, id, images } =
      req.body;
    if (!name || !price || !cost || !id || (images || []).length === 0) {
      return res.status(400).json({
        success: false,
        errors: [
          {
            message:
              "name, price, cost, id have to be provided for product creation. One least one image should be provided",
          },
        ],
        data: null,
      });
    }
    if (units && !weightPerUnit) {
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
    // check whether image urls are valid
    const areThereInvalidImages = images.some(
      (each) => !each.startsWith("https")
    );
    if (areThereInvalidImages) {
      return res.status(400).json({
        success: false,
        errors: [{ message: "some or all of the image urls are invalid!" }],
        data: null,
      });
    }
    const newProduct = {
      id,
      name,
      cost,
      price,
      images,
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
        id: "1",
        name: "Water, 500 mL",
        price: 300,
        enabled: true,
        images: [
          "https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        ],
      },
      {
        id: "2",
        name: "Milk, 1000mL",
        price: 250,
        enabled: false,
        images: [
          "https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
        ],
      },
      {
        id: "3",
        name: "Rice, 1000g",
        price: 1000,
        enabled: true,
        images: [
          "https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        ],
      },
    ];

    return res.status(200).json({
      success: true,
      errors: null,
      data: productList,
    });
  }

  return res.status(200).json({
    success: false,
    errors: [
      {
        message: "Requested API method doesn't have a valid operation",
      },
    ],
    data: null,
  });
}
