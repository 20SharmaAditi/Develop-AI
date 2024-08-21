const Prompt = require("../ModelsAndSchemas/Prompt.model");

const getNextSavedIndex = async () => {
  try {
    const lastPrompt = await Prompt.findOne().sort({ _id: -1 });
    if (lastPrompt && typeof lastPrompt.savedIndex === "number") {
      return (lastPrompt.savedIndex % 5) + 1;
    } else {
      return 1;
    }
  } catch (error) {
    console.error("Error in getNextSavedIndex:", error);
    return 1;
  }
};


exports.getPromptData = async (req, res) => {
  const seePromptdata = await Prompt.find();

  if (!seePromptdata || seePromptdata.length < 0) {
    res.status(400).json({
      status: "Failed",
      message: "There is no data to show",
    });
  }

  res.status(200).json({
    status: "Success",
    TotalData: seePromptdata.length,

    Data: {
      seePromptdata,
    },
  });
};

exports.addPromptData = async (req, res) => {
  try {
   const nextSavedIndex = await getNextSavedIndex();
   const promptData = {
     ...req.body,
     savedIndex: nextSavedIndex,
   };
   const addPrompt = await Prompt.create(promptData);

    res.status(201).json({
      status: "Success",
      message: "Data Saved Successfully",
      data: addPrompt,
      
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getOnePromptData = async (req, res) => {
  const { id } = req.params;

  try {
    const promptData = await Prompt.findById(id);

    if (!promptData) {
      return res
        .status(404)
        .json({ status: "Failed", message: "No data found" });
    }

    res.status(200).json({
      status: "Success",
      data: promptData,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Server error",
      error: error.message,
    });
  }
};

