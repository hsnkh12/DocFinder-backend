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

        const lastReview = await Review.findAll({
            limit: 1,
            where: {
                doctor_id: doctor.doctor_id
            },
            order: [["date_added","DESC"]]
        })

        const avgReviews = await Review.findAll({
            attributes: [[Sequelize.fn('avg', Sequelize.col('rate')),'rating']],
            where: { doctor_id: doctor.doctor_id},
        })

        const result = {...doctor.dataValues, lastReview, avgReviews}

        return res.json(result)

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

        const lastReview = await Review.findAll({
            limit: 1,
            where: {
                doctor_id: doctor.doctor_id
            },
            order: [["date_added","DESC"]]
        })

        const result = {...doctor.dataValues, lastReview}

        return res.json(result)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Doctor not found" });
    }

}

const filterDoctorsController = async (req, res) => {

    try{

        const body = req.body 

        // Find all doctors with specified field name and clinic
        const doctors = await Doctor.findAll({
            where: { 
                field_name : {[Sequelize.Op.regexp]: req.query.field_name},
                clinic_id : {[Sequelize.Op.regexp]: req.query.clinic_id}
            },
        })

        // Add average review rate to every object of the doctor
        const result = await Promise.all(doctors.map( async (doctor) => {

            // Aggregate rating average for each doctor
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

        // Send a request to the scraper to scrap doctor with specified field name and clinic
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