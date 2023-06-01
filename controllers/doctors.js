const Doctor = require("../models/Doctor")

const getDoctorByIDController = async (req, res) => {

    try{
        const doctor = await Doctor.findOne({
            where:{
                doctor_id: req.params.id 
            }
        })

        return res.json(doctor)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Doctor not found" });
    }

}

const getDoctorsByNameController = async (req, res) => {

    try{
        const doctor = await Doctor.findOne({
            where:{
                name: req.params.name
            }
        })

        return res.json(doctor)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Doctor not found" });
    }

}

const filterDoctorsController = async (req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const deleteDoctorController = async (req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const scrapNewDoctorsController = async(req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }
    
}

module.exports = {
    getDoctorByIDController,
    getDoctorsByNameController,
    filterDoctorsController,
    deleteDoctorController,
    scrapNewDoctorsController
}