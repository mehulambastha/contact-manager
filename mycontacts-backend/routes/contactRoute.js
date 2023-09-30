const express = require("express")
const validateToken = require("../middleware/validationHandler")

const router = express.Router()

const {getContacts, createContacts, getContact, updateContacts, deleteContacts} = require('../controllers/contactController')


router.use(validateToken)
router.route("/").get(getContacts).post(createContacts)
router.route("/:id").put(updateContacts).delete(deleteContacts).get(getContact)

module.exports = router