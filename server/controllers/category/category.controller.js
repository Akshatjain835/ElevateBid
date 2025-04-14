import Category from "../../models/category.model.js";

export const createCategoryController = async (req, res) => {

    try {
      const existingCategory = await Category.findOne({ title: req.body.title });
    //   console.log(existingCategory);

      if (existingCategory) {

        res.status(400).json({ 
            message: "Category with this title already exists"
         });
        return;
      }

      const category = await Category.create({
        user: req.user._id,
        title: req.body.title,
      });
  
    //   res.json(category);
    res.status(201).json({
        message: "Category created successfully",
        success: true,
        data: category,
      });


    } catch (error) {

      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
        });
    }
  };



export const getAllCategoryController = async (req, res) => {

    try {
      const categories = await Category.find({}).populate("user").sort("-createAt");
        // console.log(categories);

    //   res.json(categories);
    res.status(200).json({
        message: "Categories fetched successfully",
        success: true,
        data: categories,
      });

    } catch (error) {

      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message,
      });

    }
  };


export const getCategoryController =async (req, res) => {

    const { id } = req.params;
    // console.log(id);

    try {
      const categorie = await Category.findById(id).populate("user").sort("-createAt");

    //   res.json(categorie);
    res.status(200).json({
        message: "Category fetched successfully",
        success: true,
        data: categorie,
      });

    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message,
      });
    }
  };