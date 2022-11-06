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

  return res.status(200).json({
    message: "API Method Unknown",
  });
}
