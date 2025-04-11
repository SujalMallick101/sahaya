const schemesData = require("../api/scheme.json");

exports.getTopSchemes = (req, res) => {
  try {
    // schemesData is already an array
    if (!Array.isArray(schemesData)) {
      return res.status(500).json({ success: false, message: "Schemes data is not an array" });
    }

    // Sort by schemeIntroduceDate in descending order
    const sortedSchemes = schemesData.sort(
      (a, b) => new Date(b.schemeIntroduceDate) - new Date(a.schemeIntroduceDate)
    );

    // Get the top 5 schemes
    const topSchemes = sortedSchemes.slice(0, 5);

    // Respond with data
    res.status(200).json({ success: true, data: topSchemes });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get schemes",
      error: error.message,
    });
  }
};
