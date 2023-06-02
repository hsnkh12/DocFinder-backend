const Doctor = require("../models/Doctor")
const Sequelize = require("sequelize")
const Review = require("../models/review")
const {delayQueuedTask} = require("../utils/task")

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
                name: {
                    [Sequelize.Op.regexp]: req.params.name
                }
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

        const body = req.body 
        
        const doctors = await Doctor.findAll({
            where: { 
                field_name : {[Sequelize.Op.regexp]: body.field_name},
                clinic_id : {[Sequelize.Op.regexp]: ".*"}
            },
        })

        const result = await Promise.all(doctors.map( async (doctor) => {

            const avgReviews = await Review.findAll({
                attributes: [[Sequelize.fn('avg', Sequelize.col('rate')),'rating']],
                where: { doctor_id: doctor.doctor_id},
            })

            return {...doctor.dataValues, avgReviews}
        }))
        
        return res.json(result)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });    }

}

const deleteDoctorController = async (req, res) => {

    try{

        if(!req.is_admin){
            return res.status(401).send({ Message: "Not authorized" });
        }

        await Doctor.destroy({
            where:{
                doctor_id: req.params.id
            }
        })

        return res.json(true)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

const scrapNewDoctorsController = async(req, res) => {

    try{

        const body = req.body

        if(!req.is_admin){
            return res.status(401).send({ Message: "Not authorized" });
        }

        await delayQueuedTask(body.field_name,body.clinic_id)
        return res.json(true)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }
    
}

module.exports = {
    getDoctorByIDController,
    getDoctorsByNameController,
    filterDoctorsController,
    deleteDoctorController,
    scrapNewDoctorsController
}