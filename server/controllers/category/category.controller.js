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