const PM = require("../model/products")
const router = require("express").Router()

router.post("/",async (req,res)=>{
  var products = await PM.create(req.body)
  res.json(products)
})

router.get("/",async (req,res)=>{
  var products = await PM.find()
  res.json(products)
})

router.put("/:id",async (req,res)=>{
  var products = await PM.findByIdAndUpdate(
    req.params.id,{ $set: req.body },{ new: true })
  res.json(products)
})

router.delete("/:id", async (req,res) => {
  await PM.findByIdAndDelete(req.params.id)
  res.send("product delete sucess")
})

module.exports = router
