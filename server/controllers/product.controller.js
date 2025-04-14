import slugify from "slugify";
import Product from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createProductController = async (req, res) => {

  const { title, description, price, category, height, lengthpic, width, mediumused, weigth } = req.body;

  const userId = req.user.id;

  const originalSlug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
  });

  let slug = originalSlug;

  let suffix = 1;

  while (await Product.findOne({ slug })) {

    slug = `${originalSlug}-${suffix}`;
    suffix++;
  }


  if (!title || !description || !price) {

    return res.status(400).json({ message: "Please fill all fields" });

  }

  let fileData = {};

  if (req.file) {

    try {
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {

        folder: "Bidding/Product",
        resource_type: "image",
      });


      fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: req.file.mimetype,
        public_id: uploadedFile.public_id,
      };

    } catch (error) {

      return res.status(500).json({
         message: "Image upload failed"
         });
    }
  }

  const product = await Product.create({
    user: userId,
    title,
    slug,
    description,
    price,
    category,
    height,
    lengthpic,
    width,
    mediumused,
    weigth,
    image: fileData,
  });

  res.status(201).json({
    message: "Product created successfully",
    success: true,
    data: product,
  });
};


export const getAllProductsController =async (req, res) => {

  const products = await Product.find({}).sort("-createdAt").populate("user");
  // console.log(products);

    

  res.status(200).json({
    message: "Products fetched successfully",
    success: true,
    data: productsWithDetails,
  });
};


export const deleteProductController = async (req, res) => {

  const { id } = req.params;
  // console.log(id);
  const product = await Product.findById(id);
  // console.log(product);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  if (product.user?.toString() !== req.user.id) {

    return res.status(401).json({
      message: "You are not authorized to delete this product",
    });
  }

  if (product.image && product.image.public_id) {
    // Delete image from Cloudinary
    // console.log(product.image.public_id);
    try {
      await cloudinary.uploader.destroy(product.image.public_id);

    } catch (error) {
      res.status(500).json({
        message: "Image deletion failed",
      });
      console.error("Error deleting image from Cloudinary:", error);
    }
  }

  await Product.findByIdAndDelete(id);

  res.status(200).json({ 
    success: true,  

    message: "Product deleted."
   });
};

export const updateProductController = async (req, res) => {

  const { title, description, price, height, lengthpic, width, mediumused, weigth } = req.body;
  // console.log(req.body);
  const { id } = req.params;
  const product = await Product.findById(id);
  // console.log(product);

  if (!product) {

   return res.status(404).json({
      message: "Product not found",
    });
  }
  if (product.user.toString() !== req.user.id) {
    return res.status(401).json({
      message: "You are not authorized to update this product",
    });
  }

  let fileData = {};

  if (req.file) {
    let uploadedFile;

    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Product-Images",
        resource_type: "image",
      });

    } catch (error) {

      return res.status(500).json({
        message: "Image upload failed",
      });
    }

    if (product.image && product.image.public_id) {
      try {
        await cloudinary.uploader.destroy(product.image.public_id);
      } catch (error) {
        console.error("Error deleting previous image from Cloudinary:", error);
      }
    }
    //step 1 :
    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      public_id: uploadedFile.public_id,
    };
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: id },
    {
      title,
      description,
      price,
      height,
      lengthpic,
      width,
      mediumused,
      weigth,
      image: Object.keys(fileData).length === 0 ? Product?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }

  );
  // res.status(200).json(updatedProduct);
  res.status(200).json({
    message: "Product updated successfully",
    success: true,
    data: updatedProduct,
  });
};
