const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
const User = require("../models/userModel")


const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    console.log(`Contacts with user id ${req.user.id} are:\n`, contacts)
    res.status(200).json(contacts)
})
const createContacts = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    console.log("User information from req: ", req.user)
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const newContact = await Contact.create({user_id: req.user.id, name , email, phone})
    
    res.status(201).json({message: "Create contacts"})
})
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Hampe to haino")
    }        
    res.status(200).json(contact)
})
const updateContacts = asyncHandler(async (req, res) => {
    const oldContact = await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({message: `updated contact ${req.params.id}`})
})
const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.deleteOne({_id: req.params.id})
    res.status(200).json({message: `deleted contact ${req.params.id}`})
    console.log(req.body)
})

module.exports = {getContacts, createContacts, getContact, updateContacts, deleteContacts}
