const Brand = require('../models/Brand')

exports.getAllBrands = async (req, res) => {
  try {
    let Query = {}
    let Projection = 'name createdAt'
    const brands = await Brand.find(Query, Projection) // Fetch all documents in the Brand collection
    res.status(200).json({ status: 'success', data: brands })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}

exports.createBrand = async (req, res) => {
  try {
    const result = await Brand.create(req.body)
    res
      .status(201)
      .json({
        status: 'success',
        message: 'Data inserted successfully',
        data: result,
      })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}

exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id)
    if (!brand) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Brand not found' })
    }
    res.status(200).json({ status: 'success', data: brand })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}

exports.updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the update respects schema validation
    })

    if (!brand) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Brand not found' })
    }

    res
      .status(200)
      .json({
        status: 'success',
        message: 'Data updated successfully',
        data: brand,
      })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}

exports.deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id) // Delete brand by ID
    if (!brand) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Brand not found' })
    }
    res
      .status(200)
      .json({ status: 'success', message: 'Brand deleted successfully' })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}
