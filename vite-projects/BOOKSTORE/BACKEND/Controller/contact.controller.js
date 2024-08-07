import Contact from "../Model/contact.model.js";

export const submit = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ 
        name: name, 
        email:  email, 
        message: message 
    });

    await newContact.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: 'An error occurred while submitting the form', error: error.message });
  }
};
